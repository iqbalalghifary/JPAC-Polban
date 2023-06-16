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
import { JobApplicationUseCases } from '../use-cases/job-application';
import { JobApplication } from '../core';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/JobApplication')
export class JobApplicationController {
  constructor(
    private jobApplicationUseCases: JobApplicationUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.jobApplicationUseCases.getAllJobApplications();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.jobApplicationUseCases.getJobApplicationById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post()
  createJobApplication(@Body() JobApplication: JobApplication) {
    return this.jobApplicationUseCases.createJobApplication(JobApplication);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateJobApplication(
    @Param('id') jobApplicationId: string,
    @Body() jobApplication: JobApplication
  ) {
    return this.jobApplicationUseCases.updateJobApplication({ filters: { _id: jobApplicationId }, payload: jobApplication});
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteJobApplication(@Param('id') id: any) {
    return this.jobApplicationUseCases.deleteJobApplication(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete()
  deleteAllVacancy() {
    return this.jobApplicationUseCases.deleteAllJobApplication();
  }

}
