import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config'
import * as session from 'express-session'
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: config.JWT_SECRET,
      resave: false,
      saveUnitialized: false,
      cookie: { maxAge: 3600000 } 
    })
  )

  await app.listen(config.PORT);
}
bootstrap();
