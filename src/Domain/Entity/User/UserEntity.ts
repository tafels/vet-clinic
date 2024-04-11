import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ example: 'login', description: 'default login - admin' })
  @Column()
  login: string;

  @ApiProperty({ example: 'password', description: 'default password - admin' })
  @Column()
  password: string;

  @ApiProperty( { example: '2024-04-04T13:00:00.034Z', description: 'data create person'})
  @CreateDateColumn( {name: 'create_at' })
  createdAt: Date;

  @ApiProperty( { example: '2024-04-15T13:00:00.034Z', description: 'last data update person'})
  @UpdateDateColumn( {name: 'update_at'})
  UpdatedAt: Date;

}