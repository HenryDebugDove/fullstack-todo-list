"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('开始初始化数据库数据...');
    await prisma.todoItem.deleteMany();
    await prisma.resource.deleteMany();
    await prisma.module.deleteMany();
    const modules = await prisma.module.createMany({
        data: [
            {
                id: 'frontend',
                name: 'frontend',
                title: '前端开发',
                description: '学习 React, Next.js, Zustand, TailwindCSS 等前端技术',
                icon: '💻',
            },
            {
                id: 'backend',
                name: 'backend',
                title: '后端开发',
                description: '掌握 Nest.js, Prisma, SQLite 等后端技术栈',
                icon: '⚙️',
            },
            {
                id: 'ai',
                name: 'ai',
                title: '人工智能',
                description: '了解 AI 基础、机器学习、深度学习等相关知识',
                icon: '🤖',
            },
            {
                id: 'interview',
                name: 'interview',
                title: '面试准备',
                description: '准备技术面试、行为面试、系统设计等',
                icon: '💼',
            },
        ],
    });
    console.log(`创建了 ${modules.count} 个模块`);
    await prisma.resource.createMany({
        data: [
            {
                moduleId: 'frontend',
                title: 'React 官方文档',
                url: 'https://react.dev',
                type: client_1.ResourceType.document,
                description: 'React 官方文档，学习 React 基础概念和高级特性',
                order: 1,
            },
            {
                moduleId: 'frontend',
                title: 'Next.js 入门教程',
                url: 'https://nextjs.org/learn',
                type: client_1.ResourceType.video,
                description: 'Next.js 官方学习教程，从入门到精通',
                duration: '2小时',
                order: 2,
            },
            {
                moduleId: 'frontend',
                title: 'Zustand 状态管理',
                url: 'https://zustand-demo.pmnd.rs',
                type: client_1.ResourceType.document,
                description: 'Zustand 轻量级状态管理库使用指南',
                order: 3,
            },
            {
                moduleId: 'frontend',
                title: 'TailwindCSS 快速上手',
                url: 'https://tailwindcss.com/docs',
                type: client_1.ResourceType.document,
                description: 'TailwindCSS 官方文档，学习实用工具类',
                order: 4,
            },
        ],
    });
    await prisma.resource.createMany({
        data: [
            {
                moduleId: 'backend',
                title: 'Nest.js 官方文档',
                url: 'https://docs.nestjs.com',
                type: client_1.ResourceType.document,
                description: 'Nest.js 渐进式 Node.js 框架文档',
                order: 1,
            },
            {
                moduleId: 'backend',
                title: 'Prisma 快速入门',
                url: 'https://www.prisma.io/docs/getting-started',
                type: client_1.ResourceType.video,
                description: 'Prisma ORM 快速入门教程',
                duration: '1.5小时',
                order: 2,
            },
            {
                moduleId: 'backend',
                title: 'SQLite 教程',
                url: 'https://www.sqlitetutorial.net',
                type: client_1.ResourceType.document,
                description: 'SQLite 数据库教程，学习 SQL 基础',
                order: 3,
            },
        ],
    });
    await prisma.resource.createMany({
        data: [
            {
                moduleId: 'ai',
                title: '机器学习基础',
                url: 'https://www.coursera.org/learn/machine-learning',
                type: client_1.ResourceType.video,
                description: '吴恩达机器学习课程，AI 入门必备',
                duration: '56小时',
                order: 1,
            },
            {
                moduleId: 'ai',
                title: '深度学习实战',
                url: 'https://pytorch.org/tutorials',
                type: client_1.ResourceType.document,
                description: 'PyTorch 官方教程，深度学习实战',
                order: 2,
            },
        ],
    });
    await prisma.resource.createMany({
        data: [
            {
                moduleId: 'interview',
                title: 'LeetCode 刷题指南',
                url: 'https://leetcode.com',
                type: client_1.ResourceType.document,
                description: '算法面试刷题平台，提升编程能力',
                order: 1,
            },
            {
                moduleId: 'interview',
                title: '系统设计面试',
                url: 'https://github.com/donnemartin/system-design-primer',
                type: client_1.ResourceType.document,
                description: '系统设计面试准备，大型系统设计原理',
                order: 2,
            },
        ],
    });
    console.log('资源数据初始化完成');
    await prisma.todoItem.createMany({
        data: [
            {
                moduleId: 'frontend',
                title: '学习 React Hooks',
                description: '掌握 useState, useEffect, useContext 等常用 Hooks',
                completed: true,
                priority: client_1.Priority.high,
            },
            {
                moduleId: 'frontend',
                title: '完成 Next.js 项目',
                description: '使用 Next.js 构建一个完整的全栈应用',
                completed: false,
                priority: client_1.Priority.medium,
                dueDate: new Date('2026-04-15'),
            },
            {
                moduleId: 'backend',
                title: '学习 Nest.js 中间件',
                description: '理解并实现自定义中间件',
                completed: false,
                priority: client_1.Priority.medium,
            },
            {
                moduleId: 'backend',
                title: '配置 Prisma 数据库',
                description: '设置 Prisma 连接 SQLite 数据库',
                completed: true,
                priority: client_1.Priority.low,
            },
            {
                moduleId: 'ai',
                title: '完成机器学习课程',
                description: '学习监督学习和非监督学习算法',
                completed: false,
                priority: client_1.Priority.high,
                dueDate: new Date('2026-04-20'),
            },
            {
                moduleId: 'interview',
                title: '刷 50 道算法题',
                description: '每天刷 5 道 LeetCode 题目',
                completed: false,
                priority: client_1.Priority.high,
            },
        ],
    });
    console.log('待办事项数据初始化完成');
    console.log('数据库初始化完成！');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map