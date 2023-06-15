import { Injectable } from '@nestjs/common';
import { Volunteer } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class VolunteerUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllVolunteers(): Promise<Volunteer[]> {
    return this.dataServices.volunteers.getAll();
  }

  getVolunteerById(id: any): Promise<Volunteer> {
    return this.dataServices.volunteers.get(id);
  }

  createVolunteer(volunteer: Volunteer): Promise<Volunteer> {
    return this.dataServices.volunteers.create(volunteer);
  }

  updateVolunteer(data: any): Promise<Volunteer> {
    return this.dataServices.volunteers.updateOne(data.id, data.payload);
  }

  deleteVolunteer(id: any): Promise<Volunteer> {
    return this.dataServices.volunteers.delete(id);
  }

}
