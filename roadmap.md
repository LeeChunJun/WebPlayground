  ---

  项目规划：Gemini AI 移动客户端

  1. 项目愿景 (Vision)

  打造一款功能强大、界面友好、响应迅速的移动客户端，让用户可以随时随地利用 Google Gemini
  模型的强大能力，进行**文本**、**语音**和**图像**的智能交互。

  2. 功能规划 (Features)

  我们将功能分为几个核心模块，并按版本迭代：

  核心功能 (v1.0 - MVP 最小可行产品):

   * 文本对话 (Text Chat):
       * 提供一个类似聊天应用的界面。
       * 用户输入文本问题，客户端调用 Gemini Pro 模型 API，并流式（或一次性）返回和展示答案。
       * 支持 Markdown 渲染，以美观地显示代码块、列表、表格等格式。
       * 支持复制和分享回答内容。
   * 多模态输入 (Multimodal Input - Vision):
       * 允许用户通过手机摄像头拍照或从相册选择图片。
       * 将图片和文本提示一起发送给 Gemini Pro Vision 模型进行分析和问答。
       * 例如，用户可以拍一张植物的照片，然后提问“这是什么植物？”。
   * API Key 管理:
       * 在设置界面中，提供安全的输入框，让用户配置自己的 Gemini API Key。
       * API Key 将被加密存储在设备本地。
   * 对话历史:
       * 所有对话都保存在本地。
       * 提供一个历史记录列表，用户可以查看、继续或删除之前的对话。

  进阶功能 (v1.1+):

   * 语音输入/输出 (Voice I/O):
       * 集成设备的原生语音识别功能，将用户的语音转换为文本输入。
       * 集成文本转语音（TTS）功能，可以朗读 Gemini 的回答。
   * 高级设置:
       * 允许用户调整 API 参数，如 temperature, top_k 等，以控制模型的创造性。
       * 提供多种主题（如暗黑模式）。
   * 上下文记忆:
       * 在单个对话中，实现多轮对话的上下文关联。
   * 云同步 (可选):
       * 通过 Firebase 或类似服务，实现用户对话历史的跨设备云同步。

  3. 模块划分 (Modules)

   * UI/UX 模块 (User Interface):
       * 对话界面 (`ChatScreen`): 核心交互界面，包含输入框、消息列表、图片上传按钮。
       * 历史记录界面 (`HistoryScreen`): 展示历史对话列表。
       * 设置界面 (`SettingsScreen`): 用于 API Key 配置和应用设置。
   * 核心逻辑模块 (Core Logic):
       * API 服务 (`GeminiService`): 封装所有与 Google Gemini API 的交互逻辑，包括请求构建、发送和响应处理。
       * 状态管理 (`StateManagement`): 使用 Zustand 或 Redux Toolkit 来管理应用的全局状态，如当前的对话消息、API
         Key、加载状态等。
       * 本地存储 (`StorageService`): 封装本地数据存储逻辑（如使用 MMKV 或 AsyncStorage）来持久化对话历史和设置。
   * 设备集成模块 (Device Integration):
       * 图片选择器 (`ImagePicker`): 调用原生相册或相机。
       * 语音服务 (`VoiceService`): 集成语音识别和 TTS。
   * 导航模块 (Navigation):
       * 管理应用内的屏幕跳转逻辑。

  4. 代码结构 (Code Structure)

  我建议采用功能驱动的目录结构，清晰且易于扩展：

    1 RNProject01/
    2 ├── src/
    3 │   ├── api/
    4 │   │   └── geminiService.ts         # Gemini API 调用封装
    5 │   ├── assets/
    6 │   │   ├── fonts/                   # 字体资源
    7 │   │   └── images/                  # 图片资源
    8 │   ├── components/
    9 │   │   ├── shared/                  # 可复用的共享组件 (AppHeader, etc.)
   10 │   │   └── chat/                    # 聊天界面相关组件 (ChatBubble、MessageInput, etc.)
   11 │   ├── constants/
   12 │   │   └── index.ts                 # 应用常量
   13 │   ├── hooks/
   14 │   │   └── useGemini.ts             # 调用 Gemini 的自定义 Hook
   15 │   ├── navigation/
   16 │   │   └── AppNavigator.tsx         # 路由配置
   17 │   ├── screens/
   18 │   │   ├── ChatScreen.tsx           # 对话主屏幕
   19 │   │   ├── HistoryScreen.tsx        # 历史记录屏幕
   20 │   │   └── SettingsScreen.tsx       # 设置屏幕
   21 │   ├── services/
   22 │   │   └── storageService.ts        # 本地存储服务
   23 │   ├── state/
   24 │   │   ├── chatStore.ts             # 状态管理 (e.g., Zustand store)
   25 │   │   └── SettingsStore.tsx        # 设置状态管理
   26 │   ├── styles/                      # 样式
   27 │   ├── theme/
   28 │   │   ├── colors.ts                # 主题颜色
   29 │   │   └── index.tsx
   30 │   ├── types/
   31 │   │   └── index.ts                 # TypeScript 类型定义
   32 │   └── utils/
   33 │       └── helpers.ts               # 辅助函数
   34 ├── App.tsx                          # 应用根组件
   35 └── ... (其他配置文件)

  5. 技术栈选型 (Tech Stack)

   * 框架: React Native (已确定)
   * 语言: TypeScript (已确定)
   * UI 库: React Native Paper - 提供高质量、可定制的 Material Design 组件，能大幅提升开发效率和 UI 质量。
   * 导航: React Navigation - React Native 生态中最主流的导航库。
   * API 请求: Axios - 一个成熟、功能强大的 HTTP 客户端。
   * 状态管理: Zustand - 一个轻量、现代、易于使用的状态管理库，非常适合中小型项目。
   * 本地存储: MMKV - 一个高性能的键值存储框架，比 AsyncStorage 快得多，推荐用于存储对话历史和设置。
   * 图片选择: react-native-image-picker - 社区广泛使用的图片选择库。
   * 图标库: react-native-vector-icons - 集成了多种流行的图标库。

  6. 版本规划与开发周期 (Roadmap & Timeline)

  这是一个预估的开发周期，您可以根据实际情况进行调整。

  Phase 1: v1.0 (MVP) - (预计 3-4 周)

   * 第 1 周: 项目设置与基础 UI
       * 搭建开发环境，安装所有依赖库。
       * 使用 React Navigation 设置好底部标签导航 (对话、历史、设置)。
       * 完成 ChatScreen 和 SettingsScreen 的静态 UI 布局。
   * 第 2 周: 核心 API 对接
       * 编写 GeminiService，实现文本对话的 API 调用。
       * 在 SettingsScreen 中实现 API Key 的本地加密存储和读取。
       * 将 API 功能对接到 ChatScreen，实现基本的发送消息和接收回复。
   * 第 3 周: 多模态与历史记录
       * 集成 react-native-image-picker，实现图片选择和上传。
       * 在 GeminiService 中添加调用 gemini-pro-vision 的逻辑。
       * 实现对话历史的本地存储与在 HistoryScreen 中的展示。
   * 第 4 周: 优化与测试
       * 完善 UI 细节，处理加载和错误状态。
       * 进行内部测试，修复 Bug。
       * 准备 Alpha 版本。

  Phase 2: v1.1 (进阶功能) - (预计 2 周)

   * 第 5-6 周:
       * 集成语音识别和 TTS 功能。
       * 添加暗黑模式和主题切换。
       * 完善多轮对话的上下文逻辑。
       * 发布 v1.1。

  ---