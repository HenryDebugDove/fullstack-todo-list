import axios from 'axios';
import type { Module, Resource, TodoItem } from '../store/todo-store';

// 后端 API 基础 URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 模块相关 API
export const moduleApi = {
  // 获取所有模块
  getAllModules: async (): Promise<Module[]> => {
    const response = await api.get('/modules');
    return response.data;
  },

  // 获取单个模块
  getModuleById: async (id: string): Promise<Module> => {
    const response = await api.get(`/modules/${id}`);
    return response.data;
  },
};

// 资源相关 API
export const resourceApi = {
  // 获取所有资源
  getAllResources: async (): Promise<Resource[]> => {
    const response = await api.get('/resources');
    return response.data;
  },

  // 获取指定模块的资源
  getResourcesByModule: async (moduleId: string): Promise<Resource[]> => {
    const response = await api.get('/resources', {
      params: { moduleId },
    });
    return response.data;
  },
};

// 待办事项相关 API
export const todoApi = {
  // 获取所有待办事项
  getAllTodos: async (params?: {
    moduleId?: string;
    completed?: boolean;
  }): Promise<TodoItem[]> => {
    const response = await api.get('/todos', { params });
    return response.data;
  },

  // 获取单个待办事项
  getTodoById: async (id: string): Promise<TodoItem> => {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  },

  // 创建待办事项
  createTodo: async (data: {
    moduleId: string;
    title: string;
    description?: string;
    priority?: 'low' | 'medium' | 'high';
    dueDate?: string;
  }): Promise<TodoItem> => {
    const response = await api.post('/todos', data);
    return response.data;
  },

  // 更新待办事项
  updateTodo: async (
    id: string,
    data: {
      title?: string;
      description?: string;
      completed?: boolean;
      priority?: 'low' | 'medium' | 'high';
      dueDate?: string;
    }
  ): Promise<TodoItem> => {
    const response = await api.patch(`/todos/${id}`, data);
    return response.data;
  },

  // 删除待办事项
  deleteTodo: async (id: string): Promise<void> => {
    await api.delete(`/todos/${id}`);
  },

  // 切换完成状态
  toggleComplete: async (id: string, completed: boolean): Promise<TodoItem> => {
    const response = await api.patch(`/todos/${id}/complete`, { completed });
    return response.data;
  },
};

// 初始化数据加载
export const initializeData = async () => {
  try {
    const [modules, resources, todos] = await Promise.all([
      moduleApi.getAllModules(),
      resourceApi.getAllResources(),
      todoApi.getAllTodos(),
    ]);
    return { modules, resources, todos };
  } catch (error) {
    console.error('初始化数据失败:', error);
    throw error;
  }
};

export default api;