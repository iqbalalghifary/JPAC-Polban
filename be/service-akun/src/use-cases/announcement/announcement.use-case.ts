import { Injectable } from '@nestjs/common';
import { Announcement } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateAnnouncementDto, UpdateAnnouncementDto } from '../../core/dtos';
import { AnnouncementFactoryService } from './announcement-factory.service';

@Injectable()
export class AnnouncementUseCases {
  constructor(
    private dataServices: IDataServices,
    private announcementFactoryService: AnnouncementFactoryService,
  ) {}

  getAllAnnouncements(): Promise<Announcement[]> {
    return this.dataServices.announcements.getAll();
  }

  getAnnouncementById(id: any): Promise<Announcement> {
    return this.dataServices.announcements.get(id);
  }

  createAnnouncement(createAnnouncementDto: CreateAnnouncementDto): Promise<Announcement> {
    const announcement = this.announcementFactoryService.createNewAnnouncement(createAnnouncementDto);
    return this.dataServices.announcements.create(announcement);
  }

  updateAnnouncement(announcementId: string, updateAnnouncementDto: UpdateAnnouncementDto): Promise<Announcement> {
    const announcement = this.announcementFactoryService.updateAnnouncement(updateAnnouncementDto);
    return this.dataServices.announcements.update(announcementId, announcement);
  }

  deleteAnnouncement(id: any): Promise<Announcement> {
    return this.dataServices.announcements.delete(id);
  }

}
