import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { VolunteerUseCases } from '../use-cases/volunteer';
import { Volunteer } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/volunteer')
export class VolunteerController {
  constructor(
    private volunteerUseCases: VolunteerUseCases,
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.volunteerUseCases.getAllVolunteers();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.volunteerUseCases.getVolunteerById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post()
  createVolunteer(@Body() datas: Volunteer) {
    return this.volunteerUseCases.createVolunteer(datas);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateVolunteer(
    @Param('id') volunteerId: string,
    @Body() datas: Volunteer,
  ) {
    return this.volunteerUseCases.updateVolunteer({ id: volunteerId, payload: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteVolunteer(@Param('id') volunteerId: string) {
    return this.volunteerUseCases.deleteVolunteer(volunteerId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete()
  deleteAllVolunteer() {
    return this.volunteerUseCases.deleteAllVolunteer();
  }

}
