import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PersonRepositoryInterface } from '../../../Domain/Repository/Person/PersonRepositoryInterface';
import { PersonCreateDto } from '../../../Application/Dto/Person/PersonCreateDto';
import { PersonUpdateDto } from '../../../Application/Dto/Person/PersonUpdateDto';



@Injectable()
export class PersonRepository implements PersonRepositoryInterface {

  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private readonly dataSource: DataSource,
  ) {}

  async create(PersonCreateDto: PersonCreateDto): Promise<any> {

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const personObject = new Person();
      personObject.firstName = PersonCreateDto.firstName;
      personObject.lastName = PersonCreateDto.lastName;
      personObject.phone = PersonCreateDto.phone;
      const personData = await queryRunner.manager.save(personObject);

      const pets = [];

      if (PersonCreateDto.pets !== undefined) {

        for (const row of PersonCreateDto.pets) {
          const petObject = new Pet();
          petObject.person = personData;
          petObject.name = row.name;
          petObject.type = row.type;
          petObject.year = row.year;
          pets.push(petObject);
        }

        await queryRunner.manager.save(pets);
      }

      await queryRunner.commitTransaction();

      return PersonCreateDto;

    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    return PersonCreateDto;

  }

  async getPerson(id: number): Promise<any> {
    return await this.personRepository.findOneBy({ id: id });
  }

  async getPersonByPhone(phone: string): Promise<any> {
    return await this.personRepository.findOneBy({ phone: phone });
  }

  async getPersons(): Promise<any> {
    const isActive = true;
    return await this.personRepository.find({ where: { isActive: isActive } });
  }

  async update(personObject:Person): Promise<any> {
    return await this.personRepository.save(personObject);
  }

  async delete(id: number): Promise<any> {
    await this.personRepository.delete(id);
  }

}
