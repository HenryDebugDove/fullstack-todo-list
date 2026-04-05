import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { ResourcesModule } from './resources/resources.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [ModulesModule, ResourcesModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
