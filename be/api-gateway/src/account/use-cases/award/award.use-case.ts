import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AwardUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientAward: ClientProxy,
  ) {}

  getAllAwards() {
    const pattern = { cmd: 'get_all_award' };
    const payload = {};
    return this.clientAward
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getAwardById(id: any) {
    const pattern = { cmd: 'get_by_id_award' };
    const payload = id;
    return this.clientAward
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createAward(payload: any) {
    const pattern = { cmd: 'register_award' };
    return this.clientAward
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateAward(payload: any) {
    const pattern = { cmd: 'update_one_award' };
    return this.clientAward
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteAward(id: string) {
    const pattern = { cmd: 'delete_award' };
    const payload = id;
    return this.clientAward
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllAward() {
    const pattern = { cmd: 'delete_all_award' };
    const payload = {};
    return this.clientAward
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
