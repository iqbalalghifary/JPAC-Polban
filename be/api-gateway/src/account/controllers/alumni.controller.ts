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
import { AlumniUseCases } from '../use-cases/alumni';
import { FileInterceptor } from '@nestjs/platform-express';
import { Alumni } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/alumni')
export class AlumniController {
  constructor(
    private alumniUseCases: AlumniUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get()
  getAll() {
    return this.alumniUseCases.getAllAlumnis();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get(':id')
  getById(@Param('id') alumniId: string) {
    return this.alumniUseCases.getAlumniById(alumniId);
  }

  @Post('register')
  @UseInterceptors(FileInterceptor('certificate'))
  registerAlumni(@Body() datas: Alumni, @UploadedFile() file: Express.Multer.File) {
    return this.alumniUseCases.registerAlumni({ alumni: datas, buffer: file });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('verify/:id')
  verifyAlumni(@Param('id') alumniId: string) {
    return this.alumniUseCases.verifyAlumni({ filters: { _id: alumniId }, payload: { status: 'diverifikasi' } });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('activate/:id')
  activateAlumni(@Param('id') alumniId: string) {
    return this.alumniUseCases.activateAlumni({ filters: { _id: alumniId }, payload: { status: 'aktif' } });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete(':id')
  deleteAlumni(@Param('id') alumniId: string) {
    return this.alumniUseCases.deleteAlumni(alumniId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete()
  deleteAllAlumni() {
    return this.alumniUseCases.deleteAllAlumni();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('upload-receipt/:id')
  @UseInterceptors(FileInterceptor('receipt'))
  uploadReceipt(
    @Param('id') alumniId: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.alumniUseCases.uploadReceipt({ filter_token: { referenceAttributeId: alumniId }, filter_alumni: { _id: alumniId }, payload: file });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put(':id')
  updateAlumni(
    @Param('id') alumniId: string,
    @Body() datas: Alumni,
  ) {
    return this.alumniUseCases.updateAlumni({ filters: { _id: alumniId }, payload: datas });
  }
}