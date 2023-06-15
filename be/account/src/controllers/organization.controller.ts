import { Controller } from '@nestjs/common';
import { OrganizationUseCases } from '../use-cases/organization';
import { Organization } from 'src/core/entities';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/organization')
export class OrganizationController {
  constructor(
    private organizationUseCases: OrganizationUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_organization' })
  async getAll() {
    try {
      return this.organizationUseCases.getAllOrganizations();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_organization' })
  async getById(id: any) {
    try {
      return this.organizationUseCases.getOrganizationById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_organization' })
  async createOrganization(data: Organization){
    try {
      return await this.organizationUseCases.createOrganization(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_organization' })
  async updateOrganization(data: any) {
    try {
      return await this.organizationUseCases.updateOrganization(data);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_organization' })
  async deleteOrganization(organizationId: string) {
    try {
      return await this.organizationUseCases.deleteOrganization(organizationId);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_all_organization' })
  async deleteAllAlumni() {
    try {
      return await this.organizationUseCases.deleteAllOrganization();
    } catch (error){
      console.log(error);
    }
  }

}
