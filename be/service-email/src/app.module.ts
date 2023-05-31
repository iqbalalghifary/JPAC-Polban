import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { config } from './config';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: config.HOST,
        auth: {
          user: config.SENDER,
          pass: config.PASSWORD
        },
      },
      template: {
        dir: join(__dirname, 'mails/templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
