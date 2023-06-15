import { Controller } from '@nestjs/common';
import { PartnerUseCases } from '../use-cases/partner';
import { MessagePattern } from '@nestjs/microservices';
import { Partner } from 'src/core';

@Controller('api/Partner')
export class PartnerController {
  constructor(private partnerUseCases: PartnerUseCases) {}

  @MessagePattern({ cmd: 'get_all_partner' })
  async getAll() {
    try {
      return this.partnerUseCases.getAllPartners();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_partner' })
  async getById(id: any) {
    try {
      return this.partnerUseCases.getPartnerById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_partner' })
  async createPartner(data: any) {
    try {
      return await this.partnerUseCases.createPartner(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'verify_partner' })
  async verifyPartner(data: any) {
    try {
      return this.partnerUseCases.updatePartner(data);
    } catch(error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_partner_mou' })
  async updateMoU(data: any) {
    try {
      this.partnerUseCases.updatePartner(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'activate_partner' })
  async activatePartnerAccount(data: any) {
    try {
      return await this.partnerUseCases.updatePartner(data);
    } catch(error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_partner' })
  async deleteProject(partnerId: string) {
    try {
      return await this.partnerUseCases.deletePartner(partnerId);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_all_partner' })
  async deleteAllAlumni() {
    try {
      return await this.partnerUseCases.deleteAllPartner();
    } catch (error){
      console.log(error);
    }
  }

}