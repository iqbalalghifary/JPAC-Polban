import { Injectable } from '@nestjs/common';
import { Project } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class ProjectUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllProjects() {
    return this.dataServices.projects.getAll();
  }

  getProjectById(id: any) {
    return this.dataServices.projects.get(id);
  }

  createProject(project: Project) {
    return this.dataServices.projects.create(project);
  }

  updateProject(data: any) {
    return this.dataServices.projects.updateOne(data.id, data.payload);
  }

  deleteProject(id: any) {
    return this.dataServices.projects.delete(id);
  }

  deleteAllProject() {
    return this.dataServices.projects.deleteAll();
  }

}
