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
import { CreateGalleryDto, UpdateGalleryDto, GalleryResponseDto } from '../core/dtos';
import { GalleryUseCases, GalleryFactoryService } from '../use-cases/gallery';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/gallery')
export class InternshipScheduleController {
  constructor(
    private galleryUseCases: GalleryUseCases,
    private galleryFactoryService: GalleryFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.galleryUseCases.getAllGallerys();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
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
  async createGallery(
    @Body() galleryDto: CreateGalleryDto,
    @UploadedFile() file: Express.Multer.File
  ) : Promise<GalleryResponseDto> {
    const galleryResponseDto = new GalleryResponseDto();
    try {
      const gallery = this.galleryFactoryService.createNewGallery(galleryDto, file);
      const createdGallery = await this.galleryUseCases.createGallery(gallery);

      galleryResponseDto.success = true;
      galleryResponseDto.createdGallery = createdGallery;
    } catch (error) {
      galleryResponseDto.success = false;
    }

    return galleryResponseDto;
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
  async updateGallery(
    @Param('id') galleryId: string,
    @Body() updateGalleryDto: UpdateGalleryDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const gallery = this.galleryFactoryService.updateGallery(updateGalleryDto, file);
    return this.galleryUseCases.updateGallery(galleryId, gallery);
  }

  @Get(':id')
  async deleteGallery(@Param('id') id: any) {
    return this.galleryUseCases.deleteGallery(id);
  }

}
