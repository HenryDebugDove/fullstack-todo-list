import { IsString, IsNotEmpty, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { ResourceType } from '@prisma/client';

export class CreateResourceDto {
  @IsString()
  @IsNotEmpty()
  moduleId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsEnum(ResourceType)
  type: ResourceType;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  duration?: string;

  @IsNumber()
  @IsOptional()
  order?: number;
}