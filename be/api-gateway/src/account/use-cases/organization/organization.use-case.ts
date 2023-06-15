import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class OrganizationUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientOrganization: ClientProxy,
  ) {}

  getAllOrganizations() {
    const pattern = { cmd: 'get_all_organization' };
    const payload = {};
    return this.clientOrganization
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getOrganizationById(id: any) {
    const pattern = { cmd: 'get_by_id_organization' };
    const payload = id;
    return this.clientOrganization
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createOrganization(payload: any) {
    const pattern = { cmd: 'register_organization' };
    return this.clientOrganization
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateOrganization(payload: any) {
    const pattern = { cmd: 'update_one_organization' };
    return this.clientOrganization
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteOrganization(id: string) {
    const pattern = { cmd: 'delete_organization' };
    const payload = id;
    return this.clientOrganization
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllOrganization() {
    const pattern = { cmd: 'delete_all_organization' };
    const payload = {};
    return this.clientOrganization
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }
  
}
