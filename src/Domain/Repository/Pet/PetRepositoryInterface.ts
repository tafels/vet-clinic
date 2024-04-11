import { Pet } from '../../Entity/Pet/PetEntity'

export interface PetRepositoryInterface {

  create(petObject:Pet): Promise<any>;

  getPet(id: number): Promise<any>;

  getPersonByPetId(id: number): Promise<any>;

  update(petObject:Pet): Promise<any>;

  delete(id: number): Promise<any>;
}