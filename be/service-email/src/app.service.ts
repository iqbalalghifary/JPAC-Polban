import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';

@Injectable()
export class AppService {

  constructor(private readonly mailService: MailerService) {}

  sendMail(): void {
    this.mailService.sendMail({
      to: 'angga.gemilang.tif20@polban.ac.id',
      from: 'angga.gemilang.mu@gmail.com',
      subject: 'Testing Email',
      text: 'welcome',
      html: '<b>Welcome to Mobile Legends</b>'
    })
  }

}
