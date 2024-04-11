import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { User } from '../../Domain/Entity/User/UserEntity';
import { Person } from '../../Domain/Entity/Person/PersonEntity';
import { Pet } from '../../Domain/Entity/Pet/PetEntity';
import { AuthModule } from './Auth/AuthModule';
import { UserModule} from './User/UserModule';
import { PersonModule } from './Person/PersonModule';
import { PetModule } from './Pet/PetModule'
import { AuthMiddleware } from '../Middleware/AuthMiddleware/AuthMiddleware';
import { UserService } from '../../Presentation/Service/User/UserService';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PersonModule,
    PetModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JwtModule.register({
      global: true,
      secret: '403926033d001b5279df37287b7c7c267fa',
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Person, Pet, User],
      synchronize: true,
    }),
  ],

})
export class AppModule implements NestModule {

  constructor(private userService: UserService) {
    this.userService.createDefaultNewUser();
  }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: ':splat*', method: RequestMethod.ALL });
  }
}
