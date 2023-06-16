import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  Put, 
  UseInterceptors, 
  UploadedFile
} from '@nestjs/common';
import { CreateGalleryDto, UpdateGalleryDto } from '../core/dtos';
import { GalleryUseCases, GalleryFactoryService } from '../use-cases/gallery';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/gallery')
export class GalleryController {
  constructor(
    private galleryUseCases: GalleryUseCases,
    private galleryFactoryService: GalleryFactoryService,
  ) {}

  @Get()
  getAll() {
    return this.galleryUseCases.getAllGalleries();
  }

  @Get(':id')
  getById(@Param('id') id: any) {
    return this.galleryUseCases.getGalleryById(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/gallery',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))
  createGallery(
    @Body() galleryDto: CreateGalleryDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const gallery = this.galleryFactoryService.createNewGallery(galleryDto, file);
    return this.galleryUseCases.createGallery(gallery);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/gallery',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))
  updateGallery(
    @Param('id') galleryId: string,
    @Body() updateGalleryDto: UpdateGalleryDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const gallery = this.galleryFactoryService.updateGallery(updateGalleryDto, file);
    return this.galleryUseCases.updateGallery({ filters: { _id: galleryId }, payload: gallery });
  }

  @Get(':id')
  deleteGallery(@Param('id') id: any) {
    return this.galleryUseCases.deleteGallery(id);
  }

}
