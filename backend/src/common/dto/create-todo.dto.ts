import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEnum, IsDateString } from 'class-validator';
import { Priority } from '@prisma/client';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  moduleId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;

  @IsEnum(Priority)
  @IsOptional()
  priority?: Priority;

  @IsDateString()
  @IsOptional()
  dueDate?: string;
}