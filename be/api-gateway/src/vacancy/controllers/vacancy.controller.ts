import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { VacancyUseCases } from '../use-cases/vacancy';
import { Vacancy } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/vacancy')
export class VacancyController {
  constructor(
    private vacancyUseCases: VacancyUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get()
  getAll(@Body() item?: any) {
    return this.vacancyUseCases.getAllVacancies(item);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get('partner')
  getVacanciesByPartner(@Body() item: any) {
    return this.vacancyUseCases.getVacanciesWithPartner(item);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Post()
  createVacancy(@Body() vacancy: Vacancy) {
    return this.vacancyUseCases.createVacancy(vacancy);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('activate/:id')
  activateAlumni(@Param('id') vacancyId: string) {
    return this.vacancyUseCases.activateVacancy({ filters: { _id: vacancyId }, payload: { status: 'aktif' } });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put(':id')
  updateVacancy(
    @Param('id') vacancyId: string,
    @Body() vacancy: Vacancy,
  ) {
    return this.vacancyUseCases.updateVacancy({ filters: { _id: vacancyId }, payload: vacancy });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete(':id')
  deleteVacancy(@Param('id') VacancyId: string) {
    return this.vacancyUseCases.deleteVacancy(VacancyId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete()
  deleteAllVacancy() {
    return this.vacancyUseCases.deleteAllVacancy();
  }

}
