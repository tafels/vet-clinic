import { PersonCreateDto } from '../../../Application/Dto/Person/PersonCreateDto';
import { PersonUpdateDto } from '../../../Application/Dto/Person/PersonUpdateDto';

export interface PersonRepositoryInterface {
  create(PersonCreateDto: PersonCreateDto): Promise<any>;

  getPerson(id: number): Promise<any>;

  getPersons(): Promise<any>;

  update(PersonUpdateDto: PersonUpdateDto): Promise<any>;

  delete(id: number): Promise<any>;
}