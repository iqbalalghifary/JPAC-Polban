import { Controller } from '@nestjs/common';
import { AlumniFactoryService, AlumniUseCases } from '../use-cases/alumni';
import { MessagePattern } from '@nestjs/microservices';
import { Alumni } from 'src/core';

@Controller('api/alumni')
export class AlumniController {
  constructor(
    private alumniUseCases: AlumniUseCases,
    private alumniFactoryService: AlumniFactoryService
  ) {}

  @MessagePattern({ cmd: 'get_all_alumni' })
  async getAll() {
    try {
      return await this.alumniUseCases.getAllAlumnis()
    } catch (error){
      console.log(error)
    }
  }

  @MessagePattern({ cmd: 'get_by_id_alumni' })
  async getById(id: string) {
    try {
      return await this.alumniUseCases.getAlumniById(id);
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
  async activateAlumniAccount(data: any) {
    try {
      return await this.alumniUseCases.updateAlumniOne(data);
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