import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from '../common/dto/create-module.dto';
import { UpdateModuleDto } from '../common/dto/update-module.dto';

@Controller('modules')
@UsePipes(new ValidationPipe({ transform: true }))
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Get()
  findAll() {
    return this.modulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulesService.findOne(id);
  }

  @Post()
  create(@Body() createModuleDto: CreateModuleDto) {
    return this.modulesService.create(createModuleDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
    return this.modulesService.update(id, updateModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulesService.remove(id);
  }
}