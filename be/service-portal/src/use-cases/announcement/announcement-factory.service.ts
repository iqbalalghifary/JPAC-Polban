import { Injectable } from '@nestjs/common';
import { Announcement } from '../../core/entities';
import { CreateAnnouncementDto, UpdateAnnouncementDto } from '../../core/dtos';
import slugify from 'slugify';

@Injectable()
export class AnnouncementFactoryService {
  createNewAnnouncement(createAnnouncementDto: CreateAnnouncementDto, photo: Express.Multer.File) {
    const newAnnouncement = new Announcement();
    newAnnouncement.title = createAnnouncementDto.title;
    newAnnouncement.description = createAnnouncementDto.description;
    newAnnouncement.slug = slugify(createAnnouncementDto.title);
    newAnnouncement.photo = photo.path;
    newAnnouncement.status = true;

    return newAnnouncement;
  }

  updateAnnouncement(updateAnnouncementDto: UpdateAnnouncementDto, photo: Express.Multer.File) {
    const newAnnouncement = new Announcement();
    newAnnouncement.title = updateAnnouncementDto.title;
    newAnnouncement.description = updateAnnouncementDto.description;
    newAnnouncement.slug = slugify(updateAnnouncementDto.title);
    newAnnouncement.photo = photo.path;
    newAnnouncement.status = true;

    return newAnnouncement;
  }
}
