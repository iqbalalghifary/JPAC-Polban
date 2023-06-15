import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class TokenUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientToken: ClientProxy,
  ) {}

  getAllTokens() {
    const pattern = { cmd: 'get_all_token' };
    const payload = {};
    return this.clientToken
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getTokenById(id: any) {
    const pattern = { cmd: 'get_by_id_token' };
    const payload = id;
    return this.clientToken
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createToken(payload: any) {
    const pattern = { cmd: 'register_token' };
    return this.clientToken
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateToken(payload: any) {
    const pattern = { cmd: 'update_one_token' };
    return this.clientToken
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteToken(id: string) {
    const pattern = { cmd: 'delete_token' };
    const payload = id;
    return this.clientToken
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }
}
