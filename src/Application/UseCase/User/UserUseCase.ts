import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../../../Domain/Entity/User/UserEntity';
import { UserCreateDto } from '../../Dto/User/UserCreateDto';
import { UserRepository } from '../../../Presentation/Repository/User/UserRepository';

@Injectable()
export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async create(userCreateDto: UserCreateDto) {

    const userObject = new User();
    userObject.login = userCreateDto.login;
    userObject.password = await bcrypt.hash(userCreateDto.password, 10);

    return await this.userRepository.create(userObject);
  }

  async update(userObject: User) {

    userObject.password = await bcrypt.hash(userObject.password, 10);

    return await this.userRepository.update(userObject);
  }
}