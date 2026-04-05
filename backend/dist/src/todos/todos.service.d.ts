import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from '../common/dto/create-todo.dto';
import { UpdateTodoDto } from '../common/dto/update-todo.dto';
export declare class TodosService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(moduleId?: string, completed?: boolean): Promise<{
        dueDate: Date | null;
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        moduleId: string;
        priority: import("@prisma/client").$Enums.Priority | null;
    }[]>;
    findOne(id: string): Promise<{
        dueDate: Date | null;
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        moduleId: string;
        priority: import("@prisma/client").$Enums.Priority | null;
    }>;
    create(createTodoDto: CreateTodoDto): Promise<{
        dueDate: Date | null;
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        moduleId: string;
        priority: import("@prisma/client").$Enums.Priority | null;
    }>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<{
        dueDate: Date | null;
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        moduleId: string;
        priority: import("@prisma/client").$Enums.Priority | null;
    }>;
    remove(id: string): Promise<{
        dueDate: Date | null;
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        moduleId: string;
        priority: import("@prisma/client").$Enums.Priority | null;
    }>;
    toggleComplete(id: string, completed: boolean): Promise<{
        dueDate: Date | null;
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        moduleId: string;
        priority: import("@prisma/client").$Enums.Priority | null;
    }>;
}
