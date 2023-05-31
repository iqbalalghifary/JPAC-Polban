import { Injectable } from '@nestjs/common';
import { Gallery } from '../../core/entities';
import { CreateGalleryDto, UpdateGalleryDto } from '../../core/dtos';

@Injectable()
export class GalleryFactoryService {
  createNewGallery(createGalleryDto: CreateGalleryDto, photo: Express.Multer.File) {
    const newGallery = new Gallery();
    newGallery.description = createGalleryDto.description;
    newGallery.photo = photo.path;
    newGallery.status = createGalleryDto.status;

    return newGallery;
  }

  updateGallery(updateGalleryDto: UpdateGalleryDto, photo: Express.Multer.File) {
    const newGallery = new Gallery();
    newGallery.description = updateGalleryDto.description;
    newGallery.photo = photo.path;
    newGallery.status = updateGalleryDto.status;

    return newGallery;
  }
}
