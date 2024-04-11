import { ApiProperty } from '@nestjs/swagger';
// import { length } from 'class-validator';
import { Length } from 'class-validator';

export class UserCreateDto {
  @ApiProperty({ example: 'login' })
  readonly login: string;
  @ApiProperty({ example: 'password' })
  @Length(4,20,{message: 'The password must have min 4 and max 20 characters'})
  readonly password: string
}
