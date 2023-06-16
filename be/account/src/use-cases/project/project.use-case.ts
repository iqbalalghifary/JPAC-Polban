import { Injectable } from '@nestjs/common';
import { Project } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class ProjectUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getProject(item?: any) {
    return this.dataServices.projects.get(item);
  }

  createProject(project: Project) {
    return this.dataServices.projects.create(project);
  }

  updateProject(data: any) {
    return this.dataServices.projects.updateOne(data.filters, data.payload);
  }

  deleteProject(id: any) {
    return this.dataServices.projects.delete(id);
  }

  deleteAllProject() {
    return this.dataServices.projects.deleteAll();
  }

}
