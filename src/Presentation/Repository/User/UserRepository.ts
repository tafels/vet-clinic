import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from '../../../Domain/Entity/User/UserEntity';
import { UserRepositoryInterface } from '../../../Domain/Repository/User/UserRepositoryInterface';
import { UserAuthDto } from '../../../Application/Dto/User/UserAuthDto';

@Injectable()
export class UserRepository implements UserRepositoryInterface {

  constructor(@InjectRepository(User) private userRepository: Repository<User>, private readonly dataSource: DataSource) {}

  async create(userObject): Promise<any> {
    return await this.userRepository.save(userObject);
  }

  async getUser(login: string): Promise<any> {
    return await this.userRepository.findOne({where:{login:login}});
  }

  async getUsers(): Promise<any> {

    const select = {
      id: true,
      login: true,
      UpdatedAt: true,
      createdAt: true
    };

    return await this.userRepository.find({select: select});
  }

  async getAuthUser(userAuthDto:UserAuthDto): Promise<any> {
    return await this.userRepository.findOneBy(userAuthDto)
  }

  async update(userObject): Promise<any> {
    return await this.userRepository.save(userObject);
  }

  async delete(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }

}
