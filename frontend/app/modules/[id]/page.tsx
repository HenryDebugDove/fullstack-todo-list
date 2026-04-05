'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ResourceList from '../../components/ResourceList';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import useTodoStore from '../../../lib/store/todo-store';
import { moduleApi, resourceApi, todoApi } from '../../../lib/api/todo-api';

export default function ModuleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = params.id as string;

  const {
    getModuleById,
    getResourcesByModule,
    getTodosByModule,
    modules,
    setResources,
    setTodos,
    loading,
    setLoading,
    setError
  } = useTodoStore();

  const [showTodoForm, setShowTodoForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'resources' | 'todos'>('resources');

  const module = getModuleById(moduleId);
  const resources = getResourcesByModule(moduleId);
  const todos = getTodosByModule(moduleId);

  useEffect(() => {
    const fetchModuleData = async () => {
      if (!moduleId) return;

      setLoading(true);
      try {
        // 如果 store 中没有模块数据，则重新加载
        if (modules.length === 0) {
          const allModules = await moduleApi.getAllModules();
          useTodoStore.getState().setModules(allModules);
        }

        // 加载该模块的资源和待办事项
        const [moduleResources, moduleTodos] = await Promise.all([
          resourceApi.getResourcesByModule(moduleId),
          todoApi.getAllTodos({ moduleId }),
        ]);

        setResources(moduleResources);
        setTodos(moduleTodos);
      } catch (error) {
        console.error('Failed to load module data:', error);
        setError('加载模块数据失败');
      } finally {
        setLoading(false);
      }
    };

    fetchModuleData();
  }, [moduleId, setResources, setTodos, setLoading, setError, modules.length]);

  const handleTodoCreated = async () => {
    // 重新加载待办事项
    const updatedTodos = await todoApi.getAllTodos({ moduleId });
    setTodos(updatedTodos);
    setShowTodoForm(false);
  };

  const handleTodoUpdated = async () => {
    const updatedTodos = await todoApi.getAllTodos({ moduleId });
    setTodos(updatedTodos);
  };

  const handleTodoDeleted = async () => {
    const updatedTodos = await todoApi.getAllTodos({ moduleId });
    setTodos(updatedTodos);
  };

  if (loading && !module) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="text-gray-600 dark:text-gray-300">加载中...</p>
        </div>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            模块不存在
          </h2>
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-4 flex items-center gap-4">
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <svg
                className="h-5 w-5 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {module.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {module.description}
              </p>
            </div>
            <div className="text-4xl">{module.icon}</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 标签切换 */}
        <div className="mb-8">
          <div className="flex space-x-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex-1 rounded-lg py-3 text-center font-medium transition-colors ${
                activeTab === 'resources'
                  ? 'bg-white text-blue-600 shadow dark:bg-gray-700 dark:text-blue-400'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              学习资源
            </button>
            <button
              onClick={() => setActiveTab('todos')}
              className={`flex-1 rounded-lg py-3 text-center font-medium transition-colors ${
                activeTab === 'todos'
                  ? 'bg-white text-blue-600 shadow dark:bg-gray-700 dark:text-blue-400'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              待办事项 ({todos.length})
            </button>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {activeTab === 'resources' ? (
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    推荐学习资源
                  </h2>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    {resources.length} 个资源
                  </span>
                </div>
                <ResourceList resources={resources} />
              </div>
            ) : (
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    学习任务
                  </h2>
                  <button
                    onClick={() => setShowTodoForm(true)}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                  >
                    + 新建任务
                  </button>
                </div>
                <TodoList
                  todos={todos}
                  onTodoUpdated={handleTodoUpdated}
                  onTodoDeleted={handleTodoDeleted}
                />
              </div>
            )}
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 统计数据 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                学习进度
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      任务完成率
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {todos.length > 0
                        ? Math.round(
                            (todos.filter((t) => t.completed).length /
                              todos.length) *
                              100
                          )
                        : 0}
                      %
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-full rounded-full bg-green-500 transition-all duration-300"
                      style={{
                        width: `${
                          todos.length > 0
                            ? (todos.filter((t) => t.completed).length /
                                todos.length) *
                              100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/30">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {todos.length}
                    </div>
                    <div className="text-sm text-blue-800 dark:text-blue-300">
                      总任务数
                    </div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/30">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {todos.filter((t) => t.completed).length}
                    </div>
                    <div className="text-sm text-green-800 dark:text-green-300">
                      已完成
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 快速操作 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                快速操作
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowTodoForm(true)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  新建学习任务
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  返回首页
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 新建待办事项表单模态框 */}
      {showTodoForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                新建学习任务
              </h3>
              <button
                onClick={() => setShowTodoForm(false)}
                className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <TodoForm
              moduleId={moduleId}
              onSuccess={handleTodoCreated}
              onCancel={() => setShowTodoForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}