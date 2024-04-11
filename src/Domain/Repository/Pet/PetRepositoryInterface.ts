import { Pet } from '../../Entity/Pet/PetEntity'
import { PetUpdateDto } from '../../../Application/Dto/Pet/PetUpdateDto';

export interface PetRepositoryInterface {

  create(petObject:Pet): Promise<any>;

  getPet(id: number): Promise<any>;

  getPersonByPetId(id: number): Promise<any>;

  update(PersonUpdateDto: PetUpdateDto): Promise<any>;

  delete(id: number): Promise<any>;
}