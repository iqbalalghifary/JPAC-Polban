import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  Put
} from '@nestjs/common';
import { InternshipScheduleResponseDto } from '../core/dtos';
import { InternshipScheduleUseCases } from '../use-cases/internship-shedule';
import { InternshipSchedule } from 'src/core';

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
  async createInternshipSchedule(@Body() internshipSchedule: InternshipSchedule) : Promise<InternshipScheduleResponseDto> {
    const internshipScheduleResponseDto = new InternshipScheduleResponseDto();
    try {
      const createdInternshipSchedule = await this.internshipScheduleUseCases.createInternshipSchedule(internshipSchedule);

      internshipScheduleResponseDto.success = true;
      internshipScheduleResponseDto.createdInternshipSchedule = createdInternshipSchedule;
    } catch (error) {
      internshipScheduleResponseDto.success = false;
    }

    return internshipScheduleResponseDto;
  }

  @Put(':id')
  async updateInternshipSchedule(
    @Param('id') internshipScheduleId: string,
    @Body() internshipSchedule: InternshipSchedule,
  ) {
    return this.internshipScheduleUseCases.updateInternshipSchedule(internshipScheduleId, internshipSchedule);
  }

  @Get(':id')
  async deleteInternshipSchedule(@Param('id') id: any) {
    return this.internshipScheduleUseCases.deleteInternshipSchedule(id);
  }

}
