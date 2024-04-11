import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as process from 'process';
import * as bcrypt from 'bcrypt';
import { UserAuthDto } from '../../../Application/Dto/User/UserAuthDto';
import { UserRepository } from '../../Repository/User/UserRepository';

@Injectable()
export class AuthService {

  constructor(private userRepository: UserRepository) {}

  async initToken(userAuthDto: UserAuthDto) {

    const existingUser = await this.userRepository.getUser(userAuthDto.login);

    if (!existingUser) {
      throw new ConflictException('access denied');
    }

    try {
      if (await bcrypt.compare(userAuthDto.password, existingUser.password)) {
        return process.env.apiKey;
      }else {
        throw new ConflictException('access denied');
      }
    } catch {
      throw new ConflictException('access denied');
    }

  }

}