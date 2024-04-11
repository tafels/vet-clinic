import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../Domain/Entity/User/UserEntity';
import { UserService } from '../../../Presentation/Service/User/UserService';
import { UserController } from '../../../Presentation/Controller/User/UserController';
import { UserRepository } from '../../../Presentation/Repository/User/UserRepository';
import { UserUseCase } from '../../UseCase/User/UserUseCase';
import { AuthService } from '../../../Presentation/Service/Auth/AuthService';
import { AuthRepository} from '../../../Presentation/Repository/Auth/AuthRepository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserUseCase, AuthService, AuthRepository],
  exports: [UserService],
})
export class UserModule {}