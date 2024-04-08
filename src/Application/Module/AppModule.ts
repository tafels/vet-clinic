import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';;
import * as process from 'process';
import { Person } from '../../Domain/Entity/Person/PersonEntity';
import { Pet } from '../../Domain/Entity/Pet/PetEntity';
import { PersonModule } from './Person/PersonModule';
import { PetModule } from './Pet/PetModule'

@Module({
  imports: [
    PersonModule,
    PetModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Person, Pet],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
