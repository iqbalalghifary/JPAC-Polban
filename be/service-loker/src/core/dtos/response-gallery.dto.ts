import { Gallery } from '../entities';

export class GalleryResponseDto {
  success: boolean;
  createdGallery: Gallery;
}
