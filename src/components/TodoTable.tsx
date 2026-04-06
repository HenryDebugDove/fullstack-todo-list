'use client';

import { Task, Section } from '@/app/page';

type TodoTableProps = {
  sections: Section[];
  tabId: string;
  onToggleTask: (tabId: string, sectionIndex: number, taskIndex: number) => void;
  getPriorityClass: (priority: string) => string;
  getPriorityText: (priority: string) => string;
  getTagColor: (tag: string) => string;
  showPriority?: boolean;
};

export default function TodoTable({
  sections,
  tabId,
  onToggleTask,
  getPriorityClass,
  getPriorityText,
  getTagColor,
  showPriority = true,
}: TodoTableProps) {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h2 className="bg-gray-100 px-4 py-3 border-l-4 border-indigo-600 text-xl font-bold text-gray-800 mb-4 shadow-sm">
            {section.title}
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="px-4 py-3 text-left w-16">完成</th>
                  <th className="px-4 py-3 text-left w-1/4">{showPriority ? '技能点' : '面试题'}</th>
                  {showPriority && <th className="px-4 py-3 text-left w-16">优先级</th>}
                  <th className="px-4 py-3 text-left w-1/2">{showPriority ? '学习内容' : '考察要点'}</th>
                  <th className="px-4 py-3 text-left w-16">标签</th>
                </tr>
              </thead>
              <tbody>
                {section.tasks.map((task, taskIndex) => (
                  <tr
                    key={task.id}
                    className={`border-b border-gray-200 transition-colors duration-200 ${taskIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-indigo-50 ${task.completed ? 'opacity-60' : ''}`}
                    data-priority={task.priority}
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleTask(tabId, sectionIndex, taskIndex)}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </td>
                    <td className={`px-4 py-3 font-medium text-gray-900 ${task.completed ? 'line-through' : ''}`}>
                      {task.title}
                    </td>
                    {showPriority && (
                      <td className="px-4 py-3">
                        <span className={`font-bold ${getPriorityClass(task.priority)}`}>
                          {getPriorityText(task.priority)}
                        </span>
                      </td>
                    )}
                    <td className={`px-4 py-3 text-gray-700 ${task.completed ? 'line-through' : ''}`}>
                      {task.content}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {task.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}
