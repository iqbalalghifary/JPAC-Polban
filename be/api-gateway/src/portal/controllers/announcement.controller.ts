import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  Put, 
  Delete,
  UseInterceptors, 
  UploadedFile,
  UseGuards
} from '@nestjs/common';
import { CreateAnnouncementDto, UpdateAnnouncementDto } from '../core/dtos';
import { AnnouncementUseCases, AnnouncementFactoryService } from '../use-cases/announcement';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/announcement')
export class AnnouncementController {
  constructor(
    private announcementUseCases: AnnouncementUseCases,
    private announcementFactoryService: AnnouncementFactoryService,
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get()
  getAll() {
    return this.announcementUseCases.getAllAnnouncements();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.announcementUseCases.getAnnouncementById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createAnnouncement(
    @Body() announcementDto: CreateAnnouncementDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const announcement = this.announcementFactoryService.createNewAnnouncement(announcementDto, file);
    return this.announcementUseCases.createAnnouncement(announcement);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  updateAnnouncement(
    @Param('id') announcementId: string,
    @Body() updateAnnouncementDto: UpdateAnnouncementDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const announcement = this.announcementFactoryService.updateAnnouncement(updateAnnouncementDto, file);
    return this.announcementUseCases.updateAnnouncement({ filters: { _id: announcementId }, payload: announcement});
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete(':id')
  deleteAnnouncement(@Param('id') announcementId: string) {
    return this.announcementUseCases.deleteAnnouncement(announcementId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete()
  deleteAllAnnouncement() {
    return this.announcementUseCases.deleteAllAnnouncement();
  }

}
