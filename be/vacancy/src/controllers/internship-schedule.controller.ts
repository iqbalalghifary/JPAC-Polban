import { Controller } from '@nestjs/common';
import { InternshipScheduleUseCases } from '../use-cases/internship-shedule';
import { InternshipSchedule } from 'src/core';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/internship-schedule')
export class InternshipScheduleController {
  constructor(
    private internshipScheduleUseCases: InternshipScheduleUseCases
  ) {}

  @MessagePattern({ cmd: 'get_all_internship_schedule' })
  async getAll() {
    try {
      return await this.internshipScheduleUseCases.getAllInternshipSchedules();
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_by_id_internship_schedule' })
  async getById(id: any) {
    try {
      return await this.internshipScheduleUseCases.getInternshipScheduleById(id);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'create_internship_schedule' })
  async createInternshipSchedule(internshipSchedule: InternshipSchedule) {
    try {
      return await this.internshipScheduleUseCases.createInternshipSchedule(internshipSchedule);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_internship_schedule' })
  async updateInternshipSchedule(data: any) {
    try {
      return await this.internshipScheduleUseCases.updateInternshipSchedule(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_internship_schedule' })
  async deleteInternshipSchedule(id: any) {
    try {
      return await this.internshipScheduleUseCases.deleteInternshipSchedule(id);
    } catch (error) {
      console.log(error);
    }
  }

}
