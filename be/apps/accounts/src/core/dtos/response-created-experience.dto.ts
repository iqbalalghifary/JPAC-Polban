import { Experience } from '../entities';

export class ResponseCreatedExperienceDto {
  success: boolean;
  createdExperience: Experience;
}
