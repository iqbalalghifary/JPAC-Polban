import { Injectable } from '@nestjs/common';
import { Gallery } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class GalleryUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllGallerys(): Promise<Gallery[]> {
    return this.dataServices.galleries.getAll();
  }

  getGalleryById(id: any): Promise<Gallery> {
    return this.dataServices.galleries.get(id);
  }

  createGallery(gallery: Gallery): Promise<Gallery> {
    return this.dataServices.galleries.create(gallery);
  }

  updateGallery(galleryId: string, gallery: Gallery): Promise<Gallery> {
    return this.dataServices.galleries.update(galleryId, gallery);
  }

  deleteGallery(id: any): Promise<Gallery> {
    return this.dataServices.galleries.delete(id);
  }

}
