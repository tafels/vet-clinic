import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PersonRepositoryInterface } from '../../../Domain/Repository/Person/PersonRepositoryInterface';

@Injectable()
export class PersonRepository implements PersonRepositoryInterface {

  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private readonly dataSource: DataSource,
  ) {}

  async create(personObject): Promise<any> {
    return await this.personRepository.save(personObject);
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
