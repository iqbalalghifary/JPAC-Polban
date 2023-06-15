import { Injectable } from '@nestjs/common';
import { Partner } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class PartnerUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllPartners(): Promise<Partner[]> {
    return this.dataServices.partners.getAll();
  }

  updatePartner(data: any): Promise<Partner> {
    return this.dataServices.partners.updateOne(data.id, data.payload);
  }

  getPartnerById(id: any): Promise<Partner> {
    return this.dataServices.partners.get(id);
  }

  registerPartner(Partner: Partner): Promise<Partner> {
    return this.dataServices.partners.create(Partner);
  }
}
