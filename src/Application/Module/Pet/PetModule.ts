import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PetController } from '../../../Presentation/Controller/Pet/PetController';
import { PetService } from '../../../Presentation/Service/Pet/PetService';
import { PetUseCase } from '../../UseCase/Pet/PetUseCase';
import { PetRepository} from '../../../Presentation/Repository/Pet/PetRepository';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';
import { PersonRepository } from '../../../Presentation/Repository/Person/PersonRepository';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Person])],
  controllers: [PetController],
  providers: [PetService, PetRepository, PersonRepository, PetUseCase],
  exports: [PetService],
})
export class PetModule {}
