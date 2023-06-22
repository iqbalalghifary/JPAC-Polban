import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Put, 
  UseInterceptors, 
  UploadedFile,
  Body,
  Delete,
  UseGuards
} from '@nestjs/common';
import { PartnerRegisterDto } from '../core/dtos';
import { PartnerUseCases } from '../use-cases/partner';
import { Partner } from '../core';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/partner')
export class PartnerController {
  constructor(
    private partnerUseCases: PartnerUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Post('get')
  getAll(@Body() item?: any) {
    return this.partnerUseCases.getAllPartners(item);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get('vacancy')
  getPartnerWithVacancies(@Body() item: any) {
    return this.partnerUseCases.getPartnerWithVacancies(item);
  }

  @Post('register')
  registerPartner(@Body() datas: PartnerRegisterDto) {
    return this.partnerUseCases.createPartner(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('upload-mou/:id')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './public/mou'
      , filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${extname(file.originalname)}`)
      }
    })
  }))
  updateMoU(
    @Param('id') userId: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    console.log(file);

    return this.partnerUseCases.uploadMoU({ filter_token: { referenceAttributeId: userId }, filter_partner: { _id: userId }, payload: file.path });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('verify/:id')
  verifyPartner(@Param('id') userId: string) {
    return this.partnerUseCases.verifyPartner({ filters: { _id: userId }, payload: { status: 'diverifikasi' } });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('reject/:id')
  denyPartner(@Param('id') userId: string) {
    return this.partnerUseCases.denyPartner({ filters: { _id: userId }, payload: { mou: null } });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('activate/:id')
  activatePartner(@Param('id') userId: string) {
    return this.partnerUseCases.activatePartner({ filters: { _id: userId }, payload: { status: 'aktif' } });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete(':id')
  deletePartner(@Param('id') partnerId: string) {
    return this.partnerUseCases.deletePartner(partnerId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete()
  deleteAllPartner() {
    return this.partnerUseCases.deleteAllPartner();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put(':id')
  updateAlumni(
    @Param('id') partnerId: string,
    @Body() datas: Partner,
  ) {
    return this.partnerUseCases.updatePartner({ filters: { _id: partnerId }, payload: datas });
  }

}