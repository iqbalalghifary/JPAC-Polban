import { Controller } from '@nestjs/common';
import { AnnouncementUseCases } from '../use-cases/announcement';
import { MessagePattern } from '@nestjs/microservices';
import { Announcement } from 'src/core';

@Controller('api/announcement')
export class AnnouncementController {
  constructor(
    private announcementUseCases: AnnouncementUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_announcement' })
  async getAll() {
    try {
      return await this.announcementUseCases.getAllAnnouncements();
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_by_id_announcement' })
  async getById(id: any) {
    try {
      return await this.announcementUseCases.getAnnouncementById(id);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'create_announcement' })
  async createAnnouncement(announcement: Announcement) {
    try {
      await await this.announcementUseCases.createAnnouncement(announcement);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_announcement' })
  async updateAnnouncement(data: any) {
    try {
      return await this.announcementUseCases.updateAnnouncement(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_announcement' })
  async deleteAnnouncement(announcementId: string) {
    try {
      return await this.announcementUseCases.deleteAnnouncement(announcementId);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_all_announcement' })
  async deleteAllAnnouncement() {
    try {
      return await this.announcementUseCases.deleteAllAnnouncement();
    } catch (error){
      console.log(error);
    }
  }

}
