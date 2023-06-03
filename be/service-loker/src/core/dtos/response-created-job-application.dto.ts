import { JobApplication } from '../entities';

export class JobApplicationResponseDto {
  success: boolean;
  createdJobApplication: JobApplication;
}
