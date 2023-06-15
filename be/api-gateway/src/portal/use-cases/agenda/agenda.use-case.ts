import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AgendaUseCases {
  constructor(
    @Inject('SERVICE_PORTAL') private readonly clientAgenda: ClientProxy,
  ) {}

  getAllAgendas() {
    const pattern = { cmd: 'get_all_agenda' };
    const payload = {};
    return this.clientAgenda
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getAgendaById(id: any) {
    const pattern = { cmd: 'get_by_id_agenda' };
    const payload = id;
    return this.clientAgenda
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createAgenda(payload: any) {
    const pattern = { cmd: 'register_agenda' };
    return this.clientAgenda
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateAgenda(payload: any) {
    const pattern = { cmd: 'update_one_agenda' };
    return this.clientAgenda
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteAgenda(id: string) {
    const pattern = { cmd: 'delete_agenda' };
    const payload = id;
    return this.clientAgenda
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
