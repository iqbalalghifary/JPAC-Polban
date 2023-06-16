import { Injectable } from '@nestjs/common';
import { Organization } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class OrganizationUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getOrganization(item?: any) {
    return this.dataServices.organizations.get(item);
  }

  createOrganization(organiation: Organization) {
    return this.dataServices.organizations.create(organiation);
  }

  updateOrganization(data: any) {
    return this.dataServices.organizations.updateOne(data.filters, data.payload);
  }

  deleteOrganization(id: any) {
    return this.dataServices.organizations.delete(id);
  }

  deleteAllOrganization() {
    return this.dataServices.organizations.deleteAll();
  }

}
