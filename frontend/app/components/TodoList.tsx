import { useState } from 'react';
import { TodoItem } from '../../lib/store/todo-store';
import { todoApi } from '../../lib/api/todo-api';
import TodoItemComponent from './TodoItem';

interface TodoListProps {
  todos: TodoItem[];
  onTodoUpdated: () => void;
  onTodoDeleted: () => void;
}

export default function TodoList({
  todos,
  onTodoUpdated,
  onTodoDeleted,
}: TodoListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleToggleComplete = async (id: string, completed: boolean) => {
    try {
      await todoApi.toggleComplete(id, completed);
      onTodoUpdated();
    } catch (error) {
      console.error('Failed to toggle todo:', error);
      alert('更新任务状态失败');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个任务吗？')) return;

    setDeletingId(id);
    try {
      await todoApi.deleteTodo(id);
      onTodoDeleted();
    } catch (error) {
      console.error('Failed to delete todo:', error);
      alert('删除任务失败');
    } finally {
      setDeletingId(null);
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleEditComplete = () => {
    setEditingId(null);
    onTodoUpdated();
  };

  const handleEditCancel = () => {
    setEditingId(null);
  };

  if (todos.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center dark:border-gray-700">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
          暂无学习任务
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          创建一个新的学习任务来跟踪你的进度
        </p>
      </div>
    );
  }

  // 分组：未完成和已完成
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="space-y-8">
      {/* 未完成的任务 */}
      {incompleteTodos.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            进行中 ({incompleteTodos.length})
          </h3>
          <div className="space-y-3">
            {incompleteTodos.map((todo) => (
              <TodoItemComponent
                key={todo.id}
                todo={todo}
                isEditing={editingId === todo.id}
                isDeleting={deletingId === todo.id}
                onToggleComplete={(completed) =>
                  handleToggleComplete(todo.id, completed)
                }
                onDelete={() => handleDelete(todo.id)}
                onEdit={() => handleEdit(todo.id)}
                onEditComplete={handleEditComplete}
                onEditCancel={handleEditCancel}
              />
            ))}
          </div>
        </div>
      )}

      {/* 已完成的任务 */}
      {completedTodos.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            已完成 ({completedTodos.length})
          </h3>
          <div className="space-y-3">
            {completedTodos.map((todo) => (
              <TodoItemComponent
                key={todo.id}
                todo={todo}
                isEditing={editingId === todo.id}
                isDeleting={deletingId === todo.id}
                onToggleComplete={(completed) =>
                  handleToggleComplete(todo.id, completed)
                }
                onDelete={() => handleDelete(todo.id)}
                onEdit={() => handleEdit(todo.id)}
                onEditComplete={handleEditComplete}
                onEditCancel={handleEditCancel}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}