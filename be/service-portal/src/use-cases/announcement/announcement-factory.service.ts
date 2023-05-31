import { Injectable } from '@nestjs/common';
import { Announcement } from '../../core/entities';
import { CreateAnnouncementDto, UpdateAnnouncementDto } from '../../core/dtos';

@Injectable()
export class AnnouncementFactoryService {
  createNewAnnouncement(createAnnouncementDto: CreateAnnouncementDto, photo: Express.Multer.File) {
    const newAnnouncement = new Announcement();
    newAnnouncement.title = createAnnouncementDto.title;
    newAnnouncement.description = createAnnouncementDto.description;
    newAnnouncement.slug = createAnnouncementDto.slug;
    newAnnouncement.photo = photo.path;
    newAnnouncement.publishDate = createAnnouncementDto.publishDate;
    newAnnouncement.status = createAnnouncementDto.status;

    return newAnnouncement;
  }

  updateAnnouncement(updateAnnouncementDto: UpdateAnnouncementDto, photo: Express.Multer.File) {
    const newAnnouncement = new Announcement();
    newAnnouncement.title = updateAnnouncementDto.title;
    newAnnouncement.description = updateAnnouncementDto.description;
    newAnnouncement.slug = updateAnnouncementDto.slug;
    newAnnouncement.photo = photo.path;
    newAnnouncement.publishDate = updateAnnouncementDto.publishDate;
    newAnnouncement.status = updateAnnouncementDto.status;

    return newAnnouncement;
  }
}
