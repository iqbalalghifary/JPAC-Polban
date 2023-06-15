import { Injectable } from '@nestjs/common';
import { Certification } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class CertificationUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllCertifications(): Promise<Certification[]> {
    return this.dataServices.certifications.getAll();
  }

  getCertificationById(id: any): Promise<Certification> {
    return this.dataServices.certifications.get(id);
  }

  createCertification(certification: Certification): Promise<Certification> {
    return this.dataServices.certifications.create(certification);
  }

  updateCertification(data: any): Promise<Certification> {
    return this.dataServices.certifications.updateOne(data.id, data.payload);
  }

  deleteCertification(id: any): Promise<Certification> {
    return this.dataServices.certifications.delete(id);
  }
}
