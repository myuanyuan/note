// React Fiber架构
// React16启用了全新的架构，叫做Fiber，其最大的使命是解决大型React项目的性能问题，再顺手解决之前的一些痛点。

// 之前的一些痛点：
// 1. 组件不能返回数组，最见的场合是UL元素下只能使用LI，TR元素下只能使用TD或TH，这时这里有一个组件循环生成LI或TD列表时，我们并不想再放一个DIV，这会破坏HTML的语义。
// 2.异常处理，我们想知道哪个组件出错，虽然有了React DevTool，但是太深的组件树查找起来还是很吃力。希望有个方法告诉我出错位置，并且出错时能让我有机会进行一些修复工作
// 3.HOC的流行带来两个问题，毕竟是社区兴起的方案，没有考虑到ref与context的向下传递

// webpack import() 动态加载模块踩坑
// 由于webpack需要将所有import()的模块都进行单独打包，所以在工程打包阶段，webpack会进行依赖收集。
// webpack会找到所有import()的调用，将传入的参数处理成一个正则
// import参数中的所有变量，都会被替换为【.*】
// 而webpack就根据这个正则，查找所有符合条件的包，将其作为package进行打包
// import的正确姿势，应该是尽可能静态化表达包所处的路径，最小化变量控制的区域。

// filename和chunkFilename的区别


// MVC,MVVC,MVVM模式的理解

// Model(模型): 数据层，负责存储数据。
// View(视图): 展现层，用户所看到的页面
// Controller(控制器): 协调层，负责协调Model和View，根据用户在View上的动作在Model上作出对应的更改，同时将更改的信息返回到View上。

// MVVM(Model-View-ViewModel)

// Model(模型): 数据层，负责存储数据。
// View(控制器): 就是ViewController层，他的任务就是从ViewModel层获取数据，然后显示。
// ViewModel(视图模型): 就是View和Model层的粘合剂，封装业务逻辑处理，封装网络处理，封装数据缓存。就是把原来ViewController层的业务逻辑和页面逻辑等剥离出来放到ViewModel层。


// Vue 有哪些指令？
// v-html、v-show、v-if、v-for等等

// v-if 和 v-show 有什么区别？
// v-show 仅仅控制元素的显示方式，将 display 属性在 block 和 none 来回切换；而v-if会控制这个 DOM 节点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用v-show会更加节省性能上的开销；当只需要一次显示或隐藏时，使用v-if更加合理。

// vue中Computed 和 Watch的使用和区别

// 计算属性computed适用的情形：一个数据属性在它所依赖的属性发生变化时，也要发生变化，这种情况下，我们最好使用计算属性。

// 监听器watch适当的情形：watch函数适用于，当数据发生变化时，执行异步操作或较大开销操作的情况

// vue 与 react优缺点对比
// vue
// API设计上简单，语法简单，学习成本低
// 构建方面不包含路由和ajax功能，使用vuex, vue-router
// 指令（dom）和组件（视图，数据，逻辑）处理清晰
// 性能好，容易优化
// 基于依赖追踪的观察系统，并且异步队列更新
// 独立触发
// v-model 实时渲染
// 适用于：模板和渲染函数的弹性选择
// 简单的语法及项目搭建
// 更快的渲染速度和更小的体积


// 如何优化SPA应用的首屏加载速度慢的问题？

// 将公用的JS库通过script标签外部引入，减小app.bundel的大小，让浏览器并行下载资源文件，提高下载速度；
// 在配置 路由时，页面和组件使用懒加载的方式引入，进一步缩小 app.bundel 的体积，在调用某个组件时再加载对应的js文件；
// 加一个首屏 loading 图，提升用户体验

// 网页从输入网址到渲染完成经历了哪些过程？
// 输入网址；
// 发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；
// 与web服务器建立TCP连接；
// 浏览器向web服务器发送http请求
// web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）；
// 浏览器下载web服务器返回的数据及解析html源文件；
// 生成DOM树，解析css和js，渲染页面，直至显示完成；

// js实现继承的方法
// 1. 原型链继承 Son.prototype = Father.prototype || Son.prototype = new Father() 弊端 需要手动更改son的constructer
// 2. 借助构造函数继承 弊端：Son只能继承Father自身的属性，而无法继承Father原型中的方法
// 3. 将原型链继承与构造函数结合起来 弊端：通过Father.call() 和 new Father() ,父类构造函数Father被调用了两次。
// 4. 原型式继承

