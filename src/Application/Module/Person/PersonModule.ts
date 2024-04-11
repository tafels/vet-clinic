import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PetRepository} from '../../../Presentation/Repository/Pet/PetRepository';
import { PersonController } from '../../../Presentation/Controller/Person/PersonController';
import { PersonService } from '../../../Presentation/Service/Person/PersonService';
import { PersonUseCase } from '../../UseCase/Person/PersonUseCase';
import { PersonRepository} from '../../../Presentation/Repository/Person/PersonRepository';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Pet])],
  controllers: [PersonController],
  providers: [PersonService, PersonRepository, PetRepository, PersonUseCase],
  exports: [PersonService],
})
export class PersonModule {}
