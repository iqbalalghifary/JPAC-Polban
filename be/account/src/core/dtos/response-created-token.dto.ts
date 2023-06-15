import { Token } from '../entities';

export class ResponseCreatedTokenDto {
  success: boolean;
  createdToken: Token;
}
