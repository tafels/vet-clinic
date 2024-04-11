import { ConflictException, Injectable } from '@nestjs/common';
import * as process from 'process';
import { AuthRepository } from '../../Repository/Auth/AuthRepository';
import { UserAuthDto } from '../../../Application/Dto/User/UserAuthDto';

@Injectable()
export class AuthService {

  constructor(private authRepository: AuthRepository) {}

  async initToken(userAuthDto: UserAuthDto) {
    const existingUser = await this.authRepository.initAuthUser(userAuthDto)

    if(!existingUser){
      throw new ConflictException('access denied');
    }

    return process.env.apiKey;

  }

}