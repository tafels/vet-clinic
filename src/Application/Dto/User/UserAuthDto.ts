import { ApiProperty } from '@nestjs/swagger';

export class UserAuthDto {
  @ApiProperty({ example: 'admin' })
  readonly login: string;
  @ApiProperty({ example: 'admin' })
  readonly password: string
}
