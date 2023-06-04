import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices, IGenericRepository } from '../../core';
import { MongoGenericRepository } from './db-generic-repository';
import {
  Agenda,
  AgendaDocument,
  Announcement,
  AnnouncementDocument,
  Carousel,
  CarouselDocument,
  Gallery,
  GalleryDocument
} from './schema';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  announcements: MongoGenericRepository<Announcement>;
  agendas: IGenericRepository<Agenda>;
  galleries: IGenericRepository<Gallery>;
  carousels: IGenericRepository<Carousel>;

  constructor(
    @InjectModel(Agenda.name)
    private AgendaRepository: Model<AgendaDocument>,
    @InjectModel(Announcement.name)
    private AnnouncementRepository: Model<AnnouncementDocument>,
    @InjectModel(Carousel.name)
    private CarouselRepository: Model<CarouselDocument>,
    @InjectModel(Gallery.name)
    private GalleryRepository: Model<GalleryDocument>,
  ) {}

  onApplicationBootstrap() {
    this.announcements = new MongoGenericRepository<Announcement>(this.AnnouncementRepository);
    this.agendas = new MongoGenericRepository<Agenda>(this.AgendaRepository);
    this.carousels = new MongoGenericRepository<Carousel>(this.CarouselRepository);
    this.galleries = new MongoGenericRepository<Gallery>(this.GalleryRepository);
  }
}
