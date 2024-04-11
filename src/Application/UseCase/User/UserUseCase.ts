import { Injectable } from '@nestjs/common';
import { User } from '../../../Domain/Entity/User/UserEntity';
import { UserCreateDto } from '../../Dto/User/UserCreateDto';
import { UserRepository } from '../../../Presentation/Repository/User/UserRepository';


@Injectable()
export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async create(userCreateDto: UserCreateDto) {

    const userObject = new User();
    userObject.login = userCreateDto.login;
    userObject.password = userCreateDto.password;


    return await this.userRepository.create(userCreateDto);
  }
}