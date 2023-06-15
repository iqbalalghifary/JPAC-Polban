import { Injectable } from '@nestjs/common';
import { Education } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class EducationUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllEducations() {
    return this.dataServices.educations.getAll();
  }

  getEducationById(id: any) {
    return this.dataServices.educations.get(id);
  }

  createEducation(education: Education) {
    return this.dataServices.educations.create(education);
  }

  updateEducation(data: any) {
    return this.dataServices.educations.updateOne(data.id, data.payload);
  }

  deleteEducation(id: any) {
    return this.dataServices.educations.delete(id);
  }

  deleteAllEducation() {
    return this.dataServices.educations.deleteAll();
  }

}
