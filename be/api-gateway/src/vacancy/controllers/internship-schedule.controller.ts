import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  Put
} from '@nestjs/common';
import { InternshipScheduleUseCases } from '../use-cases/internship-shedule';
import { InternshipSchedule } from '../core';

@Controller('api/internship-schedule')
export class InternshipScheduleController {
  constructor(
    private internshipScheduleUseCases: InternshipScheduleUseCases
  ) {}

  @Get()
  async getAll() {
    return this.internshipScheduleUseCases.getAllInternshipSchedules();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.internshipScheduleUseCases.getInternshipScheduleById(id);
  }

  @Post()
  async createInternshipSchedule(@Body() internshipSchedule: InternshipSchedule) {
    return this.internshipScheduleUseCases.createInternshipSchedule(internshipSchedule);
  }

  @Put(':id')
  async updateInternshipSchedule(
    @Param('id') internshipScheduleId: string,
    @Body() internshipSchedule: InternshipSchedule,
  ) {
    return this.internshipScheduleUseCases.updateInternshipSchedule({ id: internshipScheduleId, payload: internshipSchedule});
  }

  @Get(':id')
  async deleteInternshipSchedule(@Param('id') id: any) {
    return this.internshipScheduleUseCases.deleteInternshipSchedule(id);
  }

}