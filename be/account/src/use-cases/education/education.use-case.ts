import { Injectable } from '@nestjs/common';
import { Education } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class EducationUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllEducations(): Promise<Education[]> {
    return this.dataServices.educations.getAll();
  }

  getEducationById(id: any): Promise<Education> {
    return this.dataServices.educations.get(id);
  }

  createEducation(education: Education): Promise<Education> {
    return this.dataServices.educations.create(education);
  }

  updateEducation(data: any): Promise<Education> {
    return this.dataServices.educations.updateOne(data.id, data.payload);
  }

  deleteEducation(id: any): Promise<Education> {
    return this.dataServices.educations.delete(id);
  }

}
