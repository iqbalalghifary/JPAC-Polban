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
import { AnnouncementUseCases, AnnouncementFactoryService } from '../use-cases/announcement';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/announcement')
export class AnnouncementController {
  constructor(
    private announcementUseCases: AnnouncementUseCases,
    private announcementFactoryService: AnnouncementFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.announcementUseCases.getAllAnnouncements();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.announcementUseCases.getAnnouncementById(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/announcement',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))
  async createAnnouncement(
    @Body() announcementDto: CreateAnnouncementDto,
    @UploadedFile() file: Express.Multer.File
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

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/announcement',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))
  async updateAnnouncement(
    @Param('id') announcementId: string,
    @Body() updateAnnouncementDto: UpdateAnnouncementDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const announcement = this.announcementFactoryService.updateAnnouncement(updateAnnouncementDto, file);
    return this.announcementUseCases.updateAnnouncement(announcementId, announcement);
  }

  @Delete(':id')
  async deleteAnnouncement(@Param('id') announcementId: string) {
    return this.announcementUseCases.deleteAnnouncement(announcementId);
  }

}
