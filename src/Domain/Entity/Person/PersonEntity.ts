import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, CreateDateColumn, UpdateDateColumn, } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Pet } from '../Pet/PetEntity';

@Entity()
export class Person {
  @ApiProperty({ example: '1', description: 'unique person id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Vadim', description: 'firstName person' })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Petrov', description: 'lastName person' })
  @Column()
  lastName: string;

  @ApiProperty({ example: '38##########', description: 'number phone Petrov Vadim' })
  @Column()
  phone: string;

  @ApiProperty({ example: 'petrov_vadim@mail.com', description: 'email person' })
  @Column({ default: null })
  email: string;

  @ApiProperty( { example: '2024-04-04T13:00:00.034Z', description: 'data create person'})
  @CreateDateColumn( {name: 'create_at' })
  createdAt: Date;

  @ApiProperty( { example: '2024-04-15T13:00:00.034Z', description: 'last data update person'})
  @UpdateDateColumn( {name: 'update_at'})
  UpdatedAt: Date;

  @ApiProperty({ example: 'true', description: 'active person' })
  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Pet, (pet) => pet.person)
  @JoinTable()
  pets: Pet[];
}