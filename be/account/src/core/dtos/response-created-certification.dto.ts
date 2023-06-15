import { Certification } from '../entities';

export class ResponseCreatedCertificationDto {
  success: boolean;
  createdCertification: Certification;
}
