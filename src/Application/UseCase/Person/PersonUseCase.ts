import { Injectable } from '@nestjs/common';
import { PersonRepository } from '../../../Presentation/Repository/Person/PersonRepository';

@Injectable()
export class PersonUseCase {

  constructor(private personRepository: PersonRepository) {}

}