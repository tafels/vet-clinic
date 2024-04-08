import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Person } from '../../../Domain/Entity/Person/PersonEntity';

export class PetCreateDto {
  @ApiProperty({ example: 'Smurfik', description: 'pets name' })
  @IsString()
  readonly name: string;
  @ApiProperty({ example: 'cat', description: 'pets type' })
  @IsString()
  readonly type: string;
  @ApiProperty({ example: '2', description: 'pets year' })
  year: number;
  person: Person;
}
