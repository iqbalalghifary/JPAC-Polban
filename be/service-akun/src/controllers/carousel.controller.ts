import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Put, 
  UseInterceptors, 
  UploadedFile
} from '@nestjs/common';
import { CreateCarouselDto, CarouselResponseDto } from '../core/dtos';
import { CarouselUseCases } from '../use-cases/carousel';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/carousel')
export class CarouselController {
  constructor(
    private carouselUseCases: CarouselUseCases
  ) {}

  @Get()
  async getAll() {
    return this.carouselUseCases.getAllCarousels();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.carouselUseCases.getCarouselById(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/carousel',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))
  async createCarousel(@UploadedFile() file: Express.Multer.File) : Promise<CarouselResponseDto> {
    const carouselResponseDto = new CarouselResponseDto();
    try {
      const carousel = new CreateCarouselDto();
      carousel.photo = file.path;
      carousel.status = true;
      const createdCarousel = await this.carouselUseCases.createCarousel(carousel);
      carouselResponseDto.success = true;
      carouselResponseDto.createdCarousel = createdCarousel;
    } catch (error) {
      carouselResponseDto.success = false;
    }

    return carouselResponseDto;
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/carousel',
      filename: (req, file, callback) => {
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
    const carousel = new CreateCarouselDto();
    carousel.photo = file.path;
    carousel.status = true;
    return this.carouselUseCases.updateCarousel(carouselId, carousel);
  }

  @Get(':id')
  async deleteCarousel(@Param('id') id: any){
    return this.carouselUseCases.deleteCarousel(id);
  }

}