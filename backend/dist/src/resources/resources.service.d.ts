import { PrismaService } from '../prisma/prisma.service';
import { CreateResourceDto } from '../common/dto/create-resource.dto';
import { UpdateResourceDto } from '../common/dto/update-resource.dto';
export declare class ResourcesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(moduleId?: string): Promise<{
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
    }[]>;
    findOne(id: string): Promise<{
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
    }>;
    create(createResourceDto: CreateResourceDto): Promise<{
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
    }>;
    update(id: string, updateResourceDto: UpdateResourceDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
