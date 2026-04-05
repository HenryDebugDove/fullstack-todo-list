'use client';

import { useEffect, useState } from 'react';
import ModuleCard from './components/ModuleCard';
import { initializeData } from '../lib/api/todo-api';
import useTodoStore from '../lib/store/todo-store';

export default function Home() {
  const { modules, setModules, setResources, setTodos, loading, setLoading, setError } = useTodoStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (initialized) return;

      setLoading(true);
      try {
        const data = await initializeData();
        setModules(data.modules);
        setResources(data.resources);
        setTodos(data.todos);
        setInitialized(true);
      } catch (error) {
        console.error('Failed to load data:', error);
        setError('加载数据失败，请检查后端服务是否运行');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [initialized, setModules, setResources, setTodos, setLoading, setError]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <header className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            全栈开发工程师学习路线
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            系统化学习前端、后端、AI 和面试准备，通过 TodoList 跟踪学习进度
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="text-center">
              <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
              <p className="text-gray-600 dark:text-gray-300">加载中...</p>
            </div>
          </div>
        ) : modules.length === 0 ? (
          <div className="rounded-xl bg-yellow-50 p-6 text-center dark:bg-yellow-900/20">
            <p className="text-yellow-800 dark:text-yellow-200">
              暂无模块数据，请确保后端服务已启动
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-8">
            {modules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        )}

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            如何使用这个学习路线
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                1
              </div>
              <span className="text-gray-700 dark:text-gray-300">
                选择你感兴趣的学习模块
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                2
              </div>
              <span className="text-gray-700 dark:text-gray-300">
                查看推荐的学习资源和视频链接
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                3
              </div>
              <span className="text-gray-700 dark:text-gray-300">
                创建待办事项跟踪学习进度
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                4
              </div>
              <span className="text-gray-700 dark:text-gray-300">
                完成学习任务并标记为已完成
              </span>
            </li>
          </ul>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>全栈开发工程师学习路线 TodoList &copy; {new Date().getFullYear()}</p>
          <p className="mt-1 text-sm">使用 Next.js, Nest.js, Prisma 和 SQLite 构建</p>
        </div>
      </footer>
    </div>
  );
}
