import { Controller } from '@nestjs/common';
import { CertificationUseCases } from '../use-cases/certification';
import { Certification } from 'src/core/entities';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/certification')
export class CertificationController {
  constructor(
    private certificationUseCases: CertificationUseCases,
  ) {}

  @MessagePattern({ cmd: 'get_all_certification' })
  async getAll() {
    try {
      return await this.certificationUseCases.getAllCertifications();      
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'get_by_id_certification' })
  async getById(id: any) {
    try {
      return await this.certificationUseCases.getCertificationById(id);     
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'create_certification' })
  async createCertification(data: Certification) {
    try {
      return await this.certificationUseCases.createCertification(data);
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_certification' })
  async updateCertification(data: any) {
    try {
      return await this.certificationUseCases.updateCertification(data);
    } catch (error) {
      console.log(error); 
    }
  }

  @MessagePattern({ cmd: 'delete_certification' })
  async deleteCertification(certificationId: string) {
    try {
      return await this.certificationUseCases.deleteCertification(certificationId);      
    } catch (error) {
      console.log(error); 
    }
  }

}
