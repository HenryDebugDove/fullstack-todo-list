'use client';

import { useState, useEffect } from 'react';
import { todoData } from '@/data/todoData';

// 类型定义
type Priority = 'high' | 'medium' | 'low';

type Task = {
  id: string;
  title: string;
  priority: Priority;
  content: string;
  tags: string[];
  completed: boolean;
};

type Section = {
  title: string;
  tasks: Task[];
};

type TabData = {
  sections: Section[];
};

type TodoData = {
  [key: string]: TabData;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('frontend');
  const [progress, setProgress] = useState<{ total: number; completed: number; percent: number }>({
    total: 0,
    completed: 0,
    percent: 0
  });

  // 初始化和更新进度
  const updateProgress = () => {
    let total = 0;
    let completed = 0;

    // 遍历所有标签页的所有任务
    Object.values(todoData).forEach((tab) => {
      tab.sections.forEach((section) => {
        section.tasks.forEach((task) => {
          total++;
          if (task.completed) {
            completed++;
          }
        });
      });
    });

    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    setProgress({ total, completed, percent });
  };

  // 切换标签页
  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  // 切换任务完成状态
  const toggleTask = (tabId: string, sectionIndex: number, taskIndex: number) => {
    const updatedTodoData = JSON.parse(JSON.stringify(todoData)) as TodoData;
    updatedTodoData[tabId].sections[sectionIndex].tasks[taskIndex].completed = !updatedTodoData[tabId].sections[sectionIndex].tasks[taskIndex].completed;
    // 这里可以添加本地存储逻辑
    updateProgress();
  };

  // 初始化进度
  useEffect(() => {
    updateProgress();
  }, []);

  // 获取优先级对应的样式类
  const getPriorityClass = (priority: string): string => {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

  // 获取优先级对应的文本
  const getPriorityText = (priority: string): string => {
    switch (priority) {
      case 'high':
        return '高';
      case 'medium':
        return '中';
      case 'low':
        return '低';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* 头部 */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">🎯 全栈开发工程师学习路线</h1>
          <p className="text-lg opacity-90">从前端到全栈的系统学习计划 - 包含前端、后端、AI技术及面试准备</p>
        </div>

        {/* 统计信息 */}
        <div className="p-6 bg-gray-50">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">{progress.total}</h3>
              <p className="opacity-90">总任务数</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">{progress.completed}</h3>
              <p className="opacity-90">已完成</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">{progress.percent}%</h3>
              <p className="opacity-90">完成进度</p>
              <div className="mt-4 h-2 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-500 ease-in-out"
                  style={{ width: `${progress.percent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* 标签页 */}
        <div className="flex border-b border-gray-200 bg-gray-50 sticky top-0 z-10 shadow-sm">
          <button
            className={`flex-1 py-4 px-2 text-center font-semibold transition-all ${activeTab === 'frontend' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => switchTab('frontend')}
          >
            🌐 前端技术
          </button>
          <button
            className={`flex-1 py-4 px-2 text-center font-semibold transition-all ${activeTab === 'backend' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => switchTab('backend')}
          >
            🔧 后端技术
          </button>
          <button
            className={`flex-1 py-4 px-2 text-center font-semibold transition-all ${activeTab === 'ai' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => switchTab('ai')}
          >
            🤖 AI技术
          </button>
          <button
            className={`flex-1 py-4 px-2 text-center font-semibold transition-all ${activeTab === 'interview' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => switchTab('interview')}
          >
            📚 面试准备
          </button>
        </div>

        {/* 内容区域 */}
        <div className="p-6">
          {activeTab === 'frontend' && (
            <div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">📖 前端技术学习路径</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>从基础到高级，系统掌握现代前端开发技术栈</li>
                  <li>重点掌握 React/Vue 生态系统</li>
                  <li>学习工程化、性能优化、TypeScript 等核心技能</li>
                </ul>
              </div>

              {todoData.frontend.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <h2 className="bg-gray-100 px-4 py-3 border-l-4 border-indigo-600 text-xl font-bold text-gray-800 mb-4 shadow-sm">
                    {section.title}
                  </h2>
                  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                          <th className="px-4 py-3 text-left w-16">完成</th>
                          <th className="px-4 py-3 text-left w-1/4">技能点</th>
                          <th className="px-4 py-3 text-left w-16">优先级</th>
                          <th className="px-4 py-3 text-left w-1/2">学习内容</th>
                          <th className="px-4 py-3 text-left w-16">标签</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.tasks.map((task, taskIndex) => (
                          <tr 
                            key={task.id} 
                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                            data-priority={task.priority}
                          >
                            <td className="px-4 py-3">
                              <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask('frontend', sectionIndex, taskIndex)}
                                className="w-5 h-5 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </td>
                            <td className="px-4 py-3 font-medium">{task.title}</td>
                            <td className="px-4 py-3">
                              <span className={`font-bold ${getPriorityClass(task.priority)}`}>
                                {getPriorityText(task.priority)}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{task.content}</td>
                            <td className="px-4 py-3">
                              <div className="flex flex-wrap gap-1">
                                {task.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex} className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700">
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
            </div>
          )}

          {activeTab === 'backend' && (
            <div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">📖 后端技术学习路径</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>掌握至少一门后端语言和框架</li>
                  <li>深入理解数据库、缓存、消息队列等中间件</li>
                  <li>学习系统设计、微服务、DevOps 等架构知识</li>
                </ul>
              </div>

              {todoData.backend.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <h2 className="bg-gray-100 px-4 py-3 border-l-4 border-indigo-600 text-xl font-bold text-gray-800 mb-4 shadow-sm">
                    {section.title}
                  </h2>
                  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                          <th className="px-4 py-3 text-left w-16">完成</th>
                          <th className="px-4 py-3 text-left w-1/4">技能点</th>
                          <th className="px-4 py-3 text-left w-16">优先级</th>
                          <th className="px-4 py-3 text-left w-1/2">学习内容</th>
                          <th className="px-4 py-3 text-left w-16">标签</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.tasks.map((task, taskIndex) => (
                          <tr 
                            key={task.id} 
                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                            data-priority={task.priority}
                          >
                            <td className="px-4 py-3">
                              <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask('backend', sectionIndex, taskIndex)}
                                className="w-5 h-5 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </td>
                            <td className="px-4 py-3 font-medium">{task.title}</td>
                            <td className="px-4 py-3">
                              <span className={`font-bold ${getPriorityClass(task.priority)}`}>
                                {getPriorityText(task.priority)}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{task.content}</td>
                            <td className="px-4 py-3">
                              <div className="flex flex-wrap gap-1">
                                {task.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex} className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700">
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
            </div>
          )}

          {activeTab === 'ai' && (
            <div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">📖 AI技术学习路径</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>拥抱AI时代，掌握AI开发与应用技能</li>
                  <li>学习大语言模型、Prompt Engineering、AI应用开发</li>
                  <li>将AI技术融入全栈开发流程</li>
                </ul>
              </div>

              {todoData.ai.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <h2 className="bg-gray-100 px-4 py-3 border-l-4 border-indigo-600 text-xl font-bold text-gray-800 mb-4 shadow-sm">
                    {section.title}
                  </h2>
                  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                          <th className="px-4 py-3 text-left w-16">完成</th>
                          <th className="px-4 py-3 text-left w-1/4">技能点</th>
                          <th className="px-4 py-3 text-left w-16">优先级</th>
                          <th className="px-4 py-3 text-left w-1/2">学习内容</th>
                          <th className="px-4 py-3 text-left w-16">标签</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.tasks.map((task, taskIndex) => (
                          <tr 
                            key={task.id} 
                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                            data-priority={task.priority}
                          >
                            <td className="px-4 py-3">
                              <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask('ai', sectionIndex, taskIndex)}
                                className="w-5 h-5 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </td>
                            <td className="px-4 py-3 font-medium">{task.title}</td>
                            <td className="px-4 py-3">
                              <span className={`font-bold ${getPriorityClass(task.priority)}`}>
                                {getPriorityText(task.priority)}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{task.content}</td>
                            <td className="px-4 py-3">
                              <div className="flex flex-wrap gap-1">
                                {task.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex} className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700">
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
            </div>
          )}

          {activeTab === 'interview' && (
            <div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">📖 面试准备指南</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>系统梳理知识点，准备高频面试题</li>
                  <li>练习算法题，掌握数据结构与算法</li>
                  <li>准备项目经验，熟悉系统设计</li>
                </ul>
              </div>

              {todoData.interview.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <h2 className="bg-gray-100 px-4 py-3 border-l-4 border-indigo-600 text-xl font-bold text-gray-800 mb-4 shadow-sm">
                    {section.title}
                  </h2>
                  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                          <th className="px-4 py-3 text-left w-16">完成</th>
                          <th className="px-4 py-3 text-left w-1/4">面试题</th>
                          <th className="px-4 py-3 text-left w-1/2">考察要点</th>
                          <th className="px-4 py-3 text-left w-16">标签</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.tasks.map((task, taskIndex) => (
                          <tr 
                            key={task.id} 
                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                          >
                            <td className="px-4 py-3">
                              <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask('interview', sectionIndex, taskIndex)}
                                className="w-5 h-5 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </td>
                            <td className="px-4 py-3 font-medium">{task.title}</td>
                            <td className="px-4 py-3 text-gray-700">{task.content}</td>
                            <td className="px-4 py-3">
                              <div className="flex flex-wrap gap-1">
                                {task.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex} className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}