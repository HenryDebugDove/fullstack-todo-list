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
exports.ModulesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ModulesService = class ModulesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.module.findMany({
            include: {
                resources: {
                    orderBy: { order: 'asc' },
                    take: 5,
                },
                todos: {
                    where: { completed: false },
                    take: 5,
                },
            },
        });
    }
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Module with ID ${id} not found`);
        }
        return module;
    }
    async create(createModuleDto) {
        return this.prisma.module.create({
            data: createModuleDto,
        });
    }
    async update(id, updateModuleDto) {
        try {
            return await this.prisma.module.update({
                where: { id },
                data: updateModuleDto,
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Module with ID ${id} not found`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            return await this.prisma.module.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Module with ID ${id} not found`);
            }
            throw error;
        }
    }
};
exports.ModulesService = ModulesService;
exports.ModulesService = ModulesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ModulesService);
//# sourceMappingURL=modules.service.js.map