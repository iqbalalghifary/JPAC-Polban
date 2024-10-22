import { Controller } from '@nestjs/common';
import { GalleryUseCases } from '../use-cases/gallery';
import { MessagePattern } from '@nestjs/microservices';
import { Gallery } from 'src/core';

@Controller('api/gallery')
export class GalleryController {
  constructor(
    private galleryUseCases: GalleryUseCases
  ) {}

  @MessagePattern({ cmd: 'get_all_gallery' })
  async getAll() {
    try {
      return await this.galleryUseCases.getGallery();
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_by_id_gallery' })
  async getById(id: any) {
    try {
      return await this.galleryUseCases.getGallery({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'create_gallery' })
  async createGallery(gallery: Gallery) {
    try {
      return await this.galleryUseCases.createGallery(gallery);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_gallery' })
  async updateGallery(data: any ) {
    try {
      return await this.galleryUseCases.updateGallery(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'create' })
  async deleteGallery(id: any) {
    try {
      return await this.galleryUseCases.deleteGallery(id);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_all_gallery' })
  async deleteAllGallery() {
    try {
      return await this.galleryUseCases.deleteAllGallery();
    } catch (error){
      console.log(error);
    }
  }

}
