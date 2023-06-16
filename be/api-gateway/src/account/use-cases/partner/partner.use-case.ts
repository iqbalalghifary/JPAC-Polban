import { Inject, Injectable } from '@nestjs/common';
import { Partner } from '../../core/entities';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class PartnerUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientPartner: ClientProxy,
  ) {}

  getAllPartners(payload?: any) {
    const pattern = { cmd: 'get_all_partner' };
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getPartnerWithVacancies(payload?: any) {
    const pattern = { cmd: 'get_partner_with_vacancies' };
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  uploadMoU(payload: any) {
    const pattern = { cmd: 'mou_partner' };
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updatePartner(payload: any) {
    const pattern = { cmd: 'update_one_partner' };
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  activatePartner(payload: any) {
    const pattern = { cmd: 'activate_partner' };
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  verifyPartner(payload: any) {
    const pattern = { cmd: 'verify_partner' };
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getPartnerById(id: any) {
    const pattern = { cmd: 'get_by_id_partner' };
    const payload = id;
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createPartner(payload: any) {
    const pattern = { cmd: 'create_partner' };
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deletePartner(id: string) {
    const pattern = { cmd: 'delete_partner' };
    const payload = id;
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllPartner() {
    const pattern = { cmd: 'delete_all_partner' };
    const payload = {};
    return this.clientPartner
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
