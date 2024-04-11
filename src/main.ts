import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './Application/Module/AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Vet clinic')
    .setDescription('The private veterinary clinic API description')
    .setVersion('0.0.1')
    .addTag('clinic')
    .addApiKey({
      type: "apiKey",
      name: "X-API-KEY",
      in: "header",
      description: "Enter the token you received during authorization"
    }, "X-API-KEY")
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(80);
}

bootstrap();
