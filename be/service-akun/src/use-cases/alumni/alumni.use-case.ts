import { Injectable } from '@nestjs/common';
import { Alumni } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class AlumniUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAlumniById(id: any): Promise<Alumni> {
    return this.dataServices.alumnis.get(id);
  }

  registerAlumni(alumni: Alumni): Promise<Alumni> {
    return this.dataServices.alumnis.create(alumni);
  }
}
