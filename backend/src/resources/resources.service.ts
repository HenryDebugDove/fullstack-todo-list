import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResourceDto } from '../common/dto/create-resource.dto';
import { UpdateResourceDto } from '../common/dto/update-resource.dto';

@Injectable()
export class ResourcesService {
  constructor(private prisma: PrismaService) {}

  async findAll(moduleId?: string) {
    const where = moduleId ? { moduleId } : {};
    return this.prisma.resource.findMany({
      where,
      orderBy: { order: 'asc' },
    });
  }

  async findOne(id: string) {
    const resource = await this.prisma.resource.findUnique({
      where: { id },
    });

    if (!resource) {
      throw new NotFoundException(`Resource with ID ${id} not found`);
    }

    return resource;
  }

  async create(createResourceDto: CreateResourceDto) {
    return this.prisma.resource.create({
      data: createResourceDto,
    });
  }

  async update(id: string, updateResourceDto: UpdateResourceDto) {
    try {
      return await this.prisma.resource.update({
        where: { id },
        data: updateResourceDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Resource with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.resource.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Resource with ID ${id} not found`);
      }
      throw error;
    }
  }
}