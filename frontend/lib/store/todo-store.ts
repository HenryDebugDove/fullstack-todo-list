import { create } from 'zustand';

export type Priority = 'low' | 'medium' | 'high';
export type ResourceType = 'video' | 'document';

export interface Module {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface Resource {
  id: string;
  moduleId: string;
  title: string;
  url: string;
  type: ResourceType;
  description: string;
  duration?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface TodoItem {
  id: string;
  moduleId: string;
  title: string;
  description?: string;
  completed: boolean;
  priority?: Priority;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoStore {
  // State
  modules: Module[];
  resources: Resource[];
  todos: TodoItem[];
  loading: boolean;
  error: string | null;

  // Actions
  setModules: (modules: Module[]) => void;
  setResources: (resources: Resource[]) => void;
  setTodos: (todos: TodoItem[]) => void;
  addTodo: (todo: TodoItem) => void;
  updateTodo: (id: string, updates: Partial<TodoItem>) => void;
  deleteTodo: (id: string) => void;
  toggleTodoComplete: (id: string, completed: boolean) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  // Computed
  getTodosByModule: (moduleId: string) => TodoItem[];
  getResourcesByModule: (moduleId: string) => Resource[];
  getModuleById: (moduleId: string) => Module | undefined;
}

const useTodoStore = create<TodoStore>((set, get) => ({
  // Initial state
  modules: [],
  resources: [],
  todos: [],
  loading: false,
  error: null,

  // Actions
  setModules: (modules) => set({ modules }),
  setResources: (resources) => set({ resources }),
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (id, updates) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updates } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodoComplete: (id, completed) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      ),
    })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  // Computed selectors
  getTodosByModule: (moduleId) => {
    const { todos } = get();
    return todos.filter((todo) => todo.moduleId === moduleId);
  },
  getResourcesByModule: (moduleId) => {
    const { resources } = get();
    return resources
      .filter((resource) => resource.moduleId === moduleId)
      .sort((a, b) => a.order - b.order);
  },
  getModuleById: (moduleId) => {
    const { modules } = get();
    return modules.find((module) => module.id === moduleId);
  },
}));

export default useTodoStore;