import { Injectable } from '@nestjs/common';
import { Certification } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class CertificationUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllCertifications() {
    return this.dataServices.certifications.getAll();
  }

  getCertificationById(id: any) {
    return this.dataServices.certifications.get(id);
  }

  createCertification(certification: Certification) {
    return this.dataServices.certifications.create(certification);
  }

  updateCertification(data: any) {
    return this.dataServices.certifications.updateOne(data.id, data.payload);
  }

  deleteCertification(id: any) {
    return this.dataServices.certifications.delete(id);
  }

  deleteAllCertification() {
    return this.dataServices.certifications.deleteAll();
  }

}
