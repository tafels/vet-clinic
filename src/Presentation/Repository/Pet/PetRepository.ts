import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PetRepositoryInterface } from '../../../Domain/Repository/Pet/PetRepositoryInterface';


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

  async update(petObject): Promise<any> {
    return await this.petRepository.save(petObject);
  }

  async delete(id: number): Promise<any> {
    return await this.petRepository.delete(id);
  }

}
