import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyStrategy } from './ApiKeyStrategy';
import { User } from '../../../Domain/Entity/User/UserEntity';
import { UserRepository } from '../../../Presentation/Repository/User/UserRepository';
import { AuthService } from '../../../Presentation/Service/Auth/AuthService';
import { AuthController } from '../../../Presentation/Controller/Auth/AuthController';
import { AuthRepository} from '../../../Presentation/Repository/Auth/AuthRepository';



@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, ApiKeyStrategy, UserRepository],
  exports: [AuthService],
})
export class AuthModule {}