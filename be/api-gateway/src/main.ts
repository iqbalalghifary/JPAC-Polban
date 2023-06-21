import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { config } from './app/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.listen(config.PORT); // 3000
  Logger.log(
    `🚀 Application is running on: http://localhost:3000`
  );
}

bootstrap();