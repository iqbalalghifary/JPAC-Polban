import { Controller } from '@nestjs/common';
import { AlumniUseCases } from '../use-cases/alumni';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/alumni')
export class AlumniController {
  constructor(private alumniUseCases: AlumniUseCases) {}

  @MessagePattern({ cmd: 'get_all_alumni' })
  async getAll() {
    try {
      return await this.alumniUseCases.getAlumni()
    } catch (error){
      console.log(error)
    }
  }

  @MessagePattern({ cmd: 'get_by_id_alumni' })
  async getById(id: string) {
    try {
      return await this.alumniUseCases.getAlumni({ _id: id });
    } catch (error){
      console.log(error)
    }
  }

  @MessagePattern({ cmd: 'register_alumni' })
  async createAlumni(data: any) {
    try {
      return await this.alumniUseCases.registerAlumni(data.alumni, data.buffer);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'verify_alumni' })
  async verifyAlumni(data: any) {
    try {
      return await this.alumniUseCases.verifyAlumni(data);
    } catch(error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'receipt_alumni' })
  async uploadReceipt(data: any)  {
    try {
      return await this.alumniUseCases.uploadReceipt(data);
    } catch(error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'activate_alumni' })
  async activateAlumni(data: any) {
    try {
      return await this.alumniUseCases.activateAlumni(data);
    } catch(error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_alumni' })
  async deleteAlumni(alumniId: string) {
    try {
      return await this.alumniUseCases.deleteAlumni(alumniId);      
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_all_alumni' })
  async deleteAllAlumni() {
    try {
      return await this.alumniUseCases.deleteAllAlumni();
    } catch (error){
      console.log(error);
    }
  }

}