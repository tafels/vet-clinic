import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from '../../../Domain/Repository/User/UserRepositoryInterface';
import { DataSource, Repository } from 'typeorm';
import { User } from '../../../Domain/Entity/User/UserEntity';
import { UserCreateDto} from '../../../Application/Dto/User/UserCreateDto';
import { UserAuthDto } from '../../../Application/Dto/User/UserAuthDto';
import { UserUpdateDto } from '../../../Application/Dto/User/UserUpdateDto';

@Injectable()
export class UserRepository implements UserRepositoryInterface {

  constructor(@InjectRepository(User) private userRepository: Repository<User>, private readonly dataSource: DataSource) {}

  async createDefault(users: User[]) {
    await this.dataSource.transaction(async manager => {
      for (const row of users) {

        const user = await this.userRepository.findOneBy( { login: row.login })

        if(!user) {

          const userObject = new User();
          userObject.login = row.login;
          userObject.password = row.password;

          await manager.save(userObject);
        }
      }
    });
  }

  async create(userCreateDto: UserCreateDto): Promise<any> {
    return await this.userRepository.save(userCreateDto);
  }

  async getUser(login: string): Promise<any> {

    const select = {
      UpdatedAt: true,
      createdAt: true,
      id: true,
      login: true
    };

    return await this.userRepository.findOne({select: select, where:{login:login}});
  }

  async getUsers(): Promise<any> {

    const select = {
      UpdatedAt: true,
      createdAt: true,
      id: true,
      login: true
    };

    return await this.userRepository.find({select: select});
  }

  async update(userUpdateDto: UserUpdateDto): Promise<any> {
    return await this.userRepository.save(userUpdateDto);
  }

  async delete(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }

}
