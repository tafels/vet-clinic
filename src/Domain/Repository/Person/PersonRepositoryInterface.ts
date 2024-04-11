import { PersonCreateDto } from '../../../Application/Dto/Person/PersonCreateDto';
import { PersonUpdateDto } from '../../../Application/Dto/Person/PersonUpdateDto';
import { Person } from '../../Entity/Person/PersonEntity';

export interface PersonRepositoryInterface {
  create(PersonCreateDto: PersonCreateDto): Promise<any>;

  getPerson(id: number): Promise<any>;

  getPersons(): Promise<any>;

  update(personObject:Person): Promise<any>;

  delete(id: number): Promise<any>;
}