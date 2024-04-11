import { Injectable } from '@nestjs/common';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PetRepository } from '../../../Presentation/Repository/Pet/PetRepository';
import { PetCreateDto } from '../../Dto/Pet/PetCreateDto';

@Injectable()
export class PetUseCase {
  constructor(private petRepository: PetRepository) {}

  async create(personId, PetCreateDto: PetCreateDto) {

    const petObject = new Pet();
    petObject.person = personId;
    petObject.name = PetCreateDto.name;
    petObject.type = PetCreateDto.type;
    petObject.year = PetCreateDto.year;

    return await this.petRepository.create(petObject);
  }
}