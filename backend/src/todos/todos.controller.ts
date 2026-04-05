import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from '../common/dto/create-todo.dto';
import { UpdateTodoDto } from '../common/dto/update-todo.dto';

@Controller('todos')
@UsePipes(new ValidationPipe({ transform: true }))
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(
    @Query('moduleId') moduleId?: string,
    @Query('completed') completed?: string,
  ) {
    const completedBool = completed === 'true' ? true : completed === 'false' ? false : undefined;
    return this.todosService.findAll(moduleId, completedBool);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(id);
  }

  @Patch(':id/complete')
  toggleComplete(
    @Param('id') id: string,
    @Body('completed') completed: boolean,
  ) {
    return this.todosService.toggleComplete(id, completed);
  }
}