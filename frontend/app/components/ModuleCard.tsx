import Link from 'next/link';
import { Module } from '../../lib/store/todo-store';

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link
      href={`/modules/${module.id}`}
      className="group block transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 text-2xl dark:from-blue-900 dark:to-blue-800">
                {module.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {module.title}
              </h2>
            </div>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {module.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            点击查看详情
          </span>
          <div className="rounded-full bg-gray-100 p-2 transition-colors group-hover:bg-blue-100 dark:bg-gray-700 dark:group-hover:bg-blue-900">
            <svg
              className="h-5 w-5 text-gray-600 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}