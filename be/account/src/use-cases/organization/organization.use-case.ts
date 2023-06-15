import { Injectable } from '@nestjs/common';
import { Organization } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class OrganizationUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllOrganizations() {
    return this.dataServices.organizations.getAll();
  }

  getOrganizationById(id: any) {
    return this.dataServices.organizations.get(id);
  }

  createOrganization(organiation: Organization) {
    return this.dataServices.organizations.create(organiation);
  }

  updateOrganization(data: any) {
    return this.dataServices.organizations.updateOne(data.id, data.payload);
  }

  deleteOrganization(id: any) {
    return this.dataServices.organizations.delete(id);
  }

  deleteAllOrganization() {
    return this.dataServices.organizations.deleteAll();
  }

}
