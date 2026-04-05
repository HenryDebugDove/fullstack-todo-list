import { useState } from 'react';
import { TodoItem as TodoItemType } from '../../lib/store/todo-store';
import { todoApi } from '../../lib/api/todo-api';
import TodoEditForm from './TodoEditForm';

interface TodoItemProps {
  todo: TodoItemType;
  isEditing: boolean;
  isDeleting: boolean;
  onToggleComplete: (completed: boolean) => void;
  onDelete: () => void;
  onEdit: () => void;
  onEditComplete: () => void;
  onEditCancel: () => void;
}

export default function TodoItemComponent({
  todo,
  isEditing,
  isDeleting,
  onToggleComplete,
  onDelete,
  onEdit,
  onEditComplete,
  onEditCancel,
}: TodoItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const priorityColors = {
    high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  };

  const priorityText = {
    high: '高优先级',
    medium: '中优先级',
    low: '低优先级',
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (isEditing) {
    return (
      <TodoEditForm
        todo={todo}
        onSuccess={onEditComplete}
        onCancel={onEditCancel}
      />
    );
  }

  return (
    <div
      className={`rounded-xl border bg-white p-4 transition-all dark:bg-gray-800 ${
        todo.completed
          ? 'border-green-200 dark:border-green-800'
          : 'border-gray-200 dark:border-gray-700'
      } ${isDeleting ? 'opacity-50' : ''}`}
    >
      <div className="flex items-start gap-4">
        {/* 复选框 */}
        <button
          onClick={() => onToggleComplete(!todo.completed)}
          className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors ${
            todo.completed
              ? 'border-green-500 bg-green-500'
              : 'border-gray-300 hover:border-blue-500 dark:border-gray-600'
          }`}
          aria-label={todo.completed ? '标记为未完成' : '标记为已完成'}
        >
          {todo.completed && (
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        {/* 内容 */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h4
                className={`font-medium ${
                  todo.completed
                    ? 'text-gray-500 line-through dark:text-gray-500'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                {todo.title}
              </h4>
              {todo.description && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-1 text-left text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  {isExpanded
                    ? todo.description
                    : `${todo.description.substring(0, 60)}...`}
                  <span className="ml-2 text-blue-600 dark:text-blue-400">
                    {isExpanded ? '收起' : '展开'}
                  </span>
                </button>
              )}
            </div>
            <div className="ml-4 flex items-center gap-2">
              {todo.priority && (
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    priorityColors[todo.priority]
                  }`}
                >
                  {priorityText[todo.priority]}
                </span>
              )}
              {todo.dueDate && (
                <span className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                  📅 {formatDate(todo.dueDate)}
                </span>
              )}
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              创建于 {formatDate(todo.createdAt) || '未知日期'}
            </div>
            <div className="flex gap-2">
              <button
                onClick={onEdit}
                className="rounded-lg px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30"
              >
                编辑
              </button>
              <button
                onClick={onDelete}
                disabled={isDeleting}
                className="rounded-lg px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30"
              >
                {isDeleting ? '删除中...' : '删除'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}