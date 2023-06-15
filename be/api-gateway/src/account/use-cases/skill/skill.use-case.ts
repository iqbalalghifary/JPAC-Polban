import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class SkillUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientSkill: ClientProxy,
  ) {}

  getAllSkills() {
    const pattern = { cmd: 'get_all_skill' };
    const payload = {};
    return this.clientSkill
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getSkillById(id: any) {
    const pattern = { cmd: 'get_by_id_skill' };
    const payload = id;
    return this.clientSkill
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createSkill(payload: any) {
    const pattern = { cmd: 'register_skill' };
    return this.clientSkill
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateSkill(payload: any) {
    const pattern = { cmd: 'update_one_skill' };
    return this.clientSkill
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteSkill(id: string) {
    const pattern = { cmd: 'delete_skill' };
    const payload = id;
    return this.clientSkill
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllSkill() {
    const pattern = { cmd: 'delete_all_skill' };
    const payload = {};
    return this.clientSkill
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
