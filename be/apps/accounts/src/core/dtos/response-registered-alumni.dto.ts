import { Alumni } from '../entities';

export class ResponseRegisteredAlumniDto {
  success: boolean;
  signedUpAlumni: Alumni;
}
