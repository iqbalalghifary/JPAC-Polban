import { Injectable } from '@nestjs/common';
import { Experience } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class ExperienceUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllExperiences() {
    return this.dataServices.experiences.getAll();
  }

  getExperienceById(id: any) {
    return this.dataServices.experiences.get(id);
  }

  createExperience(experience: Experience) {
    return this.dataServices.experiences.create(experience);
  }

  updateExperience(data: any) {
    return this.dataServices.experiences.updateOne(data.id, data.payload);
  }

  deleteExperience(id: any) {
    return this.dataServices.experiences.delete(id);
  }

  deleteAllExperience() {
    return this.dataServices.experiences.deleteAll();
  }

}
