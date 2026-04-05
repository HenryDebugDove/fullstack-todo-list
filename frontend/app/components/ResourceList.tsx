import { Resource } from '../../lib/store/todo-store';

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({ resources }: ResourceListProps) {
  if (resources.length === 0) {
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
          暂无学习资源
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          该模块目前没有推荐的学习资源
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <div
          key={resource.id}
          className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800">
            {resource.type === 'video' ? (
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {resource.title}
                </h4>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {resource.description}
                </p>
              </div>
              {resource.duration && (
                <span className="ml-4 whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  {resource.duration}
                </span>
              )}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  resource.type === 'video'
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                }`}
              >
                {resource.type === 'video' ? '视频教程' : '文档资料'}
              </span>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                开始学习
                <svg
                  className="h-4 w-4"
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
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}