import { User } from '../../Entity/User/UserEntity';

export interface UserRepositoryInterface {

  create(userObject:User): Promise<any>;

  getUser(login: string): Promise<any>;

  getUsers(): Promise<any>;

  getAuthUser(userObject:User): Promise<any>;

  update(userObject:User): Promise<any>;

  delete(id: number): Promise<any>;

}