import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class UserUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientUser: ClientProxy,
  ) {}

  async login(payload: any){
    const pattern = { cmd: 'login' };
    return this.clientUser
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getAllUsers() {
    const pattern = { cmd: 'get_all_user' };
    const payload = {};
    return this.clientUser
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getUserById(id: any) {
    const pattern = { cmd: 'get_by_id_user' };
    const payload = id;
    return this.clientUser
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createUser(payload: User) {
    const pattern = { cmd: 'create_user' };
    return this.clientUser
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateUser(payload: any) {
    const pattern = { cmd: 'update_one_user' };
    return this.clientUser
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteUser(id: any) {
    const pattern = { cmd: 'delete_user' };
    const payload = id;
    return this.clientUser
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }
}
