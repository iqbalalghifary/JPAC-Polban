import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  Put, 
  UseInterceptors, 
  UploadedFile,
  UseGuards,
  Delete
} from '@nestjs/common';
import { CreateGalleryDto, UpdateGalleryDto } from '../core/dtos';
import { GalleryUseCases, GalleryFactoryService } from '../use-cases/gallery';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/gallery')
export class GalleryController {
  constructor(
    private galleryUseCases: GalleryUseCases,
    private galleryFactoryService: GalleryFactoryService,
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.galleryUseCases.getAllGalleries();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.galleryUseCases.getGalleryById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createGallery(
    @Body() galleryDto: CreateGalleryDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const gallery = this.galleryFactoryService.createNewGallery(galleryDto, file);
    return this.galleryUseCases.createGallery(gallery);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  updateGallery(
    @Param('id') galleryId: string,
    @Body() updateGalleryDto: UpdateGalleryDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const gallery = this.galleryFactoryService.updateGallery(updateGalleryDto, file);
    return this.galleryUseCases.updateGallery({ filters: { _id: galleryId }, payload: gallery });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteGallery(@Param('id') id: any) {
    return this.galleryUseCases.deleteGallery(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete()
  deleteAllGallery() {
    return this.galleryUseCases.deleteAllGallery();
  }

}
