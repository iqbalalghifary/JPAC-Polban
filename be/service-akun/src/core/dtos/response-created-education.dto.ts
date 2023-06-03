import { Education } from '../entities';

export class ResponseCreatedEducationDto {
  success: boolean;
  createdEducation: Education;
}
