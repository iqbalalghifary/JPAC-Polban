import { Injectable } from '@nestjs/common';
import { Announcement } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class AnnouncementUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllAnnouncements(): Promise<Announcement[]> {
    return this.dataServices.announcements.getAll();
  }

  getAnnouncementById(id: any): Promise<Announcement> {
    return this.dataServices.announcements.get(id);
  }

  createAnnouncement(announcement: Announcement): Promise<Announcement> {
    return this.dataServices.announcements.create(announcement);
  }

  updateAnnouncement(announcementId: string, announcement: Announcement): Promise<Announcement> {
    return this.dataServices.announcements.update(announcementId, announcement);
  }

  deleteAnnouncement(id: any): Promise<Announcement> {
    return this.dataServices.announcements.delete(id);
  }

}