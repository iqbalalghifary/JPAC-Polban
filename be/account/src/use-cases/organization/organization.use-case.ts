import { Injectable } from '@nestjs/common';
import { Organization } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class OrganizationUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllOrganizations(): Promise<Organization[]> {
    return this.dataServices.organizations.getAll();
  }

  getOrganizationById(id: any): Promise<Organization> {
    return this.dataServices.organizations.get(id);
  }

  createOrganization(organiation: Organization): Promise<Organization> {
    return this.dataServices.organizations.create(organiation);
  }

  updateOrganization(data: any): Promise<Organization> {
    return this.dataServices.organizations.updateOne(data.id, data.payload);
  }

  deleteOrganization(id: any): Promise<Organization> {
    return this.dataServices.organizations.delete(id);
  }

}
