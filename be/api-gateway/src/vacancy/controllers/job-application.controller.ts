import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  Put
} from '@nestjs/common';
import { JobApplicationUseCases } from '../use-cases/job-application';
import { JobApplication } from '../core';

@Controller('api/JobApplication')
export class JobApplicationController {
  constructor(
    private jobApplicationUseCases: JobApplicationUseCases
  ) {}

  @Get()
  getAll() {
    return this.jobApplicationUseCases.getAllJobApplications();
  }

  @Get(':id')
  getById(@Param('id') id: any) {
    return this.jobApplicationUseCases.getJobApplicationById(id);
  }

  @Post()
  createJobApplication(@Body() JobApplication: JobApplication) {
    return this.jobApplicationUseCases.createJobApplication(JobApplication);
  }

  @Put(':id')
  updateJobApplication(
    @Param('id') jobApplicationId: string,
    @Body() jobApplication: JobApplication
  ) {
    return this.jobApplicationUseCases.updateJobApplication({ filters: { _id: jobApplicationId }, payload: jobApplication});
  }

  @Get(':id')
  deleteJobApplication(@Param('id') id: any) {
    return this.jobApplicationUseCases.deleteJobApplication(id);
  }

}
