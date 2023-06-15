import { Injectable } from '@nestjs/common';
import { JobApplication } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class JobApplicationUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllJobApplications() {
    return this.dataServices.jobApplications.getAll();
  }

  getJobApplicationById(id: any) {
    return this.dataServices.jobApplications.get(id);
  }

  createJobApplication(JobApplication: JobApplication) {
    return this.dataServices.jobApplications.create(JobApplication);
  }

  updateJobApplication(data: any) {
    return this.dataServices.jobApplications.update(data.id, data.payload);
  }

  deleteJobApplication(id: any) {
    return this.dataServices.jobApplications.delete(id);
  }

  deleteAllJobApplication() {
    return this.dataServices.jobApplications.deleteAll();
  }

}
