import { Controller } from '@nestjs/common';
import { VacancyUseCases } from '../use-cases/vacancy';
import { Vacancy } from 'src/core';
import { VacancyResponseDto } from 'src/core/dtos';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/vacancy')
export class VacancyController {
  constructor(
    private vacancyUseCases: VacancyUseCases
  ) {}

  @MessagePattern({ cmd: 'get_all_vacancy' })
  async getAll(item?: any) {
    try {
      return this.vacancyUseCases.getVacancy(item);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_vacancy_with_partner' })
  async getVacancyByPartner(item: any) {
    try {
      return this.vacancyUseCases.getVacancyWithPartner(item.filters);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'create_vacancy' })
  async createVacancy(vacancy: Vacancy) {
    try {
      return await this.vacancyUseCases.createVacancy(vacancy);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'activate_vacancy' })
  async activateVacancy(data: any) {
    try {
      return await this.vacancyUseCases.activateVacancy(data);
    } catch(error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_vacancy' })
  async updateVacancy(data: any) {
    try {
      return await this.vacancyUseCases.updateVacancy(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_vacancy' })
  async deleteVacancy(vacancyId: string) {
    try {
      return await this.vacancyUseCases.deleteVacancy(vacancyId);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_all_vacancy' })
  async deleteAllVacancy() {
    try {
      return await this.vacancyUseCases.deleteAllVacancy();
    } catch (error){
      console.log(error);
    }
  }

}
