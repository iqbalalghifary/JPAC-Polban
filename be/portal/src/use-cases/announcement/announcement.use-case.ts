import { Injectable } from '@nestjs/common';
import { Announcement } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class AnnouncementUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAnnouncement(item?: any) {
    return this.dataServices.announcements.get(item);
  }

  createAnnouncement(announcement: Announcement) {
    return this.dataServices.announcements.create(announcement);
  }

  updateAnnouncement(data: any) {
    return this.dataServices.announcements.updateOne(data.filters, data.payload);
  }

  deleteAnnouncement(id: any) {
    return this.dataServices.announcements.delete(id);
  }

  deleteAllAnnouncement() {
    return this.dataServices.announcements.deleteAll();
  }

}
