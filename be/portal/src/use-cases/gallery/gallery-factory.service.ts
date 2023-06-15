import { Injectable } from '@nestjs/common';
import { Gallery } from '../../core/entities';
import { CreateGalleryDto, UpdateGalleryDto } from '../../core/dtos';

@Injectable()
export class GalleryFactoryService {
  createNewGallery(createGalleryDto: CreateGalleryDto, photo: any) {
    const newGallery = new Gallery();
    newGallery.description = createGalleryDto.description;
    newGallery.photo = photo.path;
    newGallery.status = true;

    return newGallery;
  }

  updateGallery(updateGalleryDto: UpdateGalleryDto, photo: any) {
    const newGallery = new Gallery();
    newGallery.description = updateGalleryDto.description;
    newGallery.photo = photo.path;
    newGallery.status = true;

    return newGallery;
  }
}
