// webpack

// loader和plugin的区别
// loaders是一个文件加载器/转换器，能够加载资源文件，并对这些文件进行一些处理 比如编译压缩等等 最终打包到指定文件中
// 处理一个文件可以使用多个loader loader的配置顺序和执行顺序是相反的，最后一个先执行 上一个loader的执行返回的结果会作为下一个执行loader的参数
// plugin webpack的运行的生命周期过程中会广播出很多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的api改变输出结果
// loader，它是一个转换器，将A文件进行编译成B文件，比如：将A.less转换为A.css，单纯的文件转换过程
// plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，
// 它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务


// loader，它是一个转换器，将A文件进行编译成B文件，比如：将A.less转换为A.css，单纯的文件转换过程。
// plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务





// 介绍下 webpack 热更新原理

// 1.当修改了一个或多个文件；
// 2.文件系统接收更改并通知webpack；
// 3.webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新；
// 4.HMR Server 使用webSocket通知HMR runtime 需要更新，HMR运行时通过HTTP请求更新jsonp；
// 5.HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。

// webpack 打包 速度太慢怎么办
// 配置externals
// 动态链接库（DllPlugin）
// include
// 删除不需要的一些代码，利用SplitChunksPlugin 进行分块



// file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
// url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
// source-map-loader：加载额外的 Source Map 文件，以方便断点调试
// image-loader：加载并且压缩图片文件
// babel-loader：把 ES6 转换成 ES5
// css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
// style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
// eslint-loader：通过 ESLint 检查 JavaScript 代码




// Object.defineProperty有什么缺陷？

// Object.defineProperty无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
// Object.defineProperty只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy可以劫持整个对象，并返回一个新的对象。
// Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性

// 渲染大量数据时应该怎么优化
// SPA + SSR处理 bigpipe
// 增加加载动画提升用户体验
// 同时避免浏览器处理大量的dom
// 异步渲染组件


// cookie 和 token 都存放在 header 中，为什么不会劫持 token？

// 首先token不是防止XSS的，而是为了防止CSRF的； 2、CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token


// 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片
// 能够完成整个 HTTP 请求+响应（尽管不需要响应内容）
// 触发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
// 跨域友好
// 行过程无阻塞
// 相比 XMLHttpRequest 对象发送 GET 请求，性能上更好
// GIF的最低合法体积最小（最小的BMP文件需要74个字节，PNG需要67个字节，而合法的GIF，只需要43个字节）


// Tree-shaking的原理

// Tree-shaking的本质是消除无用的js代码
// tree-shaking的消除原理是依赖于ES6的模块特性
// ES6 module 特点
// 只能作为模块顶层的语句出现
// import 的模块名只能是字符串常量
// import binding 是 immutable的
// ES6模块依赖关系是确定的，和运行时的状态无关 可以进行可靠的静态分析

// rollup只处理函数和顶层的import/export变量，不能把没用到的类的方法消除掉


// fetch 取消请求
const controller = new AbortController();
controller.abort();


// 扫码登录是如何实现的？

// 用户 A 访问微信网页版，微信服务器为这个会话生成一个全局唯一的 ID，上面的 URL 中 obsbQ-Dzag== 就是这个 ID，此时系统并不知道访问者是谁。
// 用户A打开自己的手机微信并扫描这个二维码，并提示用户是否确认登录。
// 手机上的微信是登录状态，用户点击确认登录后，手机上的微信客户端将微信账号和这个扫描得到的 ID 一起提交到服务器 (二维码ID和用户id/token)
// 服务器将这个 ID 和用户 A 的微信号绑定在一起，（移动端退出， PC 端是不是也需要退出）
// 并通知（轮询到了二维码状态为登录状态）网页版微信，这个 ID 对应的微信号为用户 A，网页版微信加载用户 A 的微信信息，至此，扫码登录全部流程完成