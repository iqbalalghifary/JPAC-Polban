import { Controller } from '@nestjs/common';
import { AlumniFactoryService, AlumniUseCases } from '../use-cases/alumni';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/alumni')
export class AlumniController {
  constructor(
    private alumniUseCases: AlumniUseCases,
    private alumniFactoryService: AlumniFactoryService
  ) {}

  @MessagePattern({ cmd: 'get_all_alumni' })
  async getAll() {
    try {
      return await this.alumniUseCases.getAllAlumnis();
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
  async registerAlumni(data: any) {
    try {
      const alumni = this.alumniFactoryService.registerAlumni(data);
      return await this.alumniUseCases.registerAlumni(alumni);
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

  @MessagePattern({ cmd: 'upload_receipt_alumni' })
  async uploadReceipt(data: any)  {
    try {
      return await this.alumniUseCases.updateAlumniOne(data);
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

}