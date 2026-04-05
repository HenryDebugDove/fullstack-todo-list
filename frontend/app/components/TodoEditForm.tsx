import { useState } from 'react';
import { TodoItem } from '../../lib/store/todo-store';
import { todoApi } from '../../lib/api/todo-api';

interface TodoEditFormProps {
  todo: TodoItem;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function TodoEditForm({
  todo,
  onSuccess,
  onCancel,
}: TodoEditFormProps) {
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description || '',
    priority: todo.priority || 'medium',
    dueDate: todo.dueDate ? todo.dueDate.substring(0, 10) : '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError('标题不能为空');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await todoApi.updateTodo(todo.id, {
        title: formData.title,
        description: formData.description || undefined,
        priority: formData.priority as 'low' | 'medium' | 'high',
        dueDate: formData.dueDate || undefined,
      });
      onSuccess();
    } catch (err) {
      console.error('Failed to update todo:', err);
      setError('更新任务失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
          标题 *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="输入任务标题"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
          描述
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="输入任务描述（可选）"
          disabled={isSubmitting}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
            优先级
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            disabled={isSubmitting}
          >
            <option value="low">低优先级</option>
            <option value="medium">中优先级</option>
            <option value="high">高优先级</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
            截止日期
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            disabled={isSubmitting}
          />
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-900/30 dark:text-red-300">
          {error}
        </div>
      )}

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          disabled={isSubmitting}
        >
          取消
        </button>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? '保存中...' : '保存更改'}
        </button>
      </div>
    </form>
  );
}