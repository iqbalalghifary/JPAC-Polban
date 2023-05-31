import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../core';
import { config } from '../../../config';
import {
  Agenda,
  AgendaSchema,
  Announcement,
  AnnouncementSchema,
  Carousel,
  CarouselSchema,
  Gallery,
  GallerySchema
} from './model';
import { MongoDataServices } from './mongo-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Agenda.name, schema: AgendaSchema },
      { name: Announcement.name, schema: AnnouncementSchema },
      { name: Carousel.name, schema: CarouselSchema },
      { name: Gallery.name, schema: GallerySchema },
    ]),
    MongooseModule.forRoot(config.MONGO_URI),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
