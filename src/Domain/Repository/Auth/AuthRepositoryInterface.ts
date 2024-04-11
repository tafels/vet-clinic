import { UserAuthDto } from '../../../Application/Dto/User/UserAuthDto';

export interface AuthRepositoryInterface {
  initAuthUser(userAuthDto: UserAuthDto): Promise<any>;

}