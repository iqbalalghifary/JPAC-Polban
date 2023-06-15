import { Injectable } from '@nestjs/common';
import { Partner } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class PartnerUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllPartners() {
    return this.dataServices.partners.getAll();
  }

  updatePartner(data: any) {
    return this.dataServices.partners.updateOne(data.id, data.payload);
  }

  getPartnerById(id: any) {
    return this.dataServices.partners.get(id);
  }

  createPartner(Partner: Partner) {
    return this.dataServices.partners.create(Partner);
  }

  deletePartner(id: any) {
    return this.dataServices.partners.delete(id);
  }

  deleteAllPartner() {
    return this.dataServices.partners.deleteAll();
  }

}
