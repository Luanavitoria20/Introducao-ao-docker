import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // Criar app com adapter do Express para Swagger funcionar bem
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Filmes')
    .setDescription('CRUD completo de filmes com NestJS, Prisma, Docker e Swagger')
    .setVersion('1.0')
    .build();

  // Criar documentação Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // URL: http://localhost:3000/api

  await app.listen(process.env.API_PORT ?? 3001);
}

bootstrap();
