import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateModuleDto } from '../common/dto/create-module.dto';
import { UpdateModuleDto } from '../common/dto/update-module.dto';

@Injectable()
export class ModulesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.module.findMany({
      include: {
        resources: {
          orderBy: { order: 'asc' },
          take: 5, // 只取前5个资源，避免数据过大
        },
        todos: {
          where: { completed: false },
          take: 5, // 只取未完成的待办事项
        },
      },
    });
  }

  async findOne(id: string) {
    const module = await this.prisma.module.findUnique({
      where: { id },
      include: {
        resources: {
          orderBy: { order: 'asc' },
        },
        todos: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!module) {
      throw new NotFoundException(`Module with ID ${id} not found`);
    }

    return module;
  }

  async create(createModuleDto: CreateModuleDto) {
    return this.prisma.module.create({
      data: createModuleDto,
    });
  }

  async update(id: string, updateModuleDto: UpdateModuleDto) {
    try {
      return await this.prisma.module.update({
        where: { id },
        data: updateModuleDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Module with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.module.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Module with ID ${id} not found`);
      }
      throw error;
    }
  }
}