// ：：：：

// HTML + CSS

// 盒模型

// JS

// js的深浅拷贝

// 继承相关

// 闭包

// this指向

// // 箭头函数的this只和在定义它时候的作用域的this有关，而在哪里或者在哪调用的时候无关

// 箭头函数中的 this 在定义它的时候已经决定了（执行定义它的作用域中的 this），与如何调用以及在哪里调用它无关，包括(call, apply, bind) 等操作都无法改变它的 this。



// 箭头函数：

// 1: 不能作为构造函数 不能使用new

// 2: 不绑定arguments，取而代之是rest参数…解决

// 3: 不会绑定this, 捕获其所在上下文的this 作为自己的值

// 4: 通过call() apply()方法调用一个函数时，只传入一个参数 对this没有影响

// 5: 没有原型属性

// 6: 不能当做Generator函数 不能使用yield关键字



// call apply bind

// Call apply 都只是改变了this的指向，apply是用于参数较多以数组传参，bind不仅改变了this的指向还生成了新的函数，如：cat.eatFinsh, call(dog, '汪汪’)即为this指向了dog,原先是指向cat本身，

// es6解构的使用

//  数组解构

//   let a = [1, 2, 3, [4, 5]]

//   let[num1, num2] = a

//   let[, , num3] = a

//   let[, , , [num4]] = a

//   let[num1, …num] = a

//  对象解构

//   let node = {

//   par: {

//     bas: {

//       name: ‘mi'

//     }

//   }

// }

//   let { par: { bas } } = node

// 在浏览器里输入一个地址发生了什么

// koa的中间件机制

// vue的双向绑定原理

// 计算属性：一个数据受多个数据影响，watch: 一个数据影响多个数据

// 写一个判断数据类型的方法

// Function Type(type){

//   return typeof type === “object” ?Object.prototype.toString.call(type) : typeof type

// }

// 原型和原型链的关系

// 原型：protoType是函数才有得属性，普通对象没有此属性，protoType是构造函数的原型

// _proto_ 每个对象都有这个属性，函数也有。它执行构造函数的原型对象

// constructor：是原型对象上的一个指向构造函数的属性

// es6的class和传统的function的区别

// commjs和es6的export的区别

// egg.js的进程管理

// 对软件工程是怎么理解的

//  软件工程是一门研究工程化方法构建和维护有效的 实用的高质量的软件。

//   涉及：程序的设计语言，数据库，软件开发工具，系统平台，标准，设计模式等等

// 程序设计的7大原则

//  开闭原则

//   修改关闭，开放扩展

//  单一职责所在原则

//   一个类就只负责一个功能

//  里氏替换原则

//   子类对象能够替换其父类对象被使用

//  依赖倒置原则

//   程序设计依赖抽象接口，而不依赖具体实现

//  接口隔离原则

//   降低耦合 依赖

//  迪米特原则

//   一个实体尽可能少的与其他实体发生相互作用

//  合成 / 聚合复用原则

//   尽量使用合成 / 聚合，尽量不要使用继承

// 设计模式

// 有没有写过webpack的loader，plugin

// 服务端渲染和client渲染的区别

// 1: 减少了首页白屏时间, 浏览器不需要等到所有的js文件下载完再去渲染html文件

// 2: 对于SEO(Search Engine Optimazition, 即搜索引擎优化) ，完全无能为力，因为搜索引擎爬虫只认识html结构的内容，而不能识别JS代码内容。

//   所了解的缓存机制

//  1: 强缓存

//   cache - control: max - age=xxxx，public（客户端和服务器都可以缓存）

//   cache - control: max - age=xxxx，private （只在客户端缓存）

//   cache - control: max - age=xxxx，immutable （缓存在xxx秒的时间内有效，即使刷新 也不会请求服务器）

//   cache - control: no - cache（不缓存，但可以协商缓存）

//   cache - control: no - store（都不缓存）



//   2: 协商缓存

//  发请求-- > 看资源是否过期-- > 过期-- > 请求服务器-- > 服务器对比资源是否真的过期-- > 没过期-- > 返回304状态码-- > 客户端用缓存的老资源

