import { 
  Controller, 
  Post, 
  Body
} from '@nestjs/common';
import { AlumniRegisterDto, ResponseRegisteredAlumniDto } from '../core/dtos';
import { AlumniFactoryService, AlumniUseCases } from '../use-cases/alumni';

@Controller('api/alumni')
export class AlumniController {
  constructor(
    private alumniUseCases: AlumniUseCases,
    private alumniFactoryService: AlumniFactoryService
  ) {}

  @Post('register')
  async register(
    @Body() alumniRegisterDto: AlumniRegisterDto,
  ) : Promise<ResponseRegisteredAlumniDto> {
    const responseRegisteredAlumniDto = new ResponseRegisteredAlumniDto();
    try {
      const alumni = this.alumniFactoryService.registerAlumni(alumniRegisterDto);
      const registerAlumni = await this.alumniUseCases.registerAlumni(alumni);

      responseRegisteredAlumniDto.success = true;
      responseRegisteredAlumniDto.signedUpAlumni = registerAlumni;
    } catch (error) {
      responseRegisteredAlumniDto.success = false;
    }

    return responseRegisteredAlumniDto;
  }

}