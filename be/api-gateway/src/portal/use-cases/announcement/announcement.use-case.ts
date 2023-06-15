import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AnnouncementUseCases {
  constructor(
    @Inject('SERVICE_PORTAL') private readonly clientAnnouncement: ClientProxy,
  ) {}

  getAllAnnouncements() {
    const pattern = { cmd: 'get_all_announcement' };
    const payload = {};
    return this.clientAnnouncement
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getAnnouncementById(id: any) {
    const pattern = { cmd: 'get_by_id_announcement' };
    const payload = id;
    return this.clientAnnouncement
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createAnnouncement(payload: any) {
    const pattern = { cmd: 'register_announcement' };
    return this.clientAnnouncement
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateAnnouncement(payload: any) {
    const pattern = { cmd: 'update_one_announcement' };
    return this.clientAnnouncement
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteAnnouncement(id: string) {
    const pattern = { cmd: 'delete_announcement' };
    const payload = id;
    return this.clientAnnouncement
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }
}
