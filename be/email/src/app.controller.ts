import { MailerService } from '@nestjs-modules/mailer';
import { Controller } from '@nestjs/common';
import { config } from './config';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private mailService: MailerService) {}

  @MessagePattern({ cmd: 'email_verifikasi_pelamar' })
  async emailApplicantVerification(datas: any) {
    var response = await this.mailService.sendMail({
      to: datas.to,
      from: config.SENDER,
      subject: datas.subject,
      template: 'verifikasi-registrasi-pelamar',
      context: {
        params: datas.params
      },
    });
    return response;
  }

  @MessagePattern({ cmd: 'email_verifikasi_mitra' })
  async emailPartnerVerification(datas: any) {
    var response = await this.mailService.sendMail({
      to: datas.to,
      from: config.SENDER,
      subject: datas.subject,
      template: 'verifikasi-registrasi-mitra',
      context: {
        params: datas.params
      },
    });
    return response;
  }

  @MessagePattern({ cmd: 'email_aktivasi_pelamar' })
  async emailApplicantActivation(datas: any) {
    var response = await this.mailService.sendMail({
      to: datas.to,
      from: config.SENDER,
      subject: datas.subject,
      template: 'aktivasi-akun-pelamar',
      context: {
        params: datas.params
      },
    });
    return response;
  }

  @MessagePattern({ cmd: 'email_aktivasi_mitra' })
  async emailPartnerActivation(datas: any) {
    var response = await this.mailService.sendMail({
      to: datas.to,
      from: config.SENDER,
      subject: datas.subject,
      template: 'aktivasi-akun-mitra',
      context: {
        params: datas.params
      },
    });
    return response;
  }

  @MessagePattern({ cmd: 'email_aktivasi_loker' })
  async emailPartnerVacancyActivation(datas: any) {
    var response = await this.mailService.sendMail({
      to: datas.to,
      from: config.SENDER,
      subject: datas.subject,
      template: 'aktivasi-pengajuan-loker',
      context: {
        params: datas.params
      },
    });
    return response;
  }

}
