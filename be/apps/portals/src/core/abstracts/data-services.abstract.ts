import { Agenda, Announcement, Gallery, Carousel } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract announcements: IGenericRepository<Announcement>;
  abstract agendas: IGenericRepository<Agenda>;
  abstract galleries: IGenericRepository<Gallery>;
  abstract carousels: IGenericRepository<Carousel>;
}
