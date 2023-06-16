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
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/Partner')
export class PartnerController {
  constructor(
    private partnerUseCases: PartnerUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll(@Body() item?: any) {
    return this.partnerUseCases.getAllPartners(item);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get('vacancy')
  getPartnerWithVacancies(@Body() item: any) {
    return this.partnerUseCases.getPartnerWithVacancies(item);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post('register')
  registerPartner(@Body() datas: PartnerRegisterDto) {
    return this.partnerUseCases.createPartner(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put('upload-mou/:id')
  @UseInterceptors(FileInterceptor('mou'))
  updateMoU(
    @Param('id') userId: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.partnerUseCases.uploadMoU({ filter_token: { referenceAttributeId: userId }, filter_partner: { _id: userId }, payload: file });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put('verify/:id')
  verifyPartner(@Param('id') userId: string) {
    return this.partnerUseCases.verifyPartner({ filters: { _id: userId }, payload: { status: 'diverifikasi' } });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put('activate/:id')
  activatePartner(@Param('id') userId: string) {
    return this.partnerUseCases.activatePartner({ filters: { _id: userId }, payload: { status: 'aktif' } });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deletePartner(@Param('id') partnerId: string) {
    return this.partnerUseCases.deletePartner(partnerId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete()
  deleteAllPartner() {
    return this.partnerUseCases.deleteAllPartner();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateAlumni(
    @Param('id') partnerId: string,
    @Body() datas: Partner,
  ) {
    return this.partnerUseCases.updatePartner({ filters: { _id: partnerId }, payload: datas });
  }

}