import { Injectable } from '@nestjs/common';
import { Gallery } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateGalleryDto, UpdateGalleryDto } from '../../core/dtos';
import { GalleryFactoryService } from './gallery-factory.service';

@Injectable()
export class GalleryUseCases {
  constructor(
    private dataServices: IDataServices,
    private galleryFactoryService: GalleryFactoryService,
  ) {}

  getAllGallerys(): Promise<Gallery[]> {
    return this.dataServices.galleries.getAll();
  }

  getGalleryById(id: any): Promise<Gallery> {
    return this.dataServices.galleries.get(id);
  }

  createGallery(createGalleryDto: CreateGalleryDto): Promise<Gallery> {
    const gallery = this.galleryFactoryService.createNewGallery(createGalleryDto);
    return this.dataServices.galleries.create(gallery);
  }

  updateGallery(galleryId: string, updateGalleryDto: UpdateGalleryDto): Promise<Gallery> {
    const gallery = this.galleryFactoryService.updateGallery(updateGalleryDto);
    return this.dataServices.galleries.update(galleryId, gallery);
  }

  deleteGallery(id: any): Promise<Gallery> {
    return this.dataServices.galleries.delete(id);
  }

}
