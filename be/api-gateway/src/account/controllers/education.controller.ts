import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { EducationUseCases } from '../use-cases/education';
import { Education } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/education')
export class EducationController {
  constructor(
    private educationUseCases: EducationUseCases,
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get()
  getAll() {
    return this.educationUseCases.getAllEducations();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.educationUseCases.getEducationById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Post()
  createEducation(@Body() datas: Education) {
    return this.educationUseCases.createEducation(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put(':id')
  updateEducation(
    @Param('id') educationId: string,
    @Body() datas: Education,
  ) {
    return this.educationUseCases.updateEducation({ filters: { _id: educationId }, payload: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete(':id')
  deleteEducation(@Param('id') EducationId: string) {
    return this.educationUseCases.deleteEducation(EducationId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete()
  deleteAllEducation() {
    return this.educationUseCases.deleteAllEducation();
  }

}
