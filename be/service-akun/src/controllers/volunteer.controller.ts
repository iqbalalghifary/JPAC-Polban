import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Put, 
  UseInterceptors, 
  UploadedFile,
  Body
} from '@nestjs/common';
import { ApplicantRegisterDto, Response } from '../core/dtos';
import { CarouselUseCases } from '../use-cases/partner';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Carousel } from 'src/core';

@Controller('api/volunteer')
export class AlumniController {
  constructor(
    private carouselUseCases: CarouselUseCases
  ) {}

  @Post('register')
  async register(
    @Body() applicantRegisterDto: ApplicantRegisterDto,
  ) : Promise<ApplicantRegisterDto> {
    const announcementResponseDto = new AnnouncementResponseDto();
    try {
      const announcement = this.announcementFactoryService.createNewAnnouncement(announcementDto, file);
      const createdAnnouncement = await this.announcementUseCases.createAnnouncement(announcement);

      announcementResponseDto.success = true;
      announcementResponseDto.createdAnnouncement = createdAnnouncement;
    } catch (error) {
      announcementResponseDto.success = false;
    }

    return announcementResponseDto;
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/carousel',
      filename: (_, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))
  async updateCarousel(
    @Param('id') carouselId: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    const carousel = new Carousel();
    carousel.photo = file.path;
    carousel.status = true;
    return this.carouselUseCases.updateCarousel(carouselId, carousel);
  }

  @Get(':id')
  async deleteCarousel(@Param('id') id: any){
    return this.carouselUseCases.deleteCarousel(id);
  }

}