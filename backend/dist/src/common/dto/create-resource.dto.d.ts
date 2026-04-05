import { ResourceType } from '@prisma/client';
export declare class CreateResourceDto {
    moduleId: string;
    title: string;
    url: string;
    type: ResourceType;
    description: string;
    duration?: string;
    order?: number;
}
