import { Organization } from '../entities';

export class ResponseCreatedOrganizationDto {
  success: boolean;
  createdOrganization: Organization;
}
