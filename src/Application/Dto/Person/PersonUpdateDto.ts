import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, Matches } from 'class-validator';

export class PersonUpdateDto {
  @ApiProperty({ example: 'Vadim', description: 'firstName person' })
  @IsString()
  firstName: string;
  @ApiProperty({ example: 'Petrov', description: 'lastName person' })
  @IsString()
  lastName: string;
  @ApiProperty({ example: '38##########', description: 'number phone Petrov Vadim' })
  @Matches(/^38+[0-9]{10}$/i, {
    message: 'The number phone is not validated'
  })
  phone: string;
  @ApiProperty({ example: 'petrov_vadim@mail.com', description: 'email person' })
  email: string;
  @ApiProperty({ example: 'true', description: 'Active person' })
  @IsBoolean()
  isActive: boolean;
}
