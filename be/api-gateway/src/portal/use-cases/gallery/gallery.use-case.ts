import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class GalleryUseCases {
  constructor(
    @Inject('SERVICE_PORTAL') private readonly clientGallery: ClientProxy,
  ) {}

  getAllGalleries() {
    const pattern = { cmd: 'get_all_gallery' };
    const payload = {};
    return this.clientGallery
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getGalleryById(id: any) {
    const pattern = { cmd: 'get_by_id_gallery' };
    const payload = id;
    return this.clientGallery
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  createGallery(payload: any) {
    const pattern = { cmd: 'register_gallery' };
    return this.clientGallery
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateGallery(payload: any) {
    const pattern = { cmd: 'update_one_gallery' };
    return this.clientGallery
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteGallery(id: string) {
    const pattern = { cmd: 'delete_gallery' };
    const payload = id;
    return this.clientGallery
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllGallery() {
    const pattern = { cmd: 'delete_all_gallery' };
    const payload = {};
    return this.clientGallery
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}
