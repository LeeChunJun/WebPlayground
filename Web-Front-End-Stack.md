  ---
  
  第一阶段：前端基础核心（“三件套”）


  这个阶段是所有前端开发的基石，无论你将来做什么方向，都必须牢固掌握。


   1. HTML (超文本标记语言)
       * 学习目标：理解网页的骨架结构。
       * 核心知识：
          * 常用标签：
          ``` 
          <div>, <span>, <p>, <h1>-<h6>, <ul>, <ol>, <li>,
          <a>, <img>, <input>, <button> 等。
          ``` 
          * 语义化标签（HTML5）：
          ``` 
          <header>, <footer>, <nav>, <main>,
          <section>, <article>，理解其对 SEO 和可访问性的好处。
          ``` 
          * 表单和多媒体标签。


   2. CSS (层叠样式表)
       * 学习目标：美化网页，控制布局和样式。
       * 核心知识：
           * 选择器：ID 选择器、类选择器、标签选择器、伪类选择器等。
           * 盒子模型（Box Model）：margin, padding, border, content，这是
              CSS 布局的重中之重。
           * 布局技术：
               * Flexbox 
                 (弹性布局)：小程序中最核心、最常用的布局方式，必须精通。
               * Grid (网格布局)：用于更复杂的二维布局。
           * 定位（Positioning）：static, relative, absolute, fixed,
             sticky。
           * 常见样式：字体、颜色、背景、过渡（transition）、动画（animati
             on）。
           * 响应式设计与媒体查询（Media Queries）：虽然小程序尺寸固定，但
             这个概念有助于理解不同设备适配。


   3. JavaScript (编程语言)
       * 学习目标：实现网页的交互逻辑和动态效果。
       * 核心知识：
           * 基础语法：变量 (var, let,
             const)、数据类型、运算符、流程控制（if/else, for, while）。
           * 函数：函数的定义、调用、参数、作用域、闭包。
           * 对象和数组：创建、操作、常用方法（如 map, filter, forEach,
             find 等）。
           * ES6+ 新特性（极其重要）：
               * let 和 const
               * 箭头函数 (=>)
               * 解构赋值
               * 模板字符串
               * Promise 和 
                 async/await：处理异步操作（如网络请求）的必备技能。
               * 模块化 (import/export)

  ---
  
  第二阶段：前端工程化与工具

  现代开发离不开工具，它们能极大地提升你的开发效率。


   1. Git & GitHub
       * 学习目标：学会代码版本控制与团队协作。
       * 核心知识：git clone, git add, git commit, git push, git pull, git branch。


   2. npm / yarn (包管理工具)
       * 学习目标：管理项目依赖。
       * 核心知识：npm install, npm run, package.json 文件的作用。


   3. 命令行工具
       * 学习目标：熟练使用终端进行基本操作。
       * 核心知识：cd, ls, mkdir 等基本命令。

  ---
  
  第三阶段：学习一个现代前端框架（推荐 Vue.js）


  为什么推荐 Vue？因为它的语法和设计思想与主流小程序（尤其是微信小程序）
  非常相似，学习它可以让你无缝过渡。


   1. Vue.js
       * 学习目标：掌握组件化、数据驱动视图的开发思想。
       * 核心知识：
           * 核心概念：模板语法、数据绑定 ({{ }} 和 v-bind)、指令 (v-if,
             v-for, v-on)。
           * 组件化开发：组件的创建、父子组件通信（Props & Events）。
           * 生命周期：created, mounted 等常用生命周期钩子。
           * 计算属性 (Computed) 和侦听器 (Watch)。

  ---

  第四阶段：小程序实战


  现在，你可以正式进入小程序开发了。建议从微信小程序开始，因为它生态最完
  善，文档最丰富。


   1. 原生微信小程序开发
       * 学习目标：掌握微信小程序的开发流程和核心概念。
       * 核心知识：
           * 开发工具：下载并熟悉微信开发者工具。
           * 项目结构：理解 app.json, page.json, .wxml, .wxss, .js
             文件的作用。
           * 核心概念：
               * 页面与组件：理解页面和组件的区别，学会自定义组件。
               * 生命周期：App 和 Page 的生命周期 (onLoad, onShow 等)。
               * 数据绑定与事件处理：{{}}, bindtap 等。
           * 小程序 API：
               * 网络请求：wx.request
               * 本地存储：wx.setStorageSync, wx.getStorageSync
               * 路由跳转：wx.navigateTo, wx.redirectTo
               * 用户授权：wx.login, wx.getUserProfile
               * UI 交互：wx.showToast, wx.showModal
           * 内置组件：熟练使用
            ``` 
            <view>, <text>, <image>, <swiper>,
             <scroll-view>, <button> 等。
            ``` 


   2. 项目实践
       * 目标：独立完成 1-2 个完整的小程序项目。
       * 项目建议：
           * 初级：待办事项（Todo List）、天气预报小程序。
           * 中级：仿一个简单的资讯、电商首页，包含列表和详情页。

  ---

  第五阶段：进阶与扩展


  当你掌握了原生小程序开发后，可以探索更高效的开发方式和更广阔的知识领域。


   1. 小程序跨端框架
       * 学习目标：学习“一次编写，多端运行”的框架，提升效率。
       * 主流框架：
           * uni-app：基于 Vue.js
             语法，可以编译到微信小程序、支付宝小程序、H5、App
             等多个平台。如果你学了 Vue，上手 uni-app 会非常快。
           * Taro：基于 React 语法，功能与 uni-app 类似。


   2. 小程序性能优化
       * 学习目标：提升小程序的加载速度和运行流畅度。
       * 核心知识：分包加载、图片优化、减少 setData
         的频率和数据量、使用骨架屏等。


   3. 了解后端知识
       * 学习目标：理解前后端如何协作。
       * 核心知识：
           * 了解 RESTful API 的概念。
           * 能看懂 API 文档，知道如何与后端工程师沟通。
           * （可选）学习 Node.js
             或使用小程序云开发，可以让你独立完成全栈项目。

  学习建议


   * 动手实践：不要只看视频和文档，一定要亲手敲代码，做项目。
   * 阅读官方文档：小程序和框架的官方文档是最好、最准确的学习资料。
   * 由简到繁：从实现一个小功能开始，慢慢构建成一个完整的项目。
   * 遇到问题先思考：尝试自己解决问题，学会使用搜索引擎和开发者社区。


  祝你学习顺利，早日成为一名优秀的小程序开发者！
  
  
  ---
  
  Vue 开发补全计划
  # step1 Vue教程一览
  
  # step2 Vue官方文档
  
  ## 简介
  Vue 是构建用户界面的 JavaScript 框架，提供一套声明式的、组件化的编程模型。声明式渲染、响应性。
  
  渐进性框架：（灵活性和“可以被逐步集成”特点）
   * 无需构建步骤，渐进式增强静态的 HTML
   * 在任何页面中作为 Web Components 嵌入
   * 单页应用 (SPA)
   * 全栈 / 服务端渲染 (SSR)
   * Jamstack / 静态站点生成 (SSG)
   * 开发桌面端、移动端、WebGL，甚至是命令行终端中的界面
  
  单文件组件：（*.vue 文件，Single-File Components，缩写为 SFC）
   * 将一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) 封装在同一个文件里，
   * 单文件组件是框架指定的文件格式，因此必须交由 @vue/compiler-sfc 编译为标准的 JavaScript 和 CSS，
   * 编译后的单文件组件是一个标准的 JavaScript(ES) 模块，可以像导入其他 ES 模块一样导入单文件组件。
  
  单文件组件编译器的构建工具： Vite 或者 Vue CLI (基于 webpack)。
  
  关注点分离：在现代的 UI 开发中，我们发现与其将代码库划分为三个巨大的层，相互交织在一起，不如将它们划分为松散耦合的组件，再按需组合起来。
  
  选项式 API：
   * 用包含多个选项的对象来描述组件的逻辑。
   * 选项式 API 是在组合式 API 的基础上实现，选项式 API 以“组件实例”的概念为中心 (即上述例子中的 this)，
   * 它将响应性相关的细节抽象出来，并强制按照选项来组织代码。
  
  组合式 API：
   * 使用导入的 API 函数来描述组件逻辑，在 SFC 中与 `<script setup>` 搭配使用。
   * 组合式 API 的核心思想是直接在函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来处理复杂问题。
   * 形式更加自由，它的灵活性也使得组织和重用逻辑的模式变得更加强大。
  
  最佳实践：
  1. 不需要使用构建工具或者低复杂度的场景中使用 Vue -> 推荐采用选项式 API
  2. 使用 Vue 构建完整的单页应用 -> 推荐采用组合式 API + 单文件组件
  
  ## 快速上手
  
  `JSFiddle`：一个免费、便捷的在线工具，让前端开发者可以快速编写、测试和分享网页代码
   * 即时预览：你写的代码效果可以立刻看到，非常适合快速测试和验证一些小的代码片段或想法。
   * 无需环境配置：你不需要在自己的电脑上安装任何软件或配置开发环境，只需要一个浏览器就可以开始写代码。
   * 轻松分享：你可以把你写的代码（称为一个 "Fiddle"）保存下来，然后把链接分享给别人。这在寻求帮助、演示问题或进行技术教学时非常方便。
   * 支持外部库：可以很方便地引入各种流行的JavaScript库和CSS框架，比如React, Vue, jQuery, Bootstrap 等，来测试它们的功能。
   * 协作与学习：很多人用它来重现Bug、分享代码解决方案，是一个很好的学习和交流平台。
   
  `StackBlitz`：在线集成开发环境
  允许在浏览器里直接创建、编辑和运行完整的 Web 项目，可以看作是一个“云端的 VS Code”。
  
  `Vite`: 是一个轻量级的、速度极快的构建工具
  
  创建一个 vue 项目：
  ```
  npm create vue@latest
  cd <your-project-name>
  npm install
  npm run dev
  ```
  
  发布生产：`npm run build`
  
  通过 CDN 使用 Vue：（无法使用单文件组件 (SFC) 语法）
  1. 使用全局构建版本：
  ```
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  
  <script>
  const { createApp } = Vue
  
  ...
  </script>
  ```

  2. 使用 ES 模块构建版本：
  ```
  <script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
  
  ...
  </script>
  ```
  3. 启用 Import maps 构建版本：
  ```
  <script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
  </script>
  
  <script type="module">
  import { createApp } from 'vue'
  
  ...
  </script>
  ```

  ## 创建应用
  应用实例、根组件、挂载应用
  
  应用配置：.config 对象允许我们配置一些应用级的选项
  
  多个应用实例
  
  ## 模版语法
  
  文本插值: ```eg: {{ rawHtml }} ```
  
  原始HTML：```eg: <span v-html="rawHtml"></span>```
  * v-html 在当前组件实例上，将此元素的 innerHTML 与 rawHtml 属性保持同步。
  * span 的内容将会被替换为 rawHtml 属性的值，插值为纯 HTML——数据绑定将会被忽略。
  * 在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。
  * 请仅在内容安全可信时再使用 v-html，并且永远不要使用用户提供的 HTML 内容。
  
  HTML attributes 绑定：```eg: <div v-bind:id="dynamicId"></div> ```
  
  * 简写：```<div :id="dynamicId"></div> ```，同名简写：```<div :id></div>```
  * 布尔型 Attribute ```eg: <button :disabled="isButtonDisabled">Button</button>```
  * 动态绑定多个值：（不带参数v-bind） ```eg: <div v-bind="objectOfAttrs"></div>```
  
  使用 JavaScript 表达式：```eg: <div :id="`list-${id}`"></div>```
  1. 被作为 JavaScript ，以当前组件实例为作用域解析执行。
  2. 使用场景：

    * 在文本插值中 (双大括号)
    * 在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中
    * 仅支持表达式
  3. 参数 Arguments
  
  事件：
  ```
  v-on 
  <a v-on:click="doSomething"> ... </a>
  简写：
  <a @click="doSomething"> ... </a>
  ```
  
  动态参数：
  ```
  <a v-bind:[attributeName]="url"> ... </a>
  简写：
  <a :[attributeName]="url"> ... </a>
  
  <a v-on:[eventName]="doSomething"> ... </a>
  简写
  <a @[eventName]="doSomething"> ... </a>
  ```
  
  修饰符 Modifiers：修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定
  事件修饰符：（修饰符可以链式调用，例如 `@click.stop.prevent`）
  `v-on:submit.prevent` ： 阻止事件的默认行为。（例如：提交表单时刷新页面）
  * `.stop`: 阻止事件冒泡。相当于调用 event.stopPropagation()。
  * `.once`: 事件只触发一次。
  * `.capture`: 使用事件捕获模式。
  * `.self`: 只有当事件是从侦听器绑定的元素本身触发时才触发回调。
  * `.passive`: 告诉浏览器你不会阻止事件的默认行为，通常用于优化移动端的滚动性能。
  
  ```
	<!-- 单击事件将停止传递 -->
	<a @click.stop="doThis"></a>

	<!-- 提交事件将不再重新加载页面 -->
	<form @submit.prevent="onSubmit"></form>

	<!-- 修饰语可以使用链式书写 -->
	<a @click.stop.prevent="doThat"></a>

	<!-- 也可以只有修饰符 -->
	<form @submit.prevent></form>

	<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
	<!-- 例如：事件处理器不来自子元素 -->
	<div @click.self="doThat">...</div>
  ```

  `.passive` 修饰符一般用于触摸事件的监听器，可以用来改善移动端设备的滚屏性能。
  `.capture`、`.once` 和 `.passive` 修饰符与原生 addEventListener 事件相对应：
  ```
  	<!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
	<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
	<div @click.capture="doThis">...</div>

	<!-- 点击事件最多被触发一次 -->
	<a @click.once="doThis"></a>

	<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
	<!-- 以防其中包含 `event.preventDefault()` -->
	<div @scroll.passive="onScroll">...</div>
  ``` 
  
  
  ## 计算属性
	
  computed: { // ... }
  * 使用【计算属性】来描述依赖响应式状态的复杂逻辑。
  * 对比【方法】，【计算属性】能够使用缓存。【计算属性值】会基于其响应式依赖被缓存，相比之下【方法】调用总是会在重渲染发生时再次执行函数。
  * 【计算属性】默认是只读，在某些特殊场景中才需要用到“可写”属性，通过同时提供 getter 和 setter 实现。
  * 通过访问【计算属性】的 getter 的第二个参数来获取【计算属性】返回的上一个值

  最佳实践：
  1. Getter 不应有副作用，【计算属性】的 getter 应只做计算而没有任何其他的副作用，不要改变其他状态、在 getter 中做异步请求或者更改 DOM！
  2. 避免直接修改【计算属性】值，【计算属性】返回的值是派生状态。看作是一个“临时快照”，【计算属性】的返回值应该被视为只读的，
  并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。（setter的实现也是更改依赖的源状态值来触发新的计算）
  
  ## 类与样式绑定
  
  Vue 专门为 class 和 style 的 v-bind 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。
  1. 绑定 HTML class ``` <div :class="{ active: isActive }"></div> ``` 

      * `:class` (`v-bind:class` 的缩写) 传递一个对象来动态切换 class。 
      * 可以直接绑定一个对象
      * 绑定一个返回对象的【计算属性】。
      * 绑定数组
  
  2. 绑定内联样式 ``` <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div> ``` 
	
  ## 条件渲染
  
  * `v-if` `​​v-else` `v-else-if` `v-show`
  * 不止一个元素：`<template>` 上的 `v-if`
  * 按条件显示一个元素： `v-show` ，会在 DOM 渲染中保留该元素，不支持在 `<template>` 元素上使用，也不能和 `v-else` 搭配使用
  * `v-if` 是“真实的”按条件渲染，在切换时，条件区块内的事件监听器和子组件都会被销毁与重建，只有当条件首次变为 true 时才被渲染。
  * `v-show` 元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。
  * `v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销，如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。

  ## 列表渲染
  
  * `v-for`
  * 通过 key 管理状态，推荐在任何可行的时候为 v-for 提供一个 key attribute
  ```
	<template v-for="todo in todos" :key="todo.name">
		<li>{{ todo.name }}</li>
	</template>
  
  ``` 
  * 组件上使用 ：
  ```
	<MyComponent
	  v-for="(item, index) in items"
	  :item="item"
	  :index="index"
	  :key="item.id"
	/>
  ``` 
  
  ## 事件处理
  
  `v-on:click="handler"` 或 `@click="handler"`
  
  事件处理器：内联事件处理器 和 方法事件处理器
  
  按键修饰符：(鼠标按键修饰符)
  ```
	<!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
	<input @keyup.enter="submit" /> 
	
	<!-- 使用 KeyboardEvent.key 暴露的按键名称作为修饰符，但需要转为 kebab-case 形式。 -->
	<input @keyup.page-down="onPageDown" />
	
	<!-- Alt + Enter -->
	<input @keyup.alt.enter="clear" />

	<!-- Ctrl + 点击 -->
	<div @click.ctrl="doSomething">Do something</div>
	
	<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
	<button @click.ctrl="onClick">A</button>
	
	<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
	<button @click.ctrl.exact="onCtrlClick">A</button>
	
	<!-- 仅当没有按下任何系统按键时触发 -->
	<button @click.exact="onClick">A</button>
  ```
  
  ## 表单输入绑定
  `v-model` 使用
  ```
  <input
  :value="text"
  @input="event => text = event.target.value">
  
  替换为：
  
  <input v-model="text">
  ```
  
  修饰符:
  `.lazy` 
  ```
	<!-- 在 "change" 事件后同步更新而不是 "input" -->
	<input v-model.lazy="msg" />
  ```
  
  `.number`
  ```
  <input v-model.number="age" />
  ```
  
  `.trim`
  ```
  <input v-model.trim="msg" />
  ```
  
  ## 侦听器
  
  `watch` 选项在每次响应式属性发生变化时触发一个函数.
  
  深层侦听器、即时回调的侦听器、一次性侦听器：
  
  `watch` 回调函数的初次执行就发生在 `created` 钩子之前。
  Vue 此时已经处理了 `data`、 `computed` 和 `methods` 选项，所以这些属性在第一次调用时就是可用的。
  
  副作用清理：
  使用 `onWatcherCleanup()`  API 来注册一个清理函数，当侦听器失效并准备重新运行时会被调用。作为替代 `onCleanup`
  
  `Post Watchers` : 侦听器回调中能访问被 Vue 更新之后的所属组件的 DOM
  同步侦听器：在 Vue 进行任何更新之前触发
  
  `this.$watch()` 使用组件实例的 `$watch()` 方法来命令式地创建一个侦听器
  
  停止侦听器：
  ```
	const unwatch = this.$watch('foo', callback)

	// ...当该侦听器不再需要时
	unwatch()
  ```
  
  ## 模板引用
  
  直接访问底层 DOM 元素。在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用
  例如：`<input ref="input">`
  
  访问模板引用：（在组件挂载结束后）
  ```
	  mounted() {
		this.$refs.input.focus()
	  }
  ```
  
  `ref attribute` 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数
  
  ## 组件基础
  
  定义组件
  
  使用组件:
  在单文件组件中，推荐为子组件使用 PascalCase 的标签名；
  在 DOM 中书写模板 (例如原生 <template> 元素的内容)，模板的编译需要遵从浏览器中 HTML 的解析行为。
  在这种情况下，你应该需要使用 kebab-case 形式并显式地关闭这些组件的标签。
  
  传递props：
  ```
	<script>
		export default {
		  props: ['title']
		}
	</script>
	<template>
		<h4>{{ title }}</h4>
	</template>
  ```
  
  ```
  <BlogPost title="My journey with Vue" />
  ```
  
  监听事件：
  子组件向外层抛事件
  ```
  <button @click="$emit('enlarge-text')">Enlarge text</button>
  ``` 
  父组件可以通过 v-on 或 @ 来选择性地监听子组件上抛的事件
  ```
  <BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />
  ```
  
  通过插槽来分配内容： `<slot />` 
  
  动态组件:
  ```
	<!-- currentTab 改变时组件也改变 -->
	<component :is="currentTab"></component>
  ```
  
  通过 `<KeepAlive>`  组件强制被切换掉的组件仍然保持“存活”的状态。
   `:is` 的值可以是以下几种：
   * 被注册的组件名
   * 导入的组件对象
   
  ## 生命周期
  
  `setup` (组合式API) 
  -> `beforeCreate` -> `created` 
  -> `beforeMount` -> `mounted` 
  -> `beforeUpdate` -> `updated` 
  -> `beforeUnmount` -> `unmounted`
   
  ## 注册
  
  1. 全局注册：app.component('MyComponent', MyComponent)
  2. 局部注册：(局部注册的组件在后代组件中不可用)
  ```
	<script>
		import ComponentA from './ComponentA.vue'

		export default {
		  components: {
			ComponentA
		  }
		}
	</script>

	<template>
		<ComponentA />
	</template>
  ```
  
  ## Props
  
  声明：`props` 选项定义
  
  Prop 名字格式及参数传递：
  eg
  ```
  <MyComponent greeting-message="hello" />
  ```
  
  静态 vs. 动态 Props
  
  使用 `v-bind` 或缩写 `:` 来进行动态绑定的 props
  
  `Prop` 校验及 `Boolean` 类型转换
  
  ## 自定义组件 v-model
  ```
	<CustomInput
	  :model-value="searchText"
	  @update:model-value="newValue => searchText = newValue"
	/>
  
  ```
  
  ## 透传 Attributes
  
  ## 插槽 Slots
  
  * 插槽内容与出口
  * 渲染作用域
	父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。
  * 默认内容
  * 具名插槽
	  ```
		<slot name="xxxx"></slot>
	  ```
	  使用具名插槽：
	  ```
		<BaseLayout>
		  <template v-slot:xxxx>
			<!-- xxxx 插槽的内容放这里 -->
		  </template>
		</BaseLayout>
	  ```
	  简写：
	  `v-slot` 有对应的简写 `#`，因此 `<template v-slot:header>` 可以简写为 `<template #header>`

  * 条件插槽： 例如： `v-if="$slots.header"`
  * 动态插槽名： 
	`v-slot:[dynamicSlotName]` 简写： `#[dynamicSlotName]`
  * 作用域插槽
  
	```
	<!-- <MyComponent> 的模板 -->
	<div>
	  <slot :text="greetingMessage" :count="1"></slot>
	</div>
	
	<MyComponent v-slot="slotProps">
	  {{ slotProps.text }} {{ slotProps.count }}
	</MyComponent>
	```
	
  * 无渲染组件
  组件只包括了逻辑而不需要自己渲染内容，视图输出通过作用域插槽全权交给了消费者组件。我们将这种类型的组件称为无渲染组件。
  
  ## 依赖注入
  
  解决 `prop` 逐级透传
  父组件提供：
  ```
	export default {
	  provide: {
		message: 'hello!'
	  }
	}
  ```
  子组件注入：
  ```
	export default {
	  inject: ['message'],
	  created() {
		console.log(this.message) // injected value
	  }
	}
  ```
  * 注入别名
  * 注入默认值
  
  ## 异步控件
  
  1. ES 模块动态导入
  2. 全局注册组件和局部注册组件
  3. 加载与错误状态
  
  惰性激活 ：（服务器端渲染时使用）
  * 在空闲时进行激活
  * 在可见时激活
  * 在媒体查询匹配时进行激活
  * 交互时激活
  * 自定义策略
  
  ## 组合式函数
  
  ## 自定义指令
  自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。
  
  ## 插件
  
  ## 内置组件
  
  `Transition` `TransitionGroup` `KeepAlive` `Teleport` `Suspense`
  
  ## reactive和ref的区别
  ```
		function reactive(obj) {
		  return new Proxy(obj, {
			get(target, key) {
			  track(target, key)
			  return target[key]
			},
			set(target, key, value) {
			  target[key] = value
			  trigger(target, key)
			}
		  })
		}

		function ref(value) {
		  const refObject = {
			get value() {
			  track(refObject, 'value')
			  return value
			},
			set value(newValue) {
			  value = newValue
			  trigger(refObject, 'value')
			}
		  }
		  return refObject
		}
  ```

  * `ref`接受任何类型的值（原始类型和对象类型），访问和修改时需要通过 .value 属性
  * `reactive`只能接受对象类型（Object, Array, Map, Set），访问和修改时直接操作对象属性
  * `ref` 通过创建一个包装对象，并利用 Object.defineProperty 的 get 和 set 来追踪值的变化。
  当我们访问 myRef.value 时，它会收集依赖；当我们修改 myRef.value 时，它会触发更新。
  * `ref` 处理原始类型（String, Number, Boolean 等）的响应式数据；处理对象类型，当你可能需要对整个对象进行替换时（即：替换value属性）。
  * `reactive` 使用 ES6 的 Proxy 来实现。它会拦截对对象属性的所有操作（读取、设置、删除等），从而实现依赖收集和更新触发。
  * `reactive` 处理具有多个属性的复杂对象或数组，将其作为一个整体进行管理。
  * `reactive` 仅限对象类型：不能用于原始类型；如果对 reactive 对象进行解构，或者将属性赋值给新变量，会失去响应性。

  最佳实践：
  1. 定义单个变量（或原始类型）时使用 `ref`。
  2. 定义一个复杂的对象时（将多个相关的变量组织在一个对象），推荐使用 `reactive`，使得状态管理更集中，代码更清晰。
  3. 基础数据用 `ref`：管理组件中零散的、独立的响应式数据。
  4. 聚合数据用 `reactive`：将一个逻辑单元（比如一个表单）的所有数据聚合在一个对象中，使其更具内聚性。
  

  
  ## XSS
  XSS 的全称是 跨站脚本攻击 (Cross-Site Scripting)，为了和 CSS (层叠样式表) 区分，所以缩写为 XSS。
  
  核心原理是：攻击者通过某种方式，将恶意的脚本代码（通常是 JavaScript）注入到网页中，当其他用户访问这个网页时，这些恶意脚本就会在用户的浏览器里执行。
  
  * 窃取用户信息：最常见的是窃取用户的 Cookie，从而冒充用户登录。
  * 劫持会话：在用户不知情的情况下，替用户执行操作，比如发帖、转账等。
  * 篡改网页内容：在页面上显示虚假信息，进行钓鱼欺诈。
  * 监控用户行为：记录用户的键盘输入等。
  
  导致 XSS 漏洞：（网站盲目地信任了用户的输入，并且没有经过充分的检查和处理，就直接把用户输入的内容输出到了页面上。）
  1. 直接在 HTML 中插入用户输入
  2. 在 HTML 属性中插入用户输入
  3. 在 JavaScript 代码中插入用户输入
  4. 富文本编辑器处理不当
  5. URL 参数处理不当
  永远不要信任用户的任何输入，并对所有要在页面上显示的用户数据进行严格的编码和转义。
  
  ## 深入响应式系统
  Vue 的响应性系统是通过深度转换普通 JavaScript 对象为响应式代理来实现的。
  
  状态机是一种数据模型，用于描述应用可能处于的所有可能状态，以及从一种状态转换到另一种状态的所有可能方式。
  
  信号是与 Vue 中的 ref 相同的响应性基础类型。它是一个在访问时跟踪依赖、在变更时触发副作用的值容器。
  
  ## 渲染机制
  一个运行时渲染器将会遍历整个虚拟 DOM 树，并据此构建真实的 DOM 树。这个过程被称为挂载 (mount)。
  
  如果我们有两份虚拟 DOM 树，渲染器将会有比较地遍历它们，找出它们之间的区别，并应用这其中的变化到真实的 DOM 上。这个过程被称为更新 (patch)。
  
  在实践中，模板对大多数的应用场景都是够用且高效的。渲染函数一般只会在需要处理高度动态渲染逻辑的可重用组件中使用。
  
  带编译时信息的虚拟 DOM： （可以为紧密耦合的模板渲染器应用许多编译时优化）
  缓存静态内容、更新类型标记、树结构打平、对 SSR 激活的影响
  
  ## 服务端渲染 (SSR)
  Vue 也支持将组件在服务端直接渲染成 HTML 字符串，作为服务端响应返回给浏览器，最后在浏览器端将静态的 HTML“激活”(hydrate) 为能够交互的客户端应用。
  * 更快的首屏加载
  * 统一的心智模型
  * 更好的 SEO
  
  静态站点生成（SSG）VS 服务端渲染 (SSR)
  
  ## 渲染函数 & JSX
  创建 Vnodes ：h()、createVNode()
  render 选项来声明渲染函数
  
  JSX 是 JavaScript 的一个类似 XML 的扩展。
  函数式组件是一种定义自身没有任何状态的组件的方式。
  
  TSX 文件格式（.tsx）是 TypeScript 和 JSX 的结合。
  允许在 TypeScript 代码中直接编写类似 HTML 的代码
  
  * TS (TypeScript): 带有类型检查的 JavaScript，让代码更健壮、更易于维护。
  * X (JSX): 一种 JavaScript 的语法扩展，看起来很像 HTML，专门用来描述用户界面应该是什么样子。
  
  一个 `.tsx` 文件，通常可以认为它是一个定义了用户界面组件的 `TypeScript` 文件，常见于 `React` 或 `Vue` 这样的前端框架中。
  
  ## 路由
  
  ## 状态管理
  

  ## 启动时，文件顺序
  
	```
	npm run dev
		↓
	vite 命令执行
		↓
	读取 vite.config.js
		↓
	扫描入口文件 src/main.js / src/main.ts
		↓
	main.js 导入 App.vue 和 router/store 等
		↓
	App.vue -> template + script + style 分别由 Vite Vue 插件处理
		↓
	浏览器请求资源时，Vite 进行按需编译和模块缓存
		↓
	页面呈现，支持 HMR 热更新
	```
	
  ## 命名导出与默认导出的区别
	命名导出 (export const Greeting):

	* 使用 `export` 关键字直接导出特定的变量、函数或组件
	* 导出时保持原有的名称
	* 导入时必须使用花括号 `{}` 包裹，并且名称必须完全匹配
	
	默认导出 (export default LotsOfGreetings):
	
	* 每个模块只能有一个默认导出
	* 导入时不使用花括号，且可以使用任意名称
	
  ## React Native
  ## React 的核心概念：
	* components 组件
	* JSX
	* props 属性
	* state 状态

  ## Flexbox 布局（核心）：
	* `flexDirection`(主轴方向) 与 `direction` (布局方向)
	* `justifyContent` (子元素主轴排列方式) 与 `alignItems` (子元素次轴对齐方式) 与 `alignself` (单个子元素更改在父级对齐方式)
	* `alignContent` (沿次轴分布行的排列方式,配合 `flexWrap` 生效)
	* `flex` / `flexWrap` / `flexShrink` / `flexBasis` / `flexGrow`
	* `Row Gap` / `Column Gap` / `Gap`
	
	详细：
    1. 与 `Web` 的 `CSS` 默认值不同：
	`flexDirection` 的默认值为 `column`（而不是 `row`）,
	`alignContent` 默认值为 `flex-start` （而不是 `stretch`）, 
	`flexShrink` 默认值为0 （而不是1）, 
	而 `flex` 只能指定一个数字值.

    2. `flex` 属性决定元素在主轴上如何填满可用区域
	按照比例填充垂直方向或者水平方向，配合 `flexDirection: "column"` 判断,
	flexWrap: "wrap", 换行
	flexWrap: "nowrap", 不换行

    3. 创建动态样式对象
	中括号 `[]` 用于创建动态样式对象，这是 JavaScript 的计算属性名（Computed Property Names）语法,
	允许在对象字面量中使用变量作为属性名 例如：``` { [label]: selectedValue } ``` => ``` { flexDirection: selectedValue } ``` 
	
	4. 布局方向
	布局方向: `direction` 区别于：布局主轴: `flexDirection` 
	LTR（默认值）: 文本和子元素从左到右进行排列。
	RTL: 文本和子元素从右到左进行排列。
	
	5. 决定其子元素沿着主轴的排列方式
	justifyContent:
	* `flex-start`（默认值）将容器中的子元素沿主轴起始位置对齐。

	* `flex-end` 将容器中的子元素沿主轴末尾位置对齐。

	* `center` 将容器中的子元素在主轴上居中对齐。

	* `space-between` 在容器的主轴上均匀分布子元素，将剩余空间平均分配给子元素之间。

	* `space-around` 在容器的主轴上均匀分布子元素，将剩余空间围绕在每个子元素周围。与space-between相比，使用space-around会导致空间被分配到第一个子元素和最后一个子元素之前和之后。

	* `space-evenly` 在对齐容器内沿着主轴均匀分布子项。每一对相邻项、主开始边缘和第一项以及主结束边缘和最后一项之间的间距都完全相同。

	6. 决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式
	alignItems:
	* `stretch`（默认值）：将容器的子元素拉伸以匹配容器次轴的高度。

	* `flex-start`：将容器的子元素对齐到容器次轴的起始位置。

	* `flex-end`：将容器的子元素对齐到容器次轴的末尾位置。

	* `center`：将容器的子元素居中对齐于容器次轴上。

	* `baseline`：沿着公共基线对齐容器的子元素。可以为各个子元素设置参考基线，作为其父级基线。
	
	7. `alignself` 应用于单个子元素以更改其在父级中的对齐方式
	（与 alignItems 具有相同的选项和效果，alignSelf 会覆盖由父级设置的任何使用 alignItems 的选项。）
	
	8. `alignContent` 定义了沿次轴分布行的方式。只有在使用 `flexWrap` 将项目换行到多个行时才会生效。
	* `flex-start`（默认值）：将换行后的行与容器的次轴起始位置对齐。

	* `flex-end`：将换行后的行与容器的次轴末尾位置对齐。

	* `stretch`（在 Web 上使用 Yoga 时的默认值）：拉伸换行后的行以匹配容器的次轴高度。

	* `center`：将换行后的行居中对齐于容器的次轴。

	* `space-between`：均匀地在容器的次轴上间隔排列换行后的各个线，使剩余空间平均分布在这些线之间。

	* `space-around`：均匀地在容器的次轴上间隔排列换行后各个线，使剩余空间平均分布在这些线周围。
	相较于使用 `space-between`，使用 `space-around` 会导致空白区域被分配到第一条线和最后一条线之前及之后两端。
	
	9. 设置容器的换行方式
	`flexWrap` 控制了当子元素超出容器在主轴上的尺寸时要如何处理。默认情况下，子元素被强制放置在一行中（这可能会使元素被挤压）。
	如果允许换行，则项目将根据需要沿主轴分为多行。
	
	10. `flexBasis` 是一种独立于轴线的方式，用于提供项目沿主轴的默认大小。设置该子项的 width 或者 height。
	
	11. `flexGrow` 描述了在主轴上如何分配容器中剩余空间给其子项。

	12. `flexShrink` 描述了当所有子项总尺寸超过主轴上容器尺寸时，在溢出情况下如何收缩各个子项。
	
	13. `Row Gap`, `Column Gap` 以及 `Gap`

	14. 宽度与高度：
	* auto（默认值）：根据元素的内容计算其宽度/高度
	* pixels：以绝对像素定义宽度/高度
	* percentage：分别以父级宽度或高度的百分比定义宽度或高度。
	
	15. 绝对与相对定位
	* relative（默认值） 默认情况下，一个元素是相对定位的。根据 top、right、bottom 和 left 的值进行偏移。
	* absolute 绝对定位时，一个元素不参与正常布局流程。位置是基于 top, right, bottom, 和 'left' 值来确定的。
	
  ## 图片
	1. 加载本地资源
	```
	<Image source={require('./my-icon.png')} />;
	
	或
	
	<Image
		source={{ uri: 'app_icon' }}
		style={{ width: 40, height: 40 }}
	/>
	
	或
	
	<Image
	  source={{ uri: 'asset:/app_icon.png' }}
	  style={{ width: 40, height: 40 }}
	/>
	```
	
	2. 加载网络资源
	```
	<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
		   style={{width: 400, height: 400}} />
		   
	加参数:
	
	<Image
	  source={{
		uri: 'https://facebook.github.io/react/logo-og.png',
		method: 'POST',
		headers: {
		  Pragma: 'no-cache'
		},
		body: 'Your Body goes here'
	  }}
	  style={{ width: 400, height: 400 }}
	/>
	
	Base64:
	
	<Image
	  style={{
		width: 51,
		height: 51,
		resizeMode: 'contain'
	  }}
	  source={{
		uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
	  }}
	/>
	```
	
	3. 缓存控制（iOS only）
	* default: 使用原生平台默认策略。
	* reload: URL 的数据将从原始地址加载。不使用现有的缓存数据。
	* force-cache: 现有的缓存数据将用于满足请求，忽略其期限或到期日。如果缓存中没有对应请求的数据，则从原始地址加载。
	* only-if-cached: 现有的缓存数据将用于满足请求，忽略其期限或到期日。如果缓存中没有对应请求的数据，则不尝试从原始地址加载，并且认为请求是失败的。
	```
	<Image
	  source={{
		uri: 'https://facebook.github.io/react/logo-og.png',
		cache: 'only-if-cached'
	  }}
	  style={{ width: 400, height: 400 }}
	/>
	```
	
	4. 最佳实践
	* 本地图片 不需要设定宽高值
	* 图片设定为资源属性对象
	
	5. 背景图片与嵌套写法
	```
	return (
	  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
		<Text>Inside</Text>
	  </ImageBackground>
	);
	```
	
	6. 配置 iOS 图像缓存限制
	```
	RCTSetImageCacheLimits(4*1024*1024, 200*1024*1024);
	```
	
  ## 颜色
  * PlatformColor 允许您引用平台的颜色系统。
  * DynamicColorIOS 是 iOS 特有的，可以让您指定在浅色或深色模式下使用哪些颜色。
  ``` 
	// 引用平台的颜色
	{
	  color: PlatformColor('?android:attr/textColor'),
	  backgroundColor:PlatformColor('@android:color/holo_blue_bright'),
	}
	  
	const customContrastDynamicTextColor = DynamicColorIOS({
	  dark: 'darkgray',
	  light: 'lightgray',
	  highContrastDark: 'black',
	  highContrastLight: 'white',
	});
	
	// 红-绿-蓝 
	'#f0f' (#rgb)
	'#ff00ff' (#rrggbb)
	'rgb(255, 0, 255)'
	'rgba(255, 255, 255, 1.0)'
	
	// 色调-饱和度-亮度 (HSL)
	'hsl(360, 100%, 100%)'
	'hsla(360, 100%, 100%, 1.0)'
	
	// 全透明颜色值rgba(0,0,0,0)
	'transparent'
	
	// 颜色名称
	'aliceblue' ...
  ``` 
	
  ## Touchable 系列组件
  * TouchableHighlight 制作按钮或者链接，手指按下时变暗
  * TouchableNativeFeedback 类似墨水涟漪的视觉效果(Android)
  * TouchableOpacity 用户手指按下时降低按钮的透明度，而不会改变背景的颜色
  * TouchableWithoutFeedback 处理点击事件的同时不显示任何视觉反馈
  
  ## React Navigation 导航器
  
  ## 动画
  1. Animated：创建精细的交互控制的动画
  封装了 6 个可以动画化的组件：View、Text、Image、ScrollView、FlatList和SectionList
  Animated.createAnimatedComponent()来封装自定义组件
  
  配置动画、组合动画
  
  合成动画值：加减乘除以及取余等运算来把两个动画值合成为一个新的动画值
  插值（interpolate）：插值是指将一定范围的输入值映射到另一组不同的输出值
  
  跟踪动态值：
  跟踪手势：
  
  启用原生动画驱动：
  ```
	Animated.timing(this.state.animatedValue, {
	  toValue: 1,
	  duration: 500,
	  useNativeDriver: true, // <-- 加上这一行
	}).start();
  ``` 
  
  
  2. LayoutAnimation：用于全局的布局动画
  
  允许在全局范围内创建和更新动画，这些动画会在下一次渲染或布局周期运行。它常用来更新 flexbox 布局
  
  3. 其他
  `requestAnimationFrame`: 接受一个函数作为唯一的参数，并且在下一次重绘之前调用此函数。一些基于 JavaScript 的动画库高度依赖于这一 API。
  
  `setNativeProps`：可以直接修改基于原生视图的组件的属性，而不需要使用 `setState` 来重新渲染整个组件树。
  
  ## 手势响应系统
  
  1. 响应者的生命周期
  2. 捕获 ShouldSet 事件处理
  
  ## 网络
  发起请求：
  ```
	fetch('https://mywebsite.com/endpoint/', {
	  method: 'POST',
	  headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
		firstParam: 'yourValue',
		secondParam: 'yourOtherValue',
	  }),
	});
  ``` 
  
  处理响应数据：
  ```
	function getMoviesFromApiAsync() {
	  return fetch(
		'https://facebook.github.io/react-native/movies.json',
	  )
		.then(response => response.json())
		.then(responseJson => {
		  return responseJson.movies;
		})
		.catch(error => {
		  console.error(error);
		});
	}
  ``` 
  
  使用其他的网络库:
  React Native 中已经内置了XMLHttpRequest API(也就是俗称的 ajax)。
  一些基于 XMLHttpRequest 封装的第三方库也可以使用，例如frisbee或是axios等

  WebSocket 支持:

  ## 安全
  1. 保存敏感信息
  * Async Storage
  * 安全存储
  
  2. 认证和深度链接（Deep Linking）
  当操作系统在打开链接时有两个或更多应用程序可供选择时，Android会向用户显示一个模态框并询问他们使用哪个应用程序来打开链接。
  
  3. OAuth2 和重定向
  OAuth2 认证协议现在非常流行，被誉为最完整和安全的协议之一，OpenID Connect 协议也是基于此构建的. 
  在 OAuth2 中, 用户需要通过第三方进行身份验证. 成功完成后, 第三方会带着一个验证码重新定向回请求的应用, 
  这个验证码可以用来交换 JWT - 即JSON Web Token.
  
  PKCE(Proof of Key Code Exchange)，是对OAuth 2规范的一个扩展。这涉及到增加了一层安全措施，
  用来验证身份验证和令牌交换请求来自同一个客户端。使用了SHA256加密哈希算法。
  
  SHA256:
  * 不管输入文件的大小总是保持一致的长度
  * 对同样的输入始终产生一样的结果
  * 是单向的（也就是说你不可以通过它反向工程出原始输入）
  
  * code_verifier -由客户端生成的大随机字符串
  * code_challenge - code_verifier 的 SHA256
  
  API使用SSL加密：
  SSL加密可以防止请求的数据在离开服务器后、到达客户端之前以明文形式被读取。
  您可以通过端点以https://而不是http://开头来判断它是安全的。
  
  中间人攻击: （ `使用SSL固定` 方案解决中间人攻击）
  在HTTPS中，只有当服务器能够提供由 `预装在客户端` 上的可信证书颁发机构签名的有效 `证书` 时，客户端才会信任该服务器。
  `在用户的设备上安装恶意根CA证书`，这样客户端就会信任所有由攻击者签名的证书.
  
  `SSL固定` ：工作原理是在开发期间将受信任的证书列表嵌入（或固定）到客户端中，以便只接受用其中一个受信任的证书签名的请求，并 `拒绝任何自签名的证书`。
	
  要点：
  从未首先请求的信息更难被获取。
  
  ## 调试
  1. 访问 App 内的开发菜单
  adb shell input keyevent 82
  
  2. 打开调试器
  chrome://inspect
  "Configure..." -> localhost:8081
  inspect -> "Hermes React Native"
  
  3. React DevTools
  ```
  npm install -g react-devtools
  react-devtools
  ``` 
  npx react-devtools
  React Developer Tools
  
  4. LogBox

  ## React Native 开发者工具
  * Console
  * Sources 和断点
  
  ## 调试原生代码
  日志：
  ```
	# For Android:
	npx react-native log-android
	# Or, for iOS:
	npx react-native log-ios
  ```

  源映射生成：
  使用 metro-symbolicate
  ```
	react {
		hermesFlags = ["-O", "-output-source-map"]
	}
  ```
  
  ## 测试
  1. 静态分析（ESLint 用于 linting，TypeScript 用于类型检查）
  2. 结构化测试
	* 应该简短且理想情况下只测试一件事
  3. 单元测试
	* 覆盖代码的最小部分，如单个函数或类
  4. 集成测试
	* 真正的单元被组合在一起（与你的应用相同），并一起测试以确保它们协作正常
  5. 组件测试
	* 组件测试可以属于单元测试和集成测试，但由于它们是 React Native 的核心部分
	* 交互：确保组件在用户交互时正确行为（例如，当用户按下按钮时）
	* 渲染：确保组件的渲染输出正确（例如，按钮的外观和在 UI 中的位置）
  6. 端到端测试(E2E)
	* 尝试从用户的角度来验证应用在设备（或模拟器 / 模拟器）上的工作情况，通过在发布配置中构建应用并运行测试来完成的。
	* E2E 测试库允许你找到并控制应用屏幕上的元素
	* 更容易出现“flaky”（一个“flaky”测试是随机通过和失败的测试，没有任何代码更改）
	
  ## 性能综述
  * 目标：使 App 可以达到每秒 60 帧（足够流畅）/ 16.67ms 来完成生成一张静态图片（帧）所需要的所有工作，并且能有类似原生 App 的外观和手感。
  * 务必注意在release 模式 （dev=false）下去测试性能
  * `yarn add --dev babel-plugin-transform-remove-console` 移除控制台打印日志
  ```
	{
	  "env": {
		"production": {
		  "plugins": ["transform-remove-console"]
		}
	  }
	}
  ```
  
  1. JS 帧率(JavaScript 线程)
  2. UI 帧率(主线程)
  
  ## 优化编译速度
  1. 仅构建一个ABI
  ```
	$ ./gradlew :app:assembleDebug -PreactNativeArchitectures=x86,x86_64
  ```
  
  2. 启用 Gradle 配置缓存
  ```
	android/gradle.properties
	
	org.gradle.configuration-cache=true
  ```
  
  3. 使用ccache来缓存您的本地构建编译过
  ```
	brew install ccache
	yarn react-native run-android
	ccache -s
	ccache --zero-stats
	ccache --clear
  ```

  4. 分布式缓存
  
  ## 列表配置优化
  * removeClippedSubviews
  * maxToRenderPerBatch
  * updateCellsBatchingPeriod
  * initialNumToRender
  * windowSize
  
  1. React.memo() 
  会创建一个带有记忆化功能的组件，props 发生变化时，该组件才会重新渲染
  
  2. 使用优化缓存的图片库
  3. 使用 getItemLayout
  4. 使用 keyExtractor 或 key
  5. 避免在 renderItem 中使用匿名函数
  
  ## 优化 JavaScript 加载
  1. 使用 Hermes
  在发布版本中，JavaScript 代码会完全提前编译成字节码。字节码按需加载到内存中，并不需要像普通 JavaScript 那样进行解析。
  
  2. 延迟加载大型组件（避免模块副作用）
  使用 React 的 lazy API 来推迟加载其代码，直到它首次呈现。
  
  3. 内联调用 require
  
  4. 自动内联 require 调用
  内联 require 调用会改变模块的评估顺序，甚至可能导致某些模块 永远不被评估。
  这通常可以安全地自动进行，因为 JavaScript 模块通常被编写为无副作用。
  
  5. 使用随机访问模块包（非 Hermes）
  
  ## JavaScript 环境
  1. 使用Hermes引擎：
  专门为 React Native 而优化的一个新式开源 JavaScript 引擎。
  
  2. 使用JavaScriptCore：
  Safari 所使用的 JavaScript 引擎。但是在 iOS 上 JavaScriptCore 并没有使用即时编译技术（JIT），
  因为在 iOS 中应用无权拥有可写可执行的内存页（因此无法动态生成代码）。
  
  3. V8 引擎
  
  ## 定时器 
  （务必在卸载组件前清除定时器）
  1. setTimeout, clearTimeout
  2. setInterval, clearInterval
  3. setImmediate, clearImmediate
  4. requestAnimationFrame, cancelAnimationFrame
  
  * requestAnimationFrame(): 用来执行在一段时间内控制视图动画的代码
  * setImmediate/setTimeout/setInterval(): 在稍后执行代码。注意这有可能会延迟当前正在进行的动画。
  * runAfterInteractions(): 在稍后执行代码，不会延迟当前进行的动画。
  
  最佳实践：
  铭记在unmount组件时清除（clearTimeout/clearInterval）所有用到的定时器即可

  ## 编译应用的正式发布版本
  ```
  $ npx react-native run-android --variant release
  
  $ npx react-native run-ios --configuration Release
  ```

  ## Codegen
  Codegen 生成的脚手架代码，避免编写大量重复代码的工具。

  Codegen 会遍历您项目中的文件夹，从 package.json 中指定的目录开始，寻找包含特定 API 规范（或规范）的 JS 文件。
  规范文件是用一种类型化方言编写的 JS 文件：React Native 目前支持 Flow 和 TypeScript。

  ## 桥接原生平台
  * 原生模块: 没有用户界面的原生库。例如：持久存储、通知、网络事件。这些可以通过 JavaScript 函数和对象访问。
  * 原生组件: 原生平台视图、小部件和控制器，通过 React 组件可供你的应用的 JavaScript 代码使用。
  
  旧架构：
  JavaScript (JS) 与原生 (Native) 之间的通信依赖一个异步、可序列化的桥 (Bridge)，所有数据（UI 更新、方法调用）都必须被序列化成 JSON 字符串，
  通过 Bridge 传递，然后被原生端反序列化。这个过程是异步的，且有性能开销，尤其是在高频交互（如动画、手势）时，容易导致 UI 卡顿。
  
  新架构：
  引入了 JSI (JavaScript Interface)。JSI 是一个轻量级的 C++ 层，它允许 JS 直接持有对原生对象的引用并调用其方法，反之亦然。
  这个调用过程是同步的，并且无需序列化/反序列化。

  1. Turbo 原生模块
  * 替代 `NativeModules`，用于原生**功能**调用
  * JSI, C++
  * 同步/异步方法调用
  * 懒加载、启动快、类型安全、同步调用
  
  2. Fabric 原生组件
  * 替代 `ViewManager`，用于原生**UI**组件
  * JSI, C++, 新的渲染管线和 Shadow Tree
  * 同步 Props 更新、事件和命令
  * 同步渲染、性能高、与 React 18 并发兼容



