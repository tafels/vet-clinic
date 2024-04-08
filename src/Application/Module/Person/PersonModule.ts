import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';
import { PersonController } from '../../../Presentation/Controller/Person/PersonController';
import { PersonService } from '../../../Presentation/Service/Person/PersonService';
import { PetUseCase } from '../../UseCase/Pet/PetUseCase';
import { PersonRepository} from '../../../Presentation/Repository/Person/PersonRepository';
import { PetRepository} from '../../../Presentation/Repository/Pet/PetRepository';


@Module({
  imports: [TypeOrmModule.forFeature([Person, Pet])],
  controllers: [PersonController],
  providers: [PersonService, PersonRepository, PetRepository, PetUseCase],
  exports: [PersonService],
})
export class PersonModule {}
