import { Controller } from '@nestjs/common';
import { VolunteerUseCases } from '../use-cases/volunteer';
import { Volunteer } from 'src/core/entities';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/volunteer')
export class VolunteerController {
  constructor(
    private volunteerUseCases: VolunteerUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_volunteer' })
  async getAll() {
    try {
      return await this.volunteerUseCases.getAllVolunteers();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_volunteer' })
  async getById(id: any) {
    try {
      return await this.volunteerUseCases.getVolunteerById(id);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_volunteer' })
  async createVolunteer(data: Volunteer) {
    try {
      return await this.volunteerUseCases.createVolunteer(data);
    } catch (error) {
      console.log(error)
    }
  }

  @MessagePattern({ cmd: 'update_volunteer' })
  async updateVolunteer(data: any) {
    try {
      return await this.volunteerUseCases.updateVolunteer(data);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_volunteer' })
  async deleteVolunteer(volunteerId: string) {
    try {
      return await this.volunteerUseCases.deleteVolunteer(volunteerId);      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_all_volunteer' })
  async deleteAllAlumni() {
    try {
      return await this.volunteerUseCases.deleteAllVolunteer();
    } catch (error){
      console.log(error);
    }
  }

}
