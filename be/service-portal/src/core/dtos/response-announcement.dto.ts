import { Announcement } from '../entities';

export class AnnouncementResponseDto {
  success: boolean;
  createdAnnouncement: Announcement;
}
