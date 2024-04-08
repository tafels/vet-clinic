import { ConflictException, Injectable } from '@nestjs/common';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';
import { PersonRepository } from '../../Repository/Person/PersonRepository';
import { PetRepository } from '../../Repository/Pet/PetRepository';
import { PersonCreateDto } from '../../../Application/Dto/Person/PersonCreateDto';
import { PersonUpdateDto } from '../../../Application/Dto/Person/PersonUpdateDto';

@Injectable()
export class PersonService {

  private readonly persons: Person[] = [];

  constructor(private personRepository: PersonRepository, private petRepository: PetRepository) {}

  async create(PersonCreateDto: PersonCreateDto) {

    const existingPerson = await this.personRepository.getPersonByPhone(PersonCreateDto.phone);

    if (existingPerson) {
      throw new ConflictException('Person with this phone already exists');
    }

    return await this.personRepository.create(PersonCreateDto);

  }

  async update(id: number, PersonUpdateDto: PersonUpdateDto) {

    const existingPerson = await this.personRepository.getPerson(id);

    if (!existingPerson) {
      throw new ConflictException('Person not found');
    }

    Object.assign(existingPerson, PersonUpdateDto);

    return await this.personRepository.update(existingPerson);

  }

  async findOne(id: number): Promise<Person | null> {

    return await this.personRepository.getPerson(id);

  }

  async findAll() {

    return await this.personRepository.getPersons();

  }

  async remove(id: number): Promise<string> {

    const existingPerson = await this.personRepository.getPerson(id);

    if (!existingPerson) {
      throw new ConflictException('Person not found');
    }

    await this.personRepository.delete(id);

    return `Person #${id} is delete successful`;
  }

}
