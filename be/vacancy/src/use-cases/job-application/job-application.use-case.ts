import { Injectable } from '@nestjs/common';
import { JobApplication } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class JobApplicationUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getJobApplication(item?: any) {
    return this.dataServices.jobApplications.get(item);
  }

  createJobApplication(JobApplication: JobApplication) {
    return this.dataServices.jobApplications.create(JobApplication);
  }

  updateJobApplication(data: any) {
    return this.dataServices.jobApplications.updateOne(data.filters, data.payload);
  }

  deleteJobApplication(id: any) {
    return this.dataServices.jobApplications.delete(id);
  }

  deleteAllJobApplication() {
    return this.dataServices.jobApplications.deleteAll();
  }

}
