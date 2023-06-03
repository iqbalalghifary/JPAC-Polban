import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ResponseCreatedCertificationDto } from '../core/dtos';
import { CertificationUseCases } from '../use-cases/certification';
import { Certification } from 'src/core/entities';

@Controller('api/certification')
export class CertificationController {
  constructor(
    private certificationUseCases: CertificationUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.certificationUseCases.getAllCertifications();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.certificationUseCases.getCertificationById(id);
  }

  @Post()
  async createCertification(@Body() datas: Certification) : Promise<ResponseCreatedCertificationDto> {
    const responseCreatedCertificationDto = new ResponseCreatedCertificationDto();
    try {
      const createdCertification = await this.certificationUseCases.createCertification(datas);
      responseCreatedCertificationDto.success = true;
      responseCreatedCertificationDto.createdCertification = createdCertification;
    } catch (error) {
      responseCreatedCertificationDto.success = false;
    }
    return responseCreatedCertificationDto;
  }

  @Put(':id')
  updateCertification(
    @Param('id') CertificationId: string,
    @Body() datas: Certification,
  ) {
    return this.certificationUseCases.updateCertification(CertificationId, datas);
  }

  @Delete(':id')
  deleteCertification(@Param('id') CertificationId: string) {
    return this.certificationUseCases.deleteCertification(CertificationId);
  }

}
