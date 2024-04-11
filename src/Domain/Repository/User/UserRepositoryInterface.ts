import { UserAuthDto } from '../../../Application/Dto/User/UserAuthDto';
import { UserUpdateDto } from '../../../Application/Dto/User/UserUpdateDto';
import { UserCreateDto } from '../../../Application/Dto/User/UserCreateDto';

export interface UserRepositoryInterface {
  createDefault(userData): Promise<any>;

  create(userCreateDto: UserCreateDto): Promise<any>;

  getUser(login: string): Promise<any>;

  getUsers(): Promise<any>;

  update(userUpdateDto: UserUpdateDto): Promise<any>;

  delete(id: number): Promise<any>;

}