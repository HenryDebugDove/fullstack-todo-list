"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ResourcesService = class ResourcesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(moduleId) {
        const where = moduleId ? { moduleId } : {};
        return this.prisma.resource.findMany({
            where,
            orderBy: { order: 'asc' },
        });
    }
    async findOne(id) {
        const resource = await this.prisma.resource.findUnique({
            where: { id },
        });
        if (!resource) {
            throw new common_1.NotFoundException(`Resource with ID ${id} not found`);
        }
        return resource;
    }
    async create(createResourceDto) {
        return this.prisma.resource.create({
            data: createResourceDto,
        });
    }
    async update(id, updateResourceDto) {
        try {
            return await this.prisma.resource.update({
                where: { id },
                data: updateResourceDto,
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Resource with ID ${id} not found`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            return await this.prisma.resource.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Resource with ID ${id} not found`);
            }
            throw error;
        }
    }
};
exports.ResourcesService = ResourcesService;
exports.ResourcesService = ResourcesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ResourcesService);
//# sourceMappingURL=resources.service.js.map