import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Put, 
  UseInterceptors, 
  UploadedFile,
  Body
} from '@nestjs/common';
import { PartnerRegisterDto, ResponseRegisteredPartnerDto, ResponseBasic } from '../core/dtos';
import { PartnerFactoryService, PartnerUseCases } from '../use-cases/partner';
import { Partner } from 'src/core';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/Partner')
export class PartnerController {
  constructor(
    private partnerUseCases: PartnerUseCases,
    private partnerFactoryService: PartnerFactoryService
  ) {}

  @Get()
  async getAll() {
    return this.partnerUseCases.getAllPartners();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.partnerUseCases.getPartnerById(id);
  }

  @Post('register')
  async registerPartner(@Body() PartnerRegisterDto: PartnerRegisterDto) : Promise<ResponseRegisteredPartnerDto> {
    const responseRegisteredPartnerDto = new ResponseRegisteredPartnerDto();
    try {
      const Partner = this.partnerFactoryService.registerPartner(PartnerRegisterDto);
      const registerPartner = await this.partnerUseCases.registerPartner(Partner);
      responseRegisteredPartnerDto.success = true;
      responseRegisteredPartnerDto.signedUpPartner = registerPartner;
    } catch (error) {
      console.log(error);
      responseRegisteredPartnerDto.success = false;
    }

    return responseRegisteredPartnerDto;
  }

  @Put('verify/:id')
  async verifyPartner(
    @Param('id') userId: string,
    @Body() datas: Partner,
  ) : Promise<ResponseBasic> {
    const responseBasic = new ResponseBasic();
    try {
      this.partnerUseCases.updatePartner(userId, datas);
      responseBasic.success = true;
      responseBasic.description = "Partner has successfuly updated";
    } catch(error) {
      responseBasic.success = false;
      responseBasic.description = "Partner failed to update";
    }
    return responseBasic;
  }

  @Put('upload-mou/:id')
  @UseInterceptors(FileInterceptor('mou', {
    storage: diskStorage({
      destination: './uploads/mou',
      filename: (_, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))
  async updateMoU(
    @Param('id') userId: string,
    @UploadedFile() file: Express.Multer.File
  ) : Promise<ResponseBasic> {
    const responseBasic = new ResponseBasic();
    try {
      const datas = new Partner();
      datas.mou = file.path;
      this.partnerUseCases.updatePartner(userId, datas);
      responseBasic.success = true;
      responseBasic.description = "MoU has successfuly uploaded";
    } catch (error) {
      responseBasic.success = true;
      responseBasic.description = error.message;
    }

    return responseBasic;
  }

  @Put('activate/:id')
  async activatePartnerAccount(
    @Param('id') userId: string,
    @Body() datas: Partner,
  ) : Promise<ResponseBasic> {
    const responseBasic = new ResponseBasic();
    try {
      await this.partnerUseCases.updatePartner(userId, datas);
      responseBasic.success = true;
      responseBasic.description = "Partner has successfuly updated";
    } catch(error) {
      responseBasic.success = false;
      responseBasic.description = "Partner failed to update";
    }
    return responseBasic;
  }
}