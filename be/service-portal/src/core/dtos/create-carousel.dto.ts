import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCarouselDto {
  @IsNotEmpty()
  photo: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}

export class UpdateCarouselDto extends PartialType(CreateCarouselDto) {}
