import { Partner } from '../entities';

export class ResponseRegisteredPartnerDto {
  success: boolean;
  signedUpPartner: Partner;
}
