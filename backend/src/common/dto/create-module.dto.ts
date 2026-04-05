import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateModuleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  icon: string;
}