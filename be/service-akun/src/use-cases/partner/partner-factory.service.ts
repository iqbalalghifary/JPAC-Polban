import { Injectable } from '@nestjs/common';
import { Partner } from '../../core/entities';
import { PartnerRegisterDto } from '../../core/dtos';

@Injectable()
export class PartnerFactoryService {
  registerPartner(partnerRegisterDto: PartnerRegisterDto) {
    const newPartner = new Partner();
    newPartner.name = partnerRegisterDto.name;
    newPartner.address = partnerRegisterDto.address;
    newPartner.phone = partnerRegisterDto.phone;
    newPartner.email = partnerRegisterDto.email;
    newPartner.sector = partnerRegisterDto.sector;
    newPartner.logo = partnerRegisterDto.logo;
    newPartner.website = partnerRegisterDto.website;
    return newPartner;
  }
}