import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateGalleryDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateGalleryDto extends PartialType(CreateGalleryDto) {}
