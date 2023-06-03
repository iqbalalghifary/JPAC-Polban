import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Put, 
  UseInterceptors, 
  UploadedFile,
  Body,
  Delete
} from '@nestjs/common';
import { AlumniRegisterDto, ResponseRegisteredAlumniDto, ResponseBasic } from '../core/dtos';
import { AlumniFactoryService, AlumniUseCases } from '../use-cases/alumni';
import { Alumni } from 'src/core';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/alumni')
export class AlumniController {
  constructor(
    private alumniUseCases: AlumniUseCases,
    private alumniFactoryService: AlumniFactoryService
  ) {}

  @Get()
  async getAll() {
    return this.alumniUseCases.getAllAlumnis();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.alumniUseCases.getAlumniById(id);
  }

  @Post('register')
  async registerAlumni(@Body() alumniRegisterDto: AlumniRegisterDto) : Promise<ResponseRegisteredAlumniDto> {
    const responseRegisteredAlumniDto = new ResponseRegisteredAlumniDto();
    try {
      const alumni = this.alumniFactoryService.registerAlumni(alumniRegisterDto);

      const registerAlumni = await this.alumniUseCases.registerAlumni(alumni);

      responseRegisteredAlumniDto.success = true;
      responseRegisteredAlumniDto.signedUpAlumni = registerAlumni;
    } catch (error) {
      console.log(error);
      responseRegisteredAlumniDto.success = false;
    }

    return responseRegisteredAlumniDto;
  }

  @Put('verify/:id')
  async verifyAlumni(
    @Param('id') userId: string,
    @Body() datas: Alumni,
  ) : Promise<ResponseBasic> {
    const responseBasic = new ResponseBasic();
    try {
      await this.alumniUseCases.updateAlumni(userId, datas);
      responseBasic.success = true;
      responseBasic.description = "Alumni has successfuly updated";
    } catch(error) {
      responseBasic.success = false;
      responseBasic.description = "Alumni failed to update";
    }
    return responseBasic;
  }

  @Put('upload-receipt/:id')
  @UseInterceptors(FileInterceptor('receipt', {
    storage: diskStorage({
      destination: './uploads/receipt',
      filename: (_, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))
  async uploadReceipt(
    @Param('id') userId: string,
    @UploadedFile() file: Express.Multer.File
  ) : Promise<ResponseBasic> {
    const responseBasic = new ResponseBasic();
    try {
      const datas = new Alumni();
      datas.receipt = file.path;
      await this.alumniUseCases.updateAlumni(userId, datas);
      responseBasic.success = true;
      responseBasic.description = "Receipt has successfuly uploaded";
    } catch (error) {
      responseBasic.success = true;
      responseBasic.description = error.message;
    }

    return responseBasic;
  }

  @Put('activate/:id')
  async activateAlumniAccount(
    @Param('id') userId: string,
    @Body() datas: Alumni,
  ) : Promise<ResponseBasic> {
    const responseBasic = new ResponseBasic();
    try {
      await this.alumniUseCases.updateAlumni(userId, datas);
      responseBasic.success = true;
      responseBasic.description = "Alumni has successfuly updated";
    } catch(error) {
      responseBasic.success = false;
      responseBasic.description = "Alumni failed to update";
    }
    return responseBasic;
  }

  @Delete(':id')
  deleteAlumni(@Param('id') alumniId: string) {
    return this.alumniUseCases.deleteAlumni(alumniId);
  }

}