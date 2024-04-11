import { Injectable } from '@nestjs/common';
import { Person } from '../../../Domain/Entity/Person/PersonEntity'
import { PersonRepository } from '../../../Presentation/Repository/Person/PersonRepository';
import { PersonCreateDto } from '../../Dto/Person/PersonCreateDto';


@Injectable()
export class PersonUseCase {

  constructor(private personRepository: PersonRepository) {}

  async create(personCreateDto: PersonCreateDto) {

    const personObject = new Person();
    personObject.firstName = personCreateDto.firstName;
    personObject.lastName = personCreateDto.lastName;
    personObject.phone = personCreateDto.phone;
    personObject.email = personCreateDto.email;

    return await this.personRepository.create(personObject);
  }

  async update(personObject: Person){
    return await this.personRepository.update(personObject);
  }

}