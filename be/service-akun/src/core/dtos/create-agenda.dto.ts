import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAgendaDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsDate()
  @IsNotEmpty()
  endDate: Date;

  @IsDate()
  @IsNotEmpty()
  publishDate: Date;
}

export class UpdateAgendaDto extends PartialType(CreateAgendaDto) {}
