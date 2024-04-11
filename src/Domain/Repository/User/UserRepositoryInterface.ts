import { User } from '../../Entity/User/UserEntity';

export interface UserRepositoryInterface {
  createDefault(userData:User[]): Promise<any>;

  create(userObject:User): Promise<any>;

  getUser(login: string): Promise<any>;

  getUsers(): Promise<any>;

  update(userObject:User): Promise<any>;

  delete(id: number): Promise<any>;

}