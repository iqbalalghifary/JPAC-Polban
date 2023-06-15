import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { VacancyUseCases } from '../use-cases/vacancy';
import { Vacancy } from '../core';

@Controller('api/vacancy')
export class VacancyController {
  constructor(
    private vacancyUseCases: VacancyUseCases
  ) {}

  @Get()
  getAll() {
    return this.vacancyUseCases.getAllVacancies();
  }

  @Get(':id')
  getById(@Param('id') id: any) {
    return this.vacancyUseCases.getVacancyById(id);
  }

  @Post()
  createVacancy(@Body() vacancy: Vacancy) {
    return this.vacancyUseCases.createVacancy(vacancy);
  }

  @Put(':id')
  updateVacancy(
    @Param('id') VacancyId: string,
    @Body() vacancy: Vacancy,
  ) {
    return this.vacancyUseCases.updateVacancy({ id: VacancyId, payload: vacancy });
  }

  @Delete(':id')
  deleteVacancy(@Param('id') VacancyId: string) {
    return this.vacancyUseCases.deleteVacancy(VacancyId);
  }

}
