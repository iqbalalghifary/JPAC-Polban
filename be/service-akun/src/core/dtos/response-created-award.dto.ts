import { Award } from '../entities';

export class ResponseCreatedAwardDto {
  success: boolean;
  createdAward: Award;
}
