import { Injectable } from '@nestjs/common';
import { Alumni } from '../../core/entities';
import { AlumniRegisterDto, UpdateAlumniDto } from '../../core/dtos';

@Injectable()
export class AlumniFactoryService {
  registerAlumni(alumniRegisterDto: AlumniRegisterDto) {
    const newAlumni = new Alumni();
    newAlumni.name = alumniRegisterDto.name;
    newAlumni.gender = alumniRegisterDto.gender;
    newAlumni.address = alumniRegisterDto.address;
    newAlumni.phone = alumniRegisterDto.phone;
    newAlumni.email = alumniRegisterDto.email;
    newAlumni.award = alumniRegisterDto.awardId;
    newAlumni.yearGraduated = alumniRegisterDto.yearGraduated;
    newAlumni.dateOfBirth = alumniRegisterDto.dateOfBirth;
    newAlumni.status = "diusulkan";
    return newAlumni;
  }
}