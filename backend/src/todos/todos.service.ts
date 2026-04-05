import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from '../common/dto/create-todo.dto';
import { UpdateTodoDto } from '../common/dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async findAll(moduleId?: string, completed?: boolean) {
    const where: any = {};

    if (moduleId) {
      where.moduleId = moduleId;
    }

    if (completed !== undefined) {
      where.completed = completed;
    }

    return this.prisma.todoItem.findMany({
      where,
      orderBy: [
        { completed: 'asc' },
        { priority: 'desc' },
        { dueDate: 'asc' },
        { createdAt: 'desc' },
      ],
    });
  }

  async findOne(id: string) {
    const todo = await this.prisma.todoItem.findUnique({
      where: { id },
    });

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    return todo;
  }

  async create(createTodoDto: CreateTodoDto) {
    return this.prisma.todoItem.create({
      data: createTodoDto,
    });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    try {
      return await this.prisma.todoItem.update({
        where: { id },
        data: updateTodoDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Todo with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.todoItem.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Todo with ID ${id} not found`);
      }
      throw error;
    }
  }

  async toggleComplete(id: string, completed: boolean) {
    try {
      return await this.prisma.todoItem.update({
        where: { id },
        data: { completed },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Todo with ID ${id} not found`);
      }
      throw error;
    }
  }
}