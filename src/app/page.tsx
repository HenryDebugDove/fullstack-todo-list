'use client';

import { useState, useEffect } from 'react';
import TodoTable from '@/components/TodoTable';

// 类型定义
type Priority = 'high' | 'medium' | 'low';

export type Task = {
  id: string;
  title: string;
  priority: string;
  content: string;
  tags: string[];
  completed: boolean;
};

export type Section = {
  title: string;
  tasks: Task[];
};

type TabData = {
  sections: Section[];
};

type TodoData = {
  [key: string]: TabData;
};

// 从localStorage加载完成状态
const loadCompletedFromStorage = (): { [key: string]: boolean } => {
  if (typeof window === 'undefined') return {};
  
  const saved = localStorage.getItem('todoCompleted');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return {};
    }
  }
  return {};
};

// 保存完成状态到localStorage
const saveCompletedToStorage = (completed: { [key: string]: boolean }) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('todoCompleted', JSON.stringify(completed));
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('frontend');
  const [todoData, setTodoData] = useState<TodoData | null>(null);
  const [completedTasks, setCompletedTasks] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<{ total: number; completed: number; percent: number }>({
    total: 0,
    completed: 0,
    percent: 0
  });

  // 从API获取todolist数据
  const fetchTodoData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/todos');
      const result = await response.json();
      
      if (result.success) {
        setTodoData(result.data);
        setError(null);
      } else {
        setError(result.error || '获取数据失败');
      }
    } catch (err) {
      setError('网络错误，请稍后重试');
      console.error('获取todolist数据失败:', err);
    } finally {
      setLoading(false);
    }
  };

  // 初始化：从API获取数据，从localStorage加载完成状态
  useEffect(() => {
    fetchTodoData();
    const savedCompleted = loadCompletedFromStorage();
    setCompletedTasks(savedCompleted);
  }, []);

  // 更新进度
  const updateProgress = (data: TodoData | null, completed: { [key: string]: boolean }) => {
    if (!data) return;
    
    let total = 0;
    let completedCount = 0;

    Object.values(data).forEach((tab) => {
      tab.sections.forEach((section) => {
        section.tasks.forEach((task) => {
          total++;
          if (completed[task.id]) {
            completedCount++;
          }
        });
      });
    });

    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    setProgress({ total, completed: completedCount, percent });
  };

  // 当数据或完成状态变化时更新进度
  useEffect(() => {
    updateProgress(todoData, completedTasks);
  }, [todoData, completedTasks]);

  // 切换标签页
  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  // 切换任务完成状态
  const toggleTask = (tabId: string, sectionIndex: number, taskIndex: number) => {
    if (!todoData) return;
    
    const task = todoData[tabId]?.sections[sectionIndex]?.tasks[taskIndex];
    if (!task) return;

    setCompletedTasks((prev) => {
      const newCompleted = {
        ...prev,
        [task.id]: !prev[task.id]
      };
      saveCompletedToStorage(newCompleted);
      return newCompleted;
    });
  };

  // 获取优先级对应的样式类
  const getPriorityClass = (priority: string): string => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
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

  // 获取标签对应的颜色
  const getTagColor = (tag: string): string => {
    const tagColors: { [key: string]: string } = {
      '基础': 'bg-blue-100 text-blue-800',
      '必学': 'bg-red-100 text-red-800',
      '核心': 'bg-purple-100 text-purple-800',
      '必备': 'bg-green-100 text-green-800',
      '现代': 'bg-cyan-100 text-cyan-800',
      '主流': 'bg-indigo-100 text-indigo-800',
      '推荐': 'bg-teal-100 text-teal-800',
      '框架': 'bg-orange-100 text-orange-800',
      '重要': 'bg-yellow-100 text-yellow-800',
      '新兴': 'bg-pink-100 text-pink-800',
      '规范': 'bg-gray-100 text-gray-800',
      '质量': 'bg-emerald-100 text-emerald-800',
      '工程化': 'bg-slate-100 text-slate-800',
      '进阶': 'bg-violet-100 text-violet-800',
      '面试': 'bg-rose-100 text-rose-800',
      '扩展': 'bg-amber-100 text-amber-800',
      '高级': 'bg-fuchsia-100 text-fuchsia-800',
      '合规': 'bg-lime-100 text-lime-800',
      'JS全栈': 'bg-sky-100 text-sky-800',
      'AI友好': 'bg-violet-100 text-violet-800',
      '云原生': 'bg-cyan-100 text-cyan-800',
      '热门': 'bg-orange-100 text-orange-800',
      '企业级': 'bg-blue-100 text-blue-800',
      '高性能': 'bg-red-100 text-red-800',
      'NoSQL': 'bg-green-100 text-green-800',
      '缓存': 'bg-yellow-100 text-yellow-800',
      '搜索': 'bg-indigo-100 text-indigo-800',
      '日志': 'bg-gray-100 text-gray-800',
      '容器化': 'bg-blue-100 text-blue-800',
      '编排': 'bg-purple-100 text-purple-800',
      '运维': 'bg-teal-100 text-teal-800',
      '监控': 'bg-orange-100 text-orange-800',
      '实用': 'bg-green-100 text-green-800',
      '前沿': 'bg-pink-100 text-pink-800',
      'RAG': 'bg-cyan-100 text-cyan-800',
      '本地': 'bg-gray-100 text-gray-800',
      '开源': 'bg-blue-100 text-blue-800',
      '效率': 'bg-green-100 text-green-800',
      '伦理': 'bg-purple-100 text-purple-800',
      'JS核心': 'bg-yellow-100 text-yellow-800',
      '高频': 'bg-red-100 text-red-800',
      '异步': 'bg-blue-100 text-blue-800',
      '浏览器': 'bg-green-100 text-green-800',
      '网络': 'bg-indigo-100 text-indigo-800',
      '安全': 'bg-red-100 text-red-800',
      'TS': 'bg-blue-100 text-blue-800',
      '数据库': 'bg-green-100 text-green-800',
      '分布式': 'bg-purple-100 text-purple-800',
      '中间件': 'bg-orange-100 text-orange-800',
      'Java': 'bg-red-100 text-red-800',
      'LeetCode': 'bg-orange-100 text-orange-800',
      '难点': 'bg-red-100 text-red-800',
      '经典': 'bg-blue-100 text-blue-800',
    };
    return tagColors[tag] || 'bg-gray-100 text-gray-700';
  };

  // 标签页配置
  const tabs = [
    { id: 'frontend', label: '🌐 前端技术', title: '📖 前端技术学习路径', description: [
      '从基础到高级，系统掌握现代前端开发技术栈',
      '重点掌握 React/Vue 生态系统',
      '学习工程化、性能优化、TypeScript 等核心技能'
    ]},
    { id: 'backend', label: '🔧 后端技术', title: '📖 后端技术学习路径', description: [
      '掌握至少一门后端语言和框架',
      '深入理解数据库、缓存、消息队列等中间件',
      '学习系统设计、微服务、DevOps 等架构知识'
    ]},
    { id: 'ai', label: '🤖 AI技术', title: '📖 AI技术学习路径', description: [
      '拥抱AI时代，掌握AI开发与应用技能',
      '学习大语言模型、Prompt Engineering、AI应用开发',
      '将AI技术融入全栈开发流程'
    ]},
    { id: 'interview', label: '📚 面试准备', title: '📖 面试准备指南', description: [
      '系统梳理知识点，准备高频面试题',
      '练习算法题，掌握数据结构与算法',
      '准备项目经验，熟悉系统设计'
    ]},
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);

  // 加载中状态
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  // 错误状态
  if (error || !todoData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <p className="text-red-600 mb-4">{error || '数据加载失败'}</p>
          <button
            onClick={fetchTodoData}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            重新加载
          </button>
        </div>
      </div>
    );
  }

  // 为sections添加完成状态
  const getSectionsWithCompleted = (sections: Section[]): Section[] => {
    return sections.map(section => ({
      ...section,
      tasks: section.tasks.map(task => ({
        ...task,
        completed: completedTasks[task.id] || false
      }))
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* 头部 */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">🎯 全栈开发工程师学习路线新</h1>
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
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-4 px-2 text-center font-semibold transition-all ${activeTab === tab.id ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => switchTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 内容区域 */}
        <div className="p-6">
          {currentTab && (
            <div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{currentTab.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {currentTab.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <TodoTable
                sections={getSectionsWithCompleted(todoData[activeTab]?.sections || [])}
                tabId={activeTab}
                onToggleTask={toggleTask}
                getPriorityClass={getPriorityClass}
                getPriorityText={getPriorityText}
                getTagColor={getTagColor}
                showPriority={activeTab !== 'interview'}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
