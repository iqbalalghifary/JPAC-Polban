import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class OperatorUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientOperator: ClientProxy,
  ) {}

  getAllOperators() {
    const pattern = { cmd: 'get_all_operator' };
    const payload = {};
    return this.clientOperator
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateOperator(payload: any) {
    const pattern = { cmd: 'update_one_operator' };
    return this.clientOperator
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getOperatorById(id: any) {
    const pattern = { cmd: 'get_by_id_operator' };
    const payload = id;
    return this.clientOperator
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  registerOperator(payload: any) {
    const pattern = { cmd: 'register_operator' };
    return this.clientOperator
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteOperator(id: string) {
    const pattern = { cmd: 'delete_operator' };
    const payload = id;
    return this.clientOperator
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }
}
