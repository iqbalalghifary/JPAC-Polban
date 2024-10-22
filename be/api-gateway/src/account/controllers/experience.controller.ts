import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { ExperienceUseCases } from '../use-cases/experience';
import { Experience } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/experience')
export class ExperienceController {
  constructor(
    private experienceUseCases: ExperienceUseCases,
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get()
  getAll() {
    return this.experienceUseCases.getAllExperiences();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.experienceUseCases.getExperienceById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Post()
  createExperience(@Body() datas: Experience) {
    return this.experienceUseCases.createExperience(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put(':id')
  updateExperience(
    @Param('id') experienceId: string,
    @Body() datas: Experience,
  ) {
    return this.experienceUseCases.updateExperience({ filters: { _id: experienceId }, payload: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete(':id')
  deleteExperience(@Param('id') experienceId: string) {
    return this.experienceUseCases.deleteExperience(experienceId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete()
  deleteAllExperience() {
    return this.experienceUseCases.deleteAllExperience();
  }

}
