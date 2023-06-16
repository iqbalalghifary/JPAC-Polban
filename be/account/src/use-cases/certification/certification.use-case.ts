import { Injectable } from '@nestjs/common';
import { Certification } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class CertificationUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getCertification(item?: any) {
    return this.dataServices.certifications.get(item);
  }

  createCertification(certification: Certification) {
    return this.dataServices.certifications.create(certification);
  }

  updateCertification(data: any) {
    return this.dataServices.certifications.updateOne(data.filters, data.payload);
  }

  deleteCertification(id: any) {
    return this.dataServices.certifications.delete(id);
  }

  deleteAllCertification() {
    return this.dataServices.certifications.deleteAll();
  }

}
