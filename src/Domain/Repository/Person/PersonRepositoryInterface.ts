import { Person } from '../../Entity/Person/PersonEntity';

export interface PersonRepositoryInterface {
  create(personObject:Person): Promise<any>;

  getPerson(id: number): Promise<any>;

  getPersons(): Promise<any>;

  update(personObject:Person): Promise<any>;

  delete(id: number): Promise<any>;
}