import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { VacancyUseCases } from '../use-cases/vacancy';
import { Vacancy } from 'src/core';
import { VacancyResponseDto } from 'src/core/dtos';

@Controller('api/vacancy')
export class VacancyController {
  constructor(
    private vacancyUseCases: VacancyUseCases
  ) {}

  @Get()
  async getAll() {
    return this.vacancyUseCases.getAllVacancies();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.vacancyUseCases.getVacancyById(id);
  }

  @Post()
  async createVacancy(@Body() vacancy: Vacancy) : Promise<VacancyResponseDto> {
    const vacancyResponseDto = new VacancyResponseDto();
    try {
      const createdVacancy = await this.vacancyUseCases.createVacancy(vacancy);
      vacancyResponseDto.success = true;
      vacancyResponseDto.createdVacancy = createdVacancy;
    } catch (error) {
      vacancyResponseDto.success = false;
    }
    return vacancyResponseDto;
  }

  @Put(':id')
  updateVacancy(
    @Param('id') VacancyId: string,
    @Body() vacancy: Vacancy,
  ) {
    return this.vacancyUseCases.updateVacancy(VacancyId, vacancy);
  }

  @Delete(':id')
  deleteVacancy(@Param('id') VacancyId: string) {
    return this.vacancyUseCases.deleteVacancy(VacancyId);
  }

}
