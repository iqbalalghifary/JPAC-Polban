import { IsString, IsNotEmpty, IsDate, IsEnum, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class AlumniRegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['male','female'])
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  yearGraduated: Number;

  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;
}

export class UpdateAlumniDto extends PartialType(AlumniRegisterDto) {}