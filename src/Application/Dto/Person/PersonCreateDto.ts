import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';
import { Pet } from '../../../Domain/Entity/Pet/PetEntity';

export class PersonCreateDto {
  @ApiProperty({ example: 'Vadim', description: 'firstName person' })
  @IsString()
  readonly firstName: string;
  @ApiProperty({ example: 'Petrov', description: 'lastName person' })
  @IsString()
  readonly lastName: string;
  @ApiProperty({ example: '38##########', description: 'number phone Petrov Vadim' })
  @Matches(/^38+[0-9]{10}$/i, {
    message: 'The number phone is not validated'
  })
  readonly phone: string;
  @ApiProperty({ example: 'petrov_vadim@mail.com', description: 'email person' })
  email: string;
  // pets: [Pet];
}