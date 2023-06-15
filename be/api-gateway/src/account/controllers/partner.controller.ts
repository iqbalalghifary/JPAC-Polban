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
  getAll() {
    return this.partnerUseCases.getAllPartners();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.partnerUseCases.getPartnerById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post('register')
  registerPartner(@Body() datas: PartnerRegisterDto) {
    return this.partnerUseCases.registerPartner(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put('verify/:id')
  verifyPartner(@Param('id') userId: string) {
    return this.partnerUseCases.updatePartner({ id: userId, status: 'diverifikasi' });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put('upload-mou/:id')
  @UseInterceptors(FileInterceptor('mou', {
    storage: diskStorage({
      destination: './uploads/mou',
      filename: (_, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))
  updateMoU(
    @Param('id') userId: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    const datas = new Partner();
    datas.mou = file.path;
    return this.partnerUseCases.updatePartner({ id: userId, payload: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put('activate/:id')
  activatePartnerAccount(@Param('id') userId: string) {
    return this.partnerUseCases.updatePartner({ id: userId, status: 'aktif' });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deletePartner(@Param('id') partnerId: string) {
    return this.partnerUseCases.deletePartner(partnerId);
  }

}