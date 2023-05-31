import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post, Param } from '@nestjs/common';
import { config } from './config';

@Controller('api/email')
export class AppController {
  constructor(private mailService: MailerService) {}

  @Post()
  async postHTMLEmail(@Body() datas: any) {
    var response = await this.mailService.sendMail({
      to: datas.to,
      from: config.SENDER,
      subject: datas.subject,
      template: datas.type,
      context: {
        data: datas.params
      }
    });
    return response;
  }
}
