import { ConflictException, Injectable } from '@nestjs/common';
import { UserCreateDto } from '../../../Application/Dto/User/UserCreateDto';
import { UserUpdateDto } from '../../../Application/Dto/User/UserUpdateDto';
import { UserRepository } from '../../Repository/User/UserRepository';
import { UserUseCase } from '../../../Application/UseCase/User/UserUseCase';

export type User = any;

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      login: 'admin',
      password: 'admin',
    },
    {
      login: 'test',
      password: 'test',
    }
  ];

  constructor(private userRepository: UserRepository, private userUseCase: UserUseCase) {}

  async createDefaultNewUser() {

    for (const row of this.users) {

      const existingUser = await this.userRepository.getUser(row.login)

      if(!existingUser) {
        await this.userUseCase.create(row);
      }

    }

  }

  async create(userCreateDto: UserCreateDto) {

    const existingUser = await this.userRepository.getUser(userCreateDto.login);

    if (existingUser) {
      throw new ConflictException('This user already exist');
    }

    return await this.userUseCase.create(userCreateDto);
  }

  async findOne(login: string): Promise<User | undefined> {
    return await this.userRepository.getUser(login);
  }

  async findAll(): Promise<User | undefined> {
    return await this.userRepository.getUsers();
  }

  async update(login: string, userUpdateDto: UserUpdateDto) {

    const existingUser = await this.userRepository.getUser(login);

    if (!existingUser) {
      throw new ConflictException('User not found');
    }

    Object.assign(existingUser, userUpdateDto);

    return await this.userUseCase.update(existingUser);

  }

  async remove(id: number): Promise<any> {

    await this.userRepository.delete(id);

    return `User #${id} is delete successful`;

  }
}