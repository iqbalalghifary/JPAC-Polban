import { Project } from '../entities';

export class ResponseCreatedProjectDto {
  success: boolean;
  createdProject: Project;
}