//   设置：response header里加etag：“”，last - modified：“”

//   304: 资源未发生变化 用本地资源

//   301 请求的资源被永久移到新位置

// promise 与 async await的区别

// 二分法

// 浏览器执行原理

// eventLoop机制

// 微任务和宏任务的区别是，当执行栈空了，会检查微任务队列中是否有任务，将微任务队列中的任务依次拿出来执行一遍。当微任务队列空了，从宏任务队列中拿出来一个任务去执行，执行完毕后检查微任务队列，微任务队列空了之后再从宏任务队列中拿出来一个任务执行。这样持续的交替执行任务叫做事件循环





// 判断是不是promise: 只需判断输入的 typeof obj.then 是否 === ‘function’

//   判断是不是generator: 只需判断输入的obj.next && obj.throw 是否都为 ‘function’

//   判断是不是 isGeneratorFunction ：

//   function isGeneratorFunction(obj) {
//     var constructor = obj.constructor;
//     if (!constructor) return false;
//     if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
//     return isGenerator(constructor.prototype);
//   }

// commomjs 和 es6 的区别
// 1: commomjs是一个对象，在运行时加载，无法做到静态优化（编译时加载）
//   加载整个模块，即模块里的全部函数会加载进来，
//   commomjs获得是缓存值，是对模块的拷贝，（即原来模块中的值改变不会影响已经加载后的值）可以对commomjs模块重新复制，
//   this指向当前模块
// 2: es6模块不是对象，而是通过export命令输出指定的代码，import命令引入。es6模块在编译时完成模块加载，比commjs加载效率高。可以单独加载某个的方法，this指向undefined
//  es6获得是时时的值，是对模块的引用，对es6模块重写会报错，
//   模块化的理解
// 为啥cdn加速会快
// Cdn的同源策略
// Canvas SVG webGL
// canvas是画板，适用于位图，高数据量高绘制频率的场景，如动画 游戏
// SVG适用于矢量图，低数据量绘制频率的场景 如图形 图表
// WebGL主要做3D展示，动画 游戏




// 普通函数前面加了async后 会隐式的返回一个promise
// var arr = [10, 28, [30, 4, 5, [5, 71, 8], 9], 10, [71, 12]]
// var newArr = []
// function flatArr(arr) {
//   arr.forEach(item => {
//     if (Object.prototype.toString.call(item) === '[object Array]') {
//       newArr = flatArr(item)
//     } else {
//       newArr.push(item)
//     }
//   })
//   newArr = Array.from(new Set(newArr))
//   newArr = newArr.sort(function (a, b) {
//     return a - b
//   })
//   return newArr
// }
// flatArr(arr)
// console.log(newArr)



// function fun(v1, v2) {
//   console.log(v2)
//   return {
//     fun: function (v) {
//       return fun(v, v1);
//     }
//   };
// }
// var a = fun(0);
// a.fun(1);
// a.fun(2);
// var b = fun(0).fun(1).fun(2).fun(3);


// 前端模版引擎

// 链式编码的原理：

// 链式编码的原理是基于作用于链，实现要做的工作

// 1: 对象方法的处理（操作方法）

// 2: 处理完成后返回对象的引用（操作对象）=> this的作用于链；返回对象本身，同this 的区别就是显示返回链式对象 => 闭包返回对象通过调用valueOf方法实现



// Fetch 和 xhr及 axios的区别

// axios和ajax都是对xhr对象的封装 而fetch是window的下一个方法 更底层的方法

// axis：从node.js创建http请求；支持promise APi；客户端支持防止CSRF；提供了一些并发请求的接口

// fetch: 语法简介，更加语义化；基于promise实现，支持async / awit; 更加底层 提供了（request，response）;



// instanceof用于判断一个变量是否某个对象的实例



// 跨域：

// 解决方案：

// 1、 通过jsonp跨域

// 2、 document.domain + iframe跨域
// 3、 location.hash + iframe
// 4、 window.name + iframe跨域
// 5、 postMessage跨域
// 6、 跨域资源共享（CORS）
// 7、 nginx代理跨域
// 8、 nodejs中间件代理跨域
// 9、 WebSocket协议跨域