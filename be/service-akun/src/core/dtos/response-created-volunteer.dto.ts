import { Volunteer } from '../entities';

export class ResponseCreatedVolunteerDto {
  success: boolean;
  createdVolunteer: Volunteer;
}
