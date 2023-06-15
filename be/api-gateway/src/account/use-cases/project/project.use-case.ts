import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class ProjectUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientProject: ClientProxy,
  ) {}

  getAllProjects() {
    const pattern = { cmd: 'get_all_project' };
    const payload = {};
    return this.clientProject
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getProjectById(id: any) {
    const pattern = { cmd: 'get_by_id_project' };
    const payload = id;
    return this.clientProject
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createProject(payload: any) {
    const pattern = { cmd: 'register_project' };
    return this.clientProject
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateProject(payload: any) {
    const pattern = { cmd: 'update_one_project' };
    return this.clientProject
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteProject(id: string) {
    const pattern = { cmd: 'delete_project' };
    const payload = id;
    return this.clientProject
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllProject() {
    const pattern = { cmd: 'delete_all_project' };
    const payload = {};
    return this.clientProject
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
