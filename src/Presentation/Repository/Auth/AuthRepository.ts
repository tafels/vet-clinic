import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../Domain/Entity/User/UserEntity';
import { AuthRepositoryInterface } from '../../../Domain/Repository/Auth/AuthRepositoryInterface';

@Injectable()
export class AuthRepository implements AuthRepositoryInterface {

  constructor(@InjectRepository(User) private authRepository: Repository<User>) {}

}
