import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Person } from '../Person/PersonEntity';

@Entity()
export class Pet {
  @ApiProperty({ example: '1', description: 'unique pets id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Smurfik', description: 'pets name' })
  @Column()
  name: string;

  @ApiProperty({ example: 'cat', description: 'pets type' })
  @Column()
  type: string;

  @ApiProperty({ example: '2', description: 'pets year' })
  @Column()
  year: number;

  @ApiProperty( { example: '2024-04-04T13:00:00.034Z', description: 'data create person'})
  @CreateDateColumn( {name: 'create_at' })
  createdAt: Date;

  @ApiProperty( { example: '2024-04-15T13:00:00.034Z', description: 'last data update person'})
  @UpdateDateColumn( {name: 'update_at'})
  UpdatedAt: Date;

  @ManyToOne(() => Person, (person) => person.pets, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  person: Person;
}