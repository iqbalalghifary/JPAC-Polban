import { MailerService } from '@nestjs-modules/mailer';
import { Controller } from '@nestjs/common';
import { config } from './config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private mailService: MailerService) {}

  @MessagePattern({ cmd: 'email_request' })
  async postHTMLEmail(datas: any) {
    var response = await this.mailService.sendMail({
      to: datas.to,
      from: config.SENDER,
      subject: datas.subject,
      template: 'aktivasi-akun-mitra',
    });
    return response;
  }
}
