import { Controller } from '@nestjs/common';
import { JobApplicationUseCases } from '../use-cases/job-application';
import { JobApplication } from 'src/core';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/JobApplication')
export class JobApplicationController {
  constructor(
    private jobApplicationUseCases: JobApplicationUseCases
  ) {}

  @MessagePattern({ cmd: 'get_all_job_application' })
  async getAll() {
    try {
      return await this.jobApplicationUseCases.getJobApplication();
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_by_id_job_application' })
  async getById(id: any) {
    try {
      return await this.jobApplicationUseCases.getJobApplication({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'create_job_application' })
  async createJobApplication(jobApplication: JobApplication) {
    try {
      return await this.jobApplicationUseCases.createJobApplication(jobApplication);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_job_application' })
  async updateJobApplication(data: any) {
    try {
      return await this.jobApplicationUseCases.updateJobApplication(data);
    } catch (error) {
      console.log(error);
    }    
  }

  @MessagePattern({ cmd: 'delete_job_application' })
  async deleteJobApplication(id: any) {
    try {
      return await this.jobApplicationUseCases.deleteJobApplication(id);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_all_job_application' })
  async deleteAllJobApplication() {
    try {
      return await this.jobApplicationUseCases.deleteAllJobApplication();
    } catch (error){
      console.log(error);
    }
  }

}
