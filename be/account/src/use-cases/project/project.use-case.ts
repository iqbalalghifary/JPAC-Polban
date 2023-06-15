import { Injectable } from '@nestjs/common';
import { Project } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class ProjectUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllProjects(): Promise<Project[]> {
    return this.dataServices.projects.getAll();
  }

  getProjectById(id: any): Promise<Project> {
    return this.dataServices.projects.get(id);
  }

  createProject(project: Project): Promise<Project> {
    return this.dataServices.projects.create(project);
  }

  updateProject(data: any): Promise<Project> {
    return this.dataServices.projects.updateOne(data.id, data.payload);
  }

  deleteProject(id: any): Promise<Project> {
    return this.dataServices.projects.delete(id);
  }

}
