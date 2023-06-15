import { Controller } from '@nestjs/common';
import { PartnerRegisterDto } from '../core/dtos';
import { PartnerFactoryService, PartnerUseCases } from '../use-cases/partner';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/Partner')
export class PartnerController {
  constructor(
    private partnerUseCases: PartnerUseCases,
    private partnerFactoryService: PartnerFactoryService
  ) {}

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

  @MessagePattern({ cmd: 'register_partner' })
  async registerPartner(partnerRegisterDto: PartnerRegisterDto) {
    try {
      const partner = this.partnerFactoryService.registerPartner(partnerRegisterDto);
      return await this.partnerUseCases.registerPartner(partner);
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
}