import { ModulesService } from './modules.service';
import { CreateModuleDto } from '../common/dto/create-module.dto';
import { UpdateModuleDto } from '../common/dto/update-module.dto';
export declare class ModulesController {
    private readonly modulesService;
    constructor(modulesService: ModulesService);
    findAll(): Promise<({
        resources: {
            duration: string | null;
            title: string;
            description: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            moduleId: string;
            url: string;
            type: import("@prisma/client").$Enums.ResourceType;
        }[];
        todos: {
            dueDate: Date | null;
            title: string;
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            completed: boolean;
            moduleId: string;
            priority: import("@prisma/client").$Enums.Priority | null;
        }[];
    } & {
        name: string;
        title: string;
        description: string;
        icon: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        resources: {
            duration: string | null;
            title: string;
            description: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            moduleId: string;
            url: string;
            type: import("@prisma/client").$Enums.ResourceType;
        }[];
        todos: {
            dueDate: Date | null;
            title: string;
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            completed: boolean;
            moduleId: string;
            priority: import("@prisma/client").$Enums.Priority | null;
        }[];
    } & {
        name: string;
        title: string;
        description: string;
        icon: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createModuleDto: CreateModuleDto): Promise<{
        name: string;
        title: string;
        description: string;
        icon: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateModuleDto: UpdateModuleDto): Promise<{
        name: string;
        title: string;
        description: string;
        icon: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        title: string;
        description: string;
        icon: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
