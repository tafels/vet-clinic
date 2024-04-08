import { PetCreateDto } from '../../../Application/Dto/Pet/PetCreateDto';
import { PetUpdateDto } from '../../../Application/Dto/Pet/PetUpdateDto';

export interface PetRepositoryInterface {

  create(PetCreateDto: PetCreateDto): Promise<any>;

  getPet(id: number): Promise<any>;

  getPersonByPetId(id: number): Promise<any>;

  update(PersonUpdateDto: PetUpdateDto): Promise<any>;

  delete(id: number): Promise<any>;
}