// js有哪些内置对象
// Math对象：Math.abs(x);//用来返回数的绝对值
// Date对象：var date = new Date();// 通过new的方式创建一个日期对象；
// Array对象：var arr=new Array();
// 字符串对象：var str=new String();

// Tree shaking的原理
// Tree shaking的本质是消除无用的JavaScript代码
// 为ES6模块的出现，ES6模块依赖关系是确定的，`和运行时的状态无关`，可以进行可靠的静态分析，这是Tree shaking的基础。

// 使用ES2015(ES6)的模块 因为treeShaking依赖ES6的静态语法：import 和 export
// 避免使用IIFE 立即执行函数
// Webpack Tree shaking对于IIFE的返回函数，如果未使用会被清除

// 使用CommonJS引入模块：require() ，这种引入是动态的，也意味着我们可以基于条件来导入需要的代码：
// CommonJS的动态特性模块意味着tree shaking不适用
// 因为它是不可能确定哪些模块实际运行之前是需要的或者是不需要的

// ES6的import语法完美可以使用tree shaking，因为可以在代码不运行的情况下就能分析出不需要的代码
// 如何使用Tree shaking
// webpack4中只需要将mode设置为production即可开启tree shaking

// 什么是es6静态语法：
// 只能作为模块顶层的语句出现
// import的模块名只能是字符串常量
// import binding 是 immutable的，引入的模块不能再进行修改

// 代码删除 判断程序流，判断变量是否被使用和引用，进而删除代码

// 实现原理可以简单的概况：
// ES6 Module引入进行静态分析，故而编译的时候正确判断到底加载了那些模块
// 静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码


// webpack打包后文件分析
// 文件由一个立即执行函数（IIFE）组成
// __webpack_require__
// 文件路径名做为模块id


// forEach和map的性能要相对于for循环低，你知道为什么低吗？
// map 会返回一个等长数组，forEach 不会，所以 forEach 大于 map。
// for 循环是最简单的，因为它没有任何额外的函数调用栈和上下文；
// forEach 其次，因为它其实比我们想象得要复杂一些 array.forEach(function(currentValue, index, arr), thisValue)
// forEach不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能；
// map 最慢，因为它的返回值是一个等长的全新的数组，数组创建和赋值产生的性能开销很大。



// vue的nextTick是做什么的
// 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
// DOM 更新循环是指什么？
// 下次更新循环是什么时候？
// 修改数据之后使用，是加快了数据更新进度吗？
// 在什么情况下要用到？

// Vue 是异步执行 DOM 更新的

// 应用场景：需要在视图更新之后，基于新的视图进行操作。
// created 和 mounted 阶段，如果需要操作渲染后的试图，也要使用 nextTick 方法

// vue事件循环中有执行栈和任务队列的概念 执行栈中的任务执行结束之后开始执行任务队列
// 任务队列 ：异步任务完成后放入任务队列中回调函数


// webpack中的hash、chunkhash、contenthash区别
// hash构建生成的文件hash值都是一样的，所以hash计算是跟整个项目的构建相关，同一次构建过程中生成的哈希都是一样的
// 采用hash计算的话，每一次构建后生成的哈希值都不一样，即使文件内容压根没有改变。这样子是没办法实现缓存效果，我们需要换另一种哈希值计算方式，即chunkhash。
// chunkhash chunkhash和hash不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。
// contenthash 用于css
// 在chunkhash的例子，我们可以看到由于index.css被index.js引用了，所以共用相同的chunkhash值。但是这样子有个问题，如果index.js更改了代码，css文件就算内容没有任何改变，由于是该模块发生了改变，导致css文件会重复构建。
// 这个时候，我们可以使用extra-text-webpack-plugin里的contenthash值，保证即使css文件所处的模块里就算其他文件内容改变，只要css文件内容不变，那么不会重复构建。

// 响应式布局指的是同一页面在不同屏幕尺寸下有不同的布局
// 响应式布局的实现方案
// 1. 媒体查询
// 2.百分比布局
// 3.rem布局 rem布局的缺点：必须通过js来动态控制根元素font-size的大小，也就是说css样式和js代码有一定的耦合性，且必须将改变font-size的代码放在css样式之前
// 4.视口单位 vw  vh
// 5.搭配vw和rem

// Webpack 怎么给 chunk 包命名，再说说怎么合理分包

// hash chunkhash contenthash
