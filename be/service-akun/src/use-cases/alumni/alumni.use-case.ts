import { Injectable } from '@nestjs/common';
import { Alumni } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class AlumniUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllAlumnis(): Promise<Alumni[]> {
    return this.dataServices.alumnis.getAll();
  }

  updateAlumni(alumniId: string, alumni: Alumni): Promise<Alumni> {
    return this.dataServices.alumnis.update(alumniId, alumni);
  }

  getAlumniById(id: any): Promise<Alumni> {
    return this.dataServices.alumnis.get(id);
  }

  registerAlumni(alumni: Alumni): Promise<Alumni> {
    return this.dataServices.alumnis.create(alumni);
  }

  deleteAlumni(id: string): Promise<Alumni> {
    return this.dataServices.alumnis.delete(id);
  }

}
