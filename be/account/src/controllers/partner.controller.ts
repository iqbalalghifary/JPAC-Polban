import { Controller } from '@nestjs/common';
import { PartnerUseCases } from '../use-cases/partner';
import { MessagePattern } from '@nestjs/microservices';
import { Partner } from 'src/core';

@Controller('api/Partner')
export class PartnerController {
  constructor(private partnerUseCases: PartnerUseCases) {}

  @MessagePattern({ cmd: 'get_all_partner' })
  async getAll(item?: any) {
    try {
      console.log(item)
      return this.partnerUseCases.getPartner(item.filters);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_partner_with_vacancies' })
  async getPartnerWithVacancies(item: any) {
    try {
      return this.partnerUseCases.getPartnerWithVacancies(item.filters);
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
      return await this.partnerUseCases.verifyPartner(data);
    } catch(error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'mou_partner' })
  async updateMoU(data: any) {
    try {
      return await this.partnerUseCases.uploadMoU(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'activate_partner' })
  async activatePartnerAccount(data: any) {
    try {
      return await this.partnerUseCases.activatePartner(data);
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