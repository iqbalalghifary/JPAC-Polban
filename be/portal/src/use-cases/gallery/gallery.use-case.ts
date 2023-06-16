import { Injectable } from '@nestjs/common';
import { Gallery } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class GalleryUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getGallery(item?: any) {
    return this.dataServices.galleries.get(item);
  }

  createGallery(gallery: Gallery) {
    return this.dataServices.galleries.create(gallery);
  }

  updateGallery(data: any) {
    return this.dataServices.galleries.updateOne(data.filters, data.payload);
  }

  deleteGallery(id: any) {
    return this.dataServices.galleries.delete(id);
  }

  deleteAllGallery() {
    return this.dataServices.galleries.deleteAll();
  }

}
