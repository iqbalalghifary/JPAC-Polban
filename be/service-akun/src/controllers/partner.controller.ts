import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  Put, 
  Delete,
  UseInterceptors, 
  UploadedFile
} from '@nestjs/common';
import { CreateAnnouncementDto, UpdateAnnouncementDto, AnnouncementResponseDto } from '../core/dtos';
import { AnnouncementUseCases, AnnouncementFactoryService } from '../use-cases/alumni';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/partner')
export class ParnerController {
  constructor(
    private announcementUseCases: AnnouncementUseCases,
    private announcementFactoryService: AnnouncementFactoryService,
  ) {}

  @Post()
  async register(
    @Body() announcementDto: CreateAnnouncementDto,
  ) : Promise<AnnouncementResponseDto> {
    const announcementResponseDto = new AnnouncementResponseDto();
    try {
      const announcement = this.announcementFactoryService.createNewAnnouncement(announcementDto, file);
      const createdAnnouncement = await this.announcementUseCases.createAnnouncement(announcement);

      announcementResponseDto.success = true;
      announcementResponseDto.createdAnnouncement = createdAnnouncement;
    } catch (error) {
      announcementResponseDto.success = false;
    }

    return announcementResponseDto;
  }

}
