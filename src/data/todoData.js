// 全栈开发工程师学习路线 - TodoList 数据

export const todoData = {
  frontend: {
    sections: [
      {
        title: "🔰 基础阶段",
        tasks: [
          {
            id: "frontend-basic-html-css",
            title: "HTML5 & CSS3",
            priority: "high",
            content: "语义化标签、Flexbox、Grid、动画、响应式设计、CSS变量、CSS预处理器(Sass/Less)、CSS Modules、BEM命名规范",
            tags: ["基础", "必学"],
            completed: false
          },
          {
            id: "frontend-basic-js",
            title: "JavaScript 核心",
            priority: "high",
            content: "原型链、闭包、异步编程、Event Loop、ES6+新特性、Promise、async/await、模块化(ES Module/CommonJS)",
            tags: ["核心", "必学"],
            completed: false
          },
          {
            id: "frontend-basic-ts",
            title: "TypeScript",
            priority: "high",
            content: "类型系统、接口、泛型、装饰器、类型体操、高级类型、条件类型、映射类型、模块声明",
            tags: ["必备", "现代"],
            completed: false
          },
          {
            id: "frontend-basic-dom",
            title: "DOM & BOM",
            priority: "medium",
            content: "DOM操作、事件委托、事件冒泡/捕获、浏览器API、Storage、IndexedDB、WebSocket、Service Worker",
            tags: ["基础"],
            completed: false
          },
          {
            id: "frontend-basic-network",
            title: "网络基础",
            priority: "medium",
            content: "HTTP/HTTPS、TCP/IP、浏览器请求流程、跨域解决方案、RESTful API、GraphQL、WebSocket",
            tags: ["网络", "面试"],
            completed: false
          }
        ]
      },
      {
        title: "🚀 框架与生态",
        tasks: [
          {
            id: "frontend-framework-react",
            title: "React",
            priority: "high",
            content: "Hooks(useState/useEffect/useContext/useReducer/useCallback/useMemo)、Context API、状态管理、性能优化、React 18新特性(Concurrent Mode/Suspense)、React Router、Form处理",
            tags: ["主流", "推荐"],
            completed: false
          },
          {
            id: "frontend-framework-vue",
            title: "Vue.js",
            priority: "high",
            content: "Vue3、Composition API、Pinia、Vue Router、Teleport、Suspense、指令、插件开发、响应式原理",
            tags: ["主流", "推荐"],
            completed: false
          },
          {
            id: "frontend-framework-ssr",
            title: "Next.js / Nuxt.js",
            priority: "medium",
            content: "SSR、SSG、ISR、路由、API Routes、中间件、SEO优化、国际化、增量静态再生",
            tags: ["框架", "全栈"],
            completed: false
          },
          {
            id: "frontend-framework-state",
            title: "状态管理",
            priority: "medium",
            content: "Redux Toolkit、Zustand、Jotai、Recoil、Pinia、Vuex、MobX、状态管理最佳实践",
            tags: ["重要"],
            completed: false
          },
          {
            id: "frontend-framework-svelte",
            title: "Svelte",
            priority: "low",
            content: "Svelte基础、SvelteKit、响应式原理、编译时优化、组件开发",
            tags: ["新兴"],
            completed: false
          }
        ]
      },
      {
        title: "⚙️ 工程化与工具",
        tasks: [
          {
            id: "frontend-devops-build",
            title: "构建工具",
            priority: "high",
            content: "Vite、Webpack、Rollup、打包优化、Tree Shaking、代码分割、懒加载、预加载",
            tags: ["必备"],
            completed: false
          },
          {
            id: "frontend-devops-package",
            title: "包管理器",
            priority: "high",
            content: "npm、yarn、pnpm、依赖管理、版本锁定、monorepo管理、workspace配置",
            tags: ["基础"],
            completed: false
          },
          {
            id: "frontend-devops-lint",
            title: "代码规范",
            priority: "medium",
            content: "ESLint、Prettier、Husky、Commitlint、lint-staged、Git hooks、代码审查",
            tags: ["规范"],
            completed: false
          },
          {
            id: "frontend-devops-test",
            title: "测试",
            priority: "medium",
            content: "单元测试(Jest、Vitest)、集成测试、端到端测试(Cypress、Playwright)、测试覆盖率、测试策略",
            tags: ["质量"],
            completed: false
          },
          {
            id: "frontend-devops-cicd",
            title: "CI/CD",
            priority: "low",
            content: "GitHub Actions、GitLab CI、Jenkins、自动化部署、持续集成、持续部署",
            tags: ["工程化"],
            completed: false
          }
        ]
      },
      {
        title: "🎨 进阶技能",
        tasks: [
          {
            id: "frontend-advanced-performance",
            title: "性能优化",
            priority: "high",
            content: "首屏优化、加载优化、渲染优化、Lighthouse、Web Vitals、Core Web Vitals、代码分割、缓存策略、预加载、资源压缩",
            tags: ["进阶", "面试"],
            completed: false
          },
          {
            id: "frontend-advanced-cross",
            title: "跨端开发",
            priority: "medium",
            content: "React Native、Flutter、Uni-app、Taro、PWA、Electron、小程序开发",
            tags: ["扩展"],
            completed: false
          },
          {
            id: "frontend-advanced-security",
            title: "前端安全",
            priority: "medium",
            content: "XSS、CSRF、CSP、HTTPS、Content Security Policy、点击劫持、密码安全、数据加密",
            tags: ["安全", "面试"],
            completed: false
          },
          {
            id: "frontend-advanced-webgl",
            title: "WebGL/Canvas",
            priority: "low",
            content: "Three.js、数据可视化(D3.js、ECharts)、图形渲染、WebGL基础、Shader编程",
            tags: ["高级"],
            completed: false
          },
          {
            id: "frontend-advanced-accessibility",
            title: "无障碍访问",
            priority: "low",
            content: "WCAG标准、ARIA属性、键盘导航、屏幕阅读器兼容、语义化HTML",
            tags: ["合规"],
            completed: false
          }
        ]
      }
    ]
  },
  backend: {
    sections: [
      {
        title: "🖥️ 后端语言 & 框架",
        tasks: [
          {
            id: "backend-lang-node",
            title: "Node.js",
            priority: "high",
            content: "Express/Koa/Nest.js、异步编程、Stream、Cluster、中间件、错误处理、日志管理、API文档(Swagger)",
            tags: ["推荐", "JS全栈"],
            completed: false
          },
          {
            id: "backend-lang-python",
            title: "Python",
            priority: "high",
            content: "Django/Flask/FastAPI、异步、ORM、Web开发、Pydantic、依赖注入、测试框架",
            tags: ["推荐", "AI友好"],
            completed: false
          },
          {
            id: "backend-lang-go",
            title: "Go",
            priority: "medium",
            content: "Gin/Echo/Fiber、并发、协程、微服务、高性能、依赖管理、错误处理",
            tags: ["云原生", "热门"],
            completed: false
          },
          {
            id: "backend-lang-java",
            title: "Java",
            priority: "medium",
            content: "Spring Boot、Spring Cloud、JVM、MyBatis、Spring Security、JPA、微服务架构",
            tags: ["企业级"],
            completed: false
          },
          {
            id: "backend-lang-rust",
            title: "Rust",
            priority: "low",
            content: "Rust基础、异步编程、Web框架(Actix/axum)、性能优化、安全性",
            tags: ["新兴", "高性能"],
            completed: false
          }
        ]
      },
      {
        title: "🗄️ 数据库",
        tasks: [
          {
            id: "backend-db-mysql",
            title: "MySQL",
            priority: "high",
            content: "SQL语法、索引原理、事务、锁、优化、主从复制、分库分表、读写分离、执行计划",
            tags: ["必备", "面试"],
            completed: false
          },
          {
            id: "backend-db-postgres",
            title: "PostgreSQL",
            priority: "high",
            content: "高级SQL、JSON支持、全文检索、性能优化、PostGIS、存储过程、触发器",
            tags: ["推荐"],
            completed: false
          },
          {
            id: "backend-db-mongodb",
            title: "MongoDB",
            priority: "medium",
            content: "NoSQL、文档数据库、聚合管道、索引、复制集、分片、事务支持",
            tags: ["NoSQL"],
            completed: false
          },
          {
            id: "backend-db-redis",
            title: "Redis",
            priority: "medium",
            content: "数据结构、持久化、集群、应用场景、缓存设计、哨兵模式、主从复制",
            tags: ["缓存", "面试"],
            completed: false
          },
          {
            id: "backend-db-elasticsearch",
            title: "Elasticsearch",
            priority: "low",
            content: "全文检索、倒排索引、聚合查询、分片、集群、Kibana集成",
            tags: ["搜索", "日志"],
            completed: false
          }
        ]
      },
      {
        title: "🔌 API & 架构",
        tasks: [
          {
            id: "backend-api-rest",
            title: "RESTful API",
            priority: "high",
            content: "REST架构、HTTP方法、状态码、API设计规范、版本控制、认证授权、速率限制",
            tags: ["必备"],
            completed: false
          },
          {
            id: "backend-api-graphql",
            title: "GraphQL",
            priority: "medium",
            content: "Schema、Query、Mutation、Subscription、Apollo、Resolver、中间件",
            tags: ["现代"],
            completed: false
          },
          {
            id: "backend-arch-microservices",
            title: "微服务",
            priority: "medium",
            content: "服务拆分、服务发现、负载均衡、熔断降级、限流、API网关、服务网格",
            tags: ["架构", "面试"],
            completed: false
          },
          {
            id: "backend-arch-message",
            title: "消息队列",
            priority: "low",
            content: "RabbitMQ、Kafka、RocketMQ、异步处理、消息幂等、消息积压处理",
            tags: ["中间件"],
            completed: false
          },
          {
            id: "backend-arch-grpc",
            title: "gRPC",
            priority: "low",
            content: "Protocol Buffers、服务定义、流式传输、认证、负载均衡",
            tags: ["高性能", "微服务"],
            completed: false
          }
        ]
      },
      {
        title: "🚀 DevOps & 运维",
        tasks: [
          {
            id: "backend-devops-docker",
            title: "Docker",
            priority: "high",
            content: "镜像、容器、Dockerfile、Docker Compose、多阶段构建、镜像优化、网络配置",
            tags: ["必备", "容器化"],
            completed: false
          },
          {
            id: "backend-devops-k8s",
            title: "Kubernetes",
            priority: "medium",
            content: "Pod、Service、Deployment、Ingress、Helm、ConfigMap、Secret、StatefulSet、DaemonSet",
            tags: ["编排", "云原生"],
            completed: false
          },
          {
            id: "backend-devops-cicd",
            title: "CI/CD",
            priority: "medium",
            content: "GitHub Actions、Jenkins、GitLab CI、自动化部署、测试集成、代码质量检查",
            tags: ["工程化"],
            completed: false
          },
          {
            id: "backend-devops-linux",
            title: "Linux",
            priority: "medium",
            content: "Shell脚本、常用命令、进程管理、权限控制、网络配置、系统调优、安全加固",
            tags: ["基础"],
            completed: false
          },
          {
            id: "backend-devops-monitor",
            title: "监控与告警",
            priority: "low",
            content: "Prometheus、Grafana、ELK Stack、日志管理、性能监控、告警配置",
            tags: ["运维", "监控"],
            completed: false
          }
        ]
      }
    ]
  },
  ai: {
    sections: [
      {
        title: "🧠 AI基础",
        tasks: [
          {
            id: "ai-basic-llm",
            title: "大语言模型基础",
            priority: "high",
            content: "LLM原理、Transformer架构、Token、Context Window、注意力机制、模型训练流程、模型评估指标",
            tags: ["基础", "必学"],
            completed: false
          },
          {
            id: "ai-basic-prompt",
            title: "Prompt Engineering",
            priority: "high",
            content: "提示词技巧、思维链(CoT)、Few-shot/One-shot、角色设定、Prompt模板、反事实思维、自我批判",
            tags: ["核心", "实用"],
            completed: false
          },
          {
            id: "ai-basic-ml",
            title: "机器学习基础",
            priority: "medium",
            content: "监督学习、无监督学习、深度学习、神经网络、损失函数、优化器、过拟合/欠拟合",
            tags: ["理论"],
            completed: false
          },
          {
            id: "ai-basic-framework",
            title: "深度学习框架",
            priority: "low",
            content: "TensorFlow、PyTorch、Keras、模型构建、训练、部署",
            tags: ["框架"],
            completed: false
          }
        ]
      },
      {
        title: "🔧 AI开发工具",
        tasks: [
          {
            id: "ai-tool-openai",
            title: "OpenAI API",
            priority: "high",
            content: "Chat Completions、Embeddings、Function Calling、Assistants、GPT-4/GPT-3.5、Rate Limits、错误处理",
            tags: ["必备", "主流"],
            completed: false
          },
          {
            id: "ai-tool-langchain",
            title: "LangChain",
            priority: "high",
            content: "Chains、Agents、RAG、Memory、Tools集成、LCEL、Prompt Templates、Output Parsers",
            tags: ["框架", "热门"],
            completed: false
          },
          {
            id: "ai-tool-vector",
            title: "向量数据库",
            priority: "medium",
            content: "Pinecone、Chroma、Milvus、Weaviate、向量检索、相似度计算、索引优化",
            tags: ["RAG"],
            completed: false
          },
          {
            id: "ai-tool-open-source",
            title: "开源模型",
            priority: "medium",
            content: "Llama、Qwen、ChatGLM、微调、部署、Ollama、模型量化、模型评估",
            tags: ["本地", "开源"],
            completed: false
          },
          {
            id: "ai-tool-framework",
            title: "AI开发框架",
            priority: "low",
            content: "LangGraph、AutoGen、Agent Info、crewAI、多Agent协作框架",
            tags: ["框架", "前沿"],
            completed: false
          }
        ]
      },
      {
        title: "🤖 AI应用开发",
        tasks: [
          {
            id: "ai-app-rag",
            title: "RAG应用",
            priority: "high",
            content: "文档解析、分块策略、向量化、检索策略、增强生成、评估指标、优化技巧",
            tags: ["实用", "热门"],
            completed: false
          },
          {
            id: "ai-app-agent",
            title: "AI Agent",
            priority: "high",
            content: "自主代理、工具调用、任务规划、多Agent协作、Agent Memory、反思机制",
            tags: ["前沿"],
            completed: false
          },
          {
            id: "ai-app-multimodal",
            title: "多模态应用",
            priority: "medium",
            content: "图像理解、语音识别、视频分析、多模态输入输出、GPT-4V、DALL-E、Whisper",
            tags: ["扩展"],
            completed: false
          },
          {
            id: "ai-app-copilot",
            title: "AI编程助手",
            priority: "low",
            content: "Copilot、Cursor、Trae、AI辅助开发最佳实践、代码生成、代码审查",
            tags: ["效率"],
            completed: false
          },
          {
            id: "ai-app-ethics",
            title: "AI伦理与安全",
            priority: "low",
            content: "偏见与公平、隐私保护、内容审核、安全评估、AI治理",
            tags: ["伦理"],
            completed: false
          }
        ]
      }
    ]
  },
  interview: {
    sections: [
      {
        title: "📝 前端高频面试题",
        tasks: [
          {
            id: "interview-frontend-prototype",
            title: "JS 原型链与继承",
            priority: "high",
            content: "原型、原型链、构造函数、new操作符、继承方式(原型链继承、构造函数继承、组合继承、ES6 class继承)",
            tags: ["JS核心", "高频"],
            completed: false
          },
          {
            id: "interview-frontend-closure",
            title: "闭包与作用域",
            priority: "high",
            content: "词法作用域、闭包原理、应用场景、内存泄漏、立即执行函数表达式(IIFE)",
            tags: ["JS核心", "高频"],
            completed: false
          },
          {
            id: "interview-frontend-eventloop",
            title: "Event Loop",
            priority: "high",
            content: "宏任务、微任务、执行顺序、浏览器与Node.js差异、setTimeout原理",
            tags: ["异步", "高频"],
            completed: false
          },
          {
            id: "interview-frontend-reactive",
            title: "Vue/React 响应式原理",
            priority: "high",
            content: "Vue2 Object.defineProperty、Vue3 Proxy、React Fiber、Hooks原理、依赖收集",
            tags: ["框架", "高频"],
            completed: false
          },
          {
            id: "interview-frontend-vdom",
            title: "虚拟 DOM 与 Diff 算法",
            priority: "high",
            content: "虚拟DOM原理、Diff算法、key的作用、优化策略、React 18 Concurrent Mode",
            tags: ["框架", "高频"],
            completed: false
          },
          {
            id: "interview-frontend-performance",
            title: "前端性能优化",
            priority: "high",
            content: "加载优化、渲染优化、缓存策略、打包优化、Web Vitals、Core Web Vitals、Lighthouse",
            tags: ["性能", "高频"],
            completed: false
          },
          {
            id: "interview-frontend-render",
            title: "浏览器渲染原理",
            priority: "high",
            content: "从URL到页面、重排重绘、合成层、GPU加速、浏览器内核、渲染流程",
            tags: ["浏览器", "高频"],
            completed: false
          },
          {
            id: "interview-frontend-cors",
            title: "跨域解决方案",
            priority: "high",
            content: "同源策略、CORS、JSONP、代理、Nginx、postMessage、WebSocket",
            tags: ["网络", "高频"],
            completed: false
          },
          {
            id: "interview-frontend-security",
            title: "前端安全",
            priority: "high",
            content: "XSS、CSRF、CSP、SQL注入、HTTPS、点击劫持、密码安全",
            tags: ["安全", "高频"],
            completed: false
          },
          {
            id: "interview-frontend-ts",
            title: "TypeScript 类型体操",
            priority: "high",
            content: "泛型、条件类型、映射类型、infer、工具类型、类型守卫、模块声明",
            tags: ["TS", "中高级"],
            completed: false
          },
          {
            id: "interview-frontend-module",
            title: "模块化开发",
            priority: "high",
            content: "CommonJS、ES Module、AMD、CMD、模块打包、Tree Shaking",
            tags: ["工程化", "高频"],
            completed: false
          }
        ]
      },
      {
        title: "💻 后端高频面试题",
        tasks: [
          {
            id: "interview-backend-mysql",
            title: "MySQL 索引原理",
            priority: "high",
            content: "B+树、聚簇索引、非聚簇索引、最左前缀、索引优化、执行计划、索引覆盖",
            tags: ["数据库", "高频"],
            completed: false
          },
          {
            id: "interview-backend-transaction",
            title: "事务与隔离级别",
            priority: "high",
            content: "ACID、隔离级别、脏读、不可重复读、幻读、MVCC、锁机制",
            tags: ["数据库", "高频"],
            completed: false
          },
          {
            id: "interview-backend-redis",
            title: "Redis 数据结构与应用",
            priority: "high",
            content: "String/Hash/List/Set/ZSet、持久化、缓存穿透/击穿/雪崩、哨兵模式、集群",
            tags: ["缓存", "高频"],
            completed: false
          },
          {
            id: "interview-backend-distlock",
            title: "分布式锁",
            priority: "high",
            content: "Redis实现、Zookeeper实现、数据库实现、优缺点对比、锁的粒度",
            tags: ["分布式", "高频"],
            completed: false
          },
          {
            id: "interview-backend-message",
            title: "消息队列",
            priority: "high",
            content: "为什么用、如何选、如何保证不重复不丢失、消息积压、死信队列、延迟队列",
            tags: ["中间件", "高频"],
            completed: false
          },
          {
            id: "interview-backend-microservice",
            title: "微服务相关",
            priority: "high",
            content: "服务发现、负载均衡、熔断降级、限流、网关、服务网格、服务治理",
            tags: ["架构", "高频"],
            completed: false
          },
          {
            id: "interview-backend-disttransaction",
            title: "分布式事务",
            priority: "high",
            content: "2PC、3PC、TCC、Saga、本地消息表、事务消息、最终一致性",
            tags: ["分布式", "高频"],
            completed: false
          },
          {
            id: "interview-backend-jvm",
            title: "JVM相关",
            priority: "high",
            content: "JVM内存结构、垃圾回收、类加载、JVM调优、内存泄露排查",
            tags: ["Java", "高频"],
            completed: false
          }
        ]
      },
      {
        title: "📊 算法与数据结构",
        tasks: [
          {
            id: "interview-algo-array",
            title: "数组与链表",
            priority: "high",
            content: "两数之和、三数之和、反转链表、合并两个有序链表、LRU缓存、环形链表、删除链表倒数第N个节点",
            tags: ["LeetCode", "高频"],
            completed: false
          },
          {
            id: "interview-algo-tree",
            title: "树与图",
            priority: "high",
            content: "二叉树遍历、最大深度、平衡二叉树、层序遍历、岛屿数量、路径总和、二叉搜索树、图的遍历",
            tags: ["LeetCode", "高频"],
            completed: false
          },
          {
            id: "interview-algo-dp",
            title: "动态规划",
            priority: "high",
            content: "爬楼梯、最长递增子序列、背包问题、最长公共子序列、买卖股票问题、打家劫舍、编辑距离",
            tags: ["LeetCode", "难点"],
            completed: false
          },
          {
            id: "interview-algo-sort",
            title: "排序与搜索",
            priority: "high",
            content: "快速排序、归并排序、二分查找、搜索旋转排序数组、二分查找变种、堆排序",
            tags: ["LeetCode", "基础"],
            completed: false
          },
          {
            id: "interview-algo-stack",
            title: "栈与队列",
            priority: "high",
            content: "有效括号、最小栈、用栈实现队列、滑动窗口最大值、队列的最大值、单调栈",
            tags: ["LeetCode", "高频"],
            completed: false
          },
          {
            id: "interview-algo-greedy",
            title: "贪心算法",
            priority: "high",
            content: "跳跃游戏、买卖股票的最佳时机、区间调度、 Huffman编码",
            tags: ["LeetCode", "高频"],
            completed: false
          }
        ]
      },
      {
        title: "🏗️ 系统设计",
        tasks: [
          {
            id: "interview-sys-shorturl",
            title: "设计短链接系统",
            priority: "high",
            content: "哈希算法、数据库设计、缓存、分布式、高可用、冲突处理、性能优化",
            tags: ["经典", "高频"],
            completed: false
          },
          {
            id: "interview-sys-social",
            title: "设计微博/朋友圈",
            priority: "high",
            content: "Feed流、消息推送、分库分表、缓存策略、读写分离、亿级数据处理",
            tags: ["经典", "高频"],
            completed: false
          },
          {
            id: "interview-sys-chat",
            title: "设计聊天系统",
            priority: "high",
            content: "WebSocket、消息存储、离线消息、群聊、已读状态、消息加密、高并发",
            tags: ["经典", "高频"],
            completed: false
          },
          {
            id: "interview-sys-seckill",
            title: "设计秒杀系统",
            priority: "high",
            content: "高并发、限流、削峰、防超卖、分布式事务、缓存策略、系统降级",
            tags: ["经典", "高频"],
            completed: false
          },
          {
            id: "interview-sys-id",
            title: "设计分布式ID生成器",
            priority: "high",
            content: "UUID、雪花算法、数据库号段、Redis、性能对比、时钟回拨问题",
            tags: ["经典", "高频"],
            completed: false
          },
          {
            id: "interview-sys-storage",
            title: "设计文件系统/对象存储",
            priority: "high",
            content: "文件分片、存储策略、元数据管理、一致性哈希、数据备份、容灾",
            tags: ["经典", "高频"],
            completed: false
          }
        ]
      }
    ]
  }
};