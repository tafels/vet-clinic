import { Module } from '@nestjs/common';
import { ApiKeyStrategy } from './ApiKeyStrategy';
import { User } from '../../../Domain/Entity/User/UserEntity';
import { AuthService } from '../../../Presentation/Service/Auth/AuthService';
import { AuthController } from '../../../Presentation/Controller/Auth/AuthController';
import { AuthRepository} from '../../../Presentation/Repository/Auth/AuthRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([User]),PassportModule, ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, ApiKeyStrategy],
  exports: [AuthService],
})
export class AuthModule {}