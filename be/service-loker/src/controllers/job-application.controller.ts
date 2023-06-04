import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Body, 
  Put
} from '@nestjs/common';
import { JobApplicationResponseDto } from '../core/dtos';
import { JobApplicationUseCases } from '../use-cases/job-application';
import { JobApplication } from 'src/core';

@Controller('api/JobApplication')
export class JobApplicationController {
  constructor(
    private jobApplicationUseCases: JobApplicationUseCases
  ) {}

  @Get()
  async getAll() {
    return this.jobApplicationUseCases.getAllJobApplications();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.jobApplicationUseCases.getJobApplicationById(id);
  }

  @Post()
  async createJobApplication(@Body() JobApplication: JobApplication) : Promise<JobApplicationResponseDto> {
    const jobApplicationResponseDto = new JobApplicationResponseDto();
    try {
      const createdJobApplication = await this.jobApplicationUseCases.createJobApplication(JobApplication);
      jobApplicationResponseDto.success = true;
      jobApplicationResponseDto.createdJobApplication = createdJobApplication;
    } catch (error) {
      jobApplicationResponseDto.success = false;
    }

    return jobApplicationResponseDto;
  }

  @Put(':id')
  async updateJobApplication(
    @Param('id') jobApplicationId: string,
    @Body() jobApplication: JobApplication
  ) {
    return this.jobApplicationUseCases.updateJobApplication(jobApplicationId, jobApplication);
  }

  @Get(':id')
  async deleteJobApplication(@Param('id') id: any) {
    return this.jobApplicationUseCases.deleteJobApplication(id);
  }

}
