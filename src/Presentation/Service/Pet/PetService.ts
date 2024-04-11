import { ConflictException, Injectable } from '@nestjs/common';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';
import { PetUseCase } from '../../../Application/UseCase/Pet/PetUseCase';
import { PetRepository } from '../../Repository/Pet/PetRepository';
import { PetCreateDto } from '../../../Application/Dto/Pet/PetCreateDto';
import { PetUpdateDto } from '../../../Application/Dto/Pet/PetUpdateDto';
import { PersonRepository } from '../../Repository/Person/PersonRepository';

@Injectable()
export class PetService {

  constructor(private petRepository: PetRepository, private personRepository: PersonRepository, private petUseCase: PetUseCase) {}

  async create(personId, petCreateDto: PetCreateDto) {

    const existingPerson = await this.personRepository.getPerson(personId);

    if (!existingPerson) {
      throw new ConflictException('Person not found');
    }

    return await this.petUseCase.create(personId, petCreateDto);

  }

  async update(id: number, petUpdateDto: PetUpdateDto) {

    const existingPet = await this.petRepository.getPet(id);

    if (!existingPet) {
      throw new ConflictException('Pet not found');
    }

    Object.assign(existingPet, petUpdateDto);

    return await this.petUseCase.update(existingPet);

  }

  async findOne(id: number): Promise<Person | null> {
    return await this.petRepository.getPet(id);
  }

  async findAll() {
    return await this.petRepository.getPets();
  }

  async remove(id: number): Promise<string> {

    await this.petRepository.delete(id);

    return `Pet #${id} is delete successful`;

  }

}
