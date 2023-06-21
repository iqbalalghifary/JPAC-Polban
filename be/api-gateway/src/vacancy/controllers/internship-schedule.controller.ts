import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  Put,
  UseGuards,
  Delete
} from '@nestjs/common';
import { InternshipScheduleUseCases } from '../use-cases/internship-shedule';
import { InternshipSchedule } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/internship-schedule')
export class InternshipScheduleController {
  constructor(
    private internshipScheduleUseCases: InternshipScheduleUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get()
  async getAll() {
    return this.internshipScheduleUseCases.getAllInternshipSchedules();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.internshipScheduleUseCases.getInternshipScheduleById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Post()
  async createInternshipSchedule(@Body() internshipSchedule: InternshipSchedule) {
    return this.internshipScheduleUseCases.createInternshipSchedule(internshipSchedule);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put(':id')
  async updateInternshipSchedule(
    @Param('id') internshipScheduleId: string,
    @Body() internshipSchedule: InternshipSchedule,
  ) {
    return this.internshipScheduleUseCases.updateInternshipSchedule({ filters: { _id: internshipScheduleId }, payload: internshipSchedule});
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get(':id')
  async deleteInternshipSchedule(@Param('id') id: any) {
    return this.internshipScheduleUseCases.deleteInternshipSchedule(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete()
  deleteAllVacancy() {
    return this.internshipScheduleUseCases.deleteAllInternshipSchedule();
  }

}
