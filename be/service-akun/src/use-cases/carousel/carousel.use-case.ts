import { Injectable } from '@nestjs/common';
import { Carousel } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

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

  createCarousel(carousel: Carousel): Promise<Carousel> {
    return this.dataServices.carousels.create(carousel);
  }

  updateCarousel(carouselId: string, carousel: Carousel): Promise<Carousel> {
    return this.dataServices.carousels.update(carouselId, carousel);
  }

  deleteCarousel(id: any): Promise<Carousel> {
    return this.dataServices.carousels.delete(id);
  }

}
