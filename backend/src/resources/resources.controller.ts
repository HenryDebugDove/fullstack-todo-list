import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { CreateResourceDto } from '../common/dto/create-resource.dto';
import { UpdateResourceDto } from '../common/dto/update-resource.dto';

@Controller('resources')
@UsePipes(new ValidationPipe({ transform: true }))
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get()
  findAll(@Query('moduleId') moduleId?: string) {
    return this.resourcesService.findAll(moduleId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourcesService.findOne(id);
  }

  @Post()
  create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourcesService.create(createResourceDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourceDto: UpdateResourceDto) {
    return this.resourcesService.update(id, updateResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourcesService.remove(id);
  }
}