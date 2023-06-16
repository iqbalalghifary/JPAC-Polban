import { Injectable } from '@nestjs/common';
import { Education } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class EducationUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getEducation(item?: any) {
    return this.dataServices.educations.get(item);
  }

  createEducation(education: Education) {
    return this.dataServices.educations.create(education);
  }

  updateEducation(data: any) {
    return this.dataServices.educations.updateOne(data.filters, data.payload);
  }

  deleteEducation(id: any) {
    return this.dataServices.educations.delete(id);
  }

  deleteAllEducation() {
    return this.dataServices.educations.deleteAll();
  }

}
