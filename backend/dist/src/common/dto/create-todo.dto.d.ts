import { Priority } from '@prisma/client';
export declare class CreateTodoDto {
    moduleId: string;
    title: string;
    description?: string;
    completed?: boolean;
    priority?: Priority;
    dueDate?: string;
}
