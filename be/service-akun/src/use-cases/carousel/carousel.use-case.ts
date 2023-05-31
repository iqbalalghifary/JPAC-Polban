import { Injectable } from '@nestjs/common';
import { Carousel } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateCarouselDto, UpdateCarouselDto } from '../../core/dtos';

@Injectable()
export class CarouselUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllCarousels(): Promise<Carousel[]> {
    return this.dataServices.carousels.getAll();
  }

  getCarouselById(id: any): Promise<Carousel> {
    return this.dataServices.carousels.get(id);
  }

  createCarousel(createCarouselDto: CreateCarouselDto): Promise<Carousel> {
    return this.dataServices.carousels.create(createCarouselDto);
  }

  updateCarousel(carouselId: string, updateCarouselDto: CreateCarouselDto): Promise<Carousel> {
    return this.dataServices.carousels.update(carouselId, updateCarouselDto);
  }

  deleteCarousel(id: any): Promise<Carousel> {
    return this.dataServices.carousels.delete(id);
  }

}
