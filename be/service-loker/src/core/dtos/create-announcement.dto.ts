import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAnnouncementDto {
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
  publishDate: Date;
  
  @IsString()
  @IsNotEmpty()
  status: boolean;
}

export class UpdateAnnouncementDto extends PartialType(CreateAnnouncementDto) {}
