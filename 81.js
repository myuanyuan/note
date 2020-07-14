// 前端工程化
// 前端工程化指什么
// 将软件工程的方法和原理运用在前端开发中，目的是实现高效开发，有效协同，质量可控。
// 狭义的讲，前端工程化是指将开发阶段的代码转变成生产环境的代码的一系列步骤。 主要包括构建，分支管理，自动化测试，部署等。
// 广义的讲，我理解还应该包括开发阶段，其中又包括开发框架搭建，基础工具（请求库、路由库等）选型，视图基础组件库选择等基础工具的选择
// 前端工程化说的则是从工程的角度管理前端开发，形成前端开发流程的一整套开发规范，提高前端开发效率。

// 前端工程化的内容
// 凡是能提高前端工程效率的都叫做工程化

// 开发-》构建-》测试-》部署-》监控埋点-》多人协同

// 开发：前端框架搭建 视图库选择 css方案  请求库 路由 数据管理库  基础组件库  图标库
// 调试：source map / mock
// 构建：编译 babel 打包压缩 webpack

// ...

// Vue Object.defindPropety 和Proxy区别

// 1. Object.defineProperty 只能劫持对象的属性，而 Proxy 是直接代理对象
// 由于 Object.defineProperty 只能对属性进行劫持，需要遍历对象的每个属性，如果属性值也是对象，则需要深度遍历。
// 而 Proxy 直接代理对象，不需要遍历操作

// 2. Object.defineProperty 对新增属性需要手动进行 Observe。
// 由于 Object.defineProperty 劫持的是对象的属性，所以新增属性时，需要重新遍历对象，对其新增属性再使用 Object.defineProperty 进行劫持。
// 也正是因为这个原因,使用 Vue 给 data 中的数组或对象新增属性时，需要使用 vm.$set 才能保证新增的属性也是响应式的。
// 如果采用 proxy 实现，Proxy 通过 set(target, propKey, value, receiver) 拦截对象属性的设置，是可以拦截到对象的新增属性的。


// 3. Proxy支持 13 种拦截操作，这是 defineProperty 所不具有的。

// 4. Proxy 作为新标准，从长远来看，JS 引擎会继续优化 Proxy，但 getter 和 setter 基本不会再有针对性优化

// 5. Proxy 兼容性差

// Object.defineProperty 和 Proxy 本质差别是，defineProperty 只能对属性进行劫持，所以出现了需要递归遍历，新增属性需要手动 Observe 的问题。
// Proxy 作为新标准，浏览器厂商势必会对其进行持续优化，但它的兼容性也是块硬伤，并且目前还没有完整的 polyfill 方案。

// Common.js 和 es6 module 区别

// 在 Commonjs 中，一个文件就是一个模块。定义一个模块导出通过 exports 或者 module.exports 挂载即可。
// exports.count = 1;
// 导入一个模块也很简单，通过 require 对应模块拿到 exports 对象。
// CommonJS 模块加载过程是同步阻塞性地加载，在模块代码被运行前就已经写入了 cache，同一个模块被多次 require 时只会执行一次，重复的 require 得到的是相同的 exports 引用。
// ES6 模块会在程序开始前先根据模块关系查找到所有模块，生成一个无环关系图，并将所有模块实例都创建好，这种方式天然地避免了循环引用的问题，当然也有模块加载缓存，重复 import 同一个模块，只会执行一次代码。

// CommonJS模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
// CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

// 关于两个模块互相引用的问题，在ES6模块当中，是支持加载CommonJS模块的。但是反过来，CommonJS并不能requireES6模块，在NodeJS中，两种模块方案是分开处理的。

// webpack-dev-server 原理和如何处理跨域
// webpack中的proxy只是一层代理，用于把指定的path，代理去后端提供的地址，背后使用node来做server。
// webpack-dev-server启动了一个使用express的Http服务器，这个服务器与客户端采用websocket通信协议，当原始文件发生改变，webpack-dev-server会实时编译。

// 1.webpack-dev-server伺服的是资源文件，不会对index.html的修改做出反应
// 2.webpack-dev-server生成的文件在内存中，因此不会呈现于目录中，生成路径由content-base指定，不会输出到output目录中。
// 3.默认情况下: webpack - dev - server会在content - base路径下寻找index.html作为首页3.默认情况下: webpack-dev-server会在content-base路径下寻找index.html作为首页
// 4.webpack-dev-server不是一个插件，而是一个web服务器，所以不要想当然地将其引入

// 模块热替换
// 1.通过在devServer内将hot设为true并初始化webpack.HotModuleReplacementPlugin
// 命令行加入--hot(如果webpack或者webpack-dev-server开启时追加了--hot, 上述插件能自动初始化，这样就无需加入配置文件中)