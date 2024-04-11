import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty({ example: 'login' })
  readonly login: string;
  @ApiProperty({ example: 'password' })
  readonly password: string
}
