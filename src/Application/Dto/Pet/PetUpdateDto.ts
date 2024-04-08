import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PetUpdateDto {
  @ApiProperty({ example: 'Smurfik', description: 'pets name' })
  @IsString()
  name: string;
  @ApiProperty({ example: 'cat', description: 'pets type' })
  @IsString()
  type: string;
  @ApiProperty({ example: '2', description: 'pets year' })
  year: number;
}