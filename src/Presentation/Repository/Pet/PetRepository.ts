import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PetRepositoryInterface } from '../../../Domain/Repository/Pet/PetRepositoryInterface';
import { PetUpdateDto } from '../../../Application/Dto/Pet/PetUpdateDto';
import { Repository } from 'typeorm';

@Injectable()
export class PetRepository implements PetRepositoryInterface {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {}

  async create(petObject): Promise<any> {
    return await this.petRepository.save(petObject);
  }

  async getPersonByPetId(id: number): Promise<any> {
    const pet = await this.petRepository.findOne({ where: { id: id } });
    return pet.person;
  }

  async getPet(id: number): Promise<any> {
    return await this.petRepository.findOne({ where: { id: id } });
  }

  async getPets(): Promise<any> {
    return await this.petRepository.find();
  }

  async update(PersonUpdateDto: PetUpdateDto): Promise<any> {
    return await this.petRepository.save(PersonUpdateDto);
  }

  async delete(id: number): Promise<any> {
    return await this.petRepository.delete(id);
  }

}
