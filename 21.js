// 性能优化
// 代码压缩 无用代码移除 three-shacking  动态异步加载资源
// 使用浏览器缓存 强缓存和协商缓存 强缓存包括 expires cache-control
// Expires 是http1.0的产物，Cache-Control是http1.1的产物，两者同时存在的话，Cache-Control优先级高于Expires；
// 协商缓存 Last-Modified 和 If-Modified-Since / ETag 和 If-None-Match

// cookie 和 session 区别
// cookie存在客户端 session存在服务端

// float和position 同时使用float会失效

// rem 和 vw 工具（px2rem，px2vw）

// 手淘的flexible.js 库 通过判断dpr给html根元素设置不同的font-size
// rem是根em（root em）的缩写 rem是和根元素关联的，不依赖当前元素。不管你在文档中的什么地方使用这个单位，1.2rem的计算值是相等的，等于1.2倍的根元素的字号大小


// 箭头函数的特点
// 箭头函数不绑定this 而是捕捉所在上下文的this作为自己的this
// 箭头函数是匿名函数 不能作为构造函数 不能使用new操作符 也不具有new.target
// 箭头函数不绑定argumnets 取而代之用rest参数...解决 所以箭头函数也没有arguments.callee和arguments.
// 使用bind call apply对箭头函数的this没什么影响 只是传入了一个参数
// 箭头函数没有原型属性
// 不能使用yield关键字
// 箭头函数的 this 永远指向其上下文的 this
// 普通函数的this指向调用它的那个对象

// 堆 栈
// 数据结构 队列 栈
// 栈区（stack）— 由编译器自动分配释放 ，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
// 堆区（heap） — 一般由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收。


// 什么是 eventloop

// 指的是计算机系统的一种运行机制 同步任务 异步任务 执行栈 任务队列 浏览器 node环境

// 原型 prototype 和 __proto__
// 每个对象都有一个__proto__属性 并且指向它的prototype原型对象
// 每个构造函数都有一个prototype原型对象
// prototype原型对象里的constructor指向构造函数本身






// Promise.resolve().then(() => {
//   console.log(2)
//   setTimeout(() => console.log(8), 0)
// });

// new Promise((resolve, reject) => {
//   resolve();
//   console.log(3);
// }).then(() => {
//   console.log(4);
//   setTimeout(() => console.log(9), 0)
// });

// setTimeout(() => {
//   new Promise((resolve, reject) => {
//     resolve(1)
//   }).then(() => console.log(5));
//   setTimeout(() => console.log(7), 0);
// }, 0);

// setTimeout(() => console.log(6), 0);


// 3 2 4 6 5 8 9 7


Promise.resolve().then(() => {
  console.log(2)
  setTimeout(() => console.log(8), 0)
});

new Promise((resolve, reject) => {
  resolve();
  console.log(3);
}).then(() => {
  console.log(4);
  setTimeout(() => console.log(9), 0)
});

setTimeout(() => {
  setTimeout(() => console.log(7), 0);
}, 0);

setTimeout(() => console.log(6), 0);

// dns 解析
// 在浏览器中输入www . qq .com 域名，操作系统会先检查自己本地的hosts文件是否有这个网址映射关系，如果有，就先调用这个IP地址映射，完成域名解析。
// 如果hosts里没有这个域名的映射，则查找本地DNS解析器缓存，是否有这个网址映射关系，如果有，直接返回，完成域名解析。
// 如果hosts与本地DNS解析器缓存都没有相应的网址映射关系，首先会找TCP/ip参数中设置的首选DNS服务器，在此我们叫它本地DNS服务器，此服务器收到查询时，如果要查询的域名，包含在本地配置区域资源中，则返回解析结果给客户机，完成域名解析，此解析具有权威性。

// 如果要查询的域名，不由本地DNS服务器区域解析，但该服务器已缓存了此网址映射关系，则调用这个IP地址映射，完成域名解析，此解析不具有权威性。

// 如果本地DNS服务器本地区域文件与缓存解析都失效，则根据本地DNS服务器的设置（是否设置转发器）进行查询，如果未用转发模式，本地DNS就把请求发至13台根DNS，根DNS服务器收到请求后会判断这个域名(.com)是谁来授权管理，并会返回一个负责该顶级域名服务器的一个IP。本地DNS服务器收到IP信息后，将会联系负责.com域的这台服务器（根域名服务器）。这台负责.com域的服务器收到请求后，如果自己无法解析，它就会找一个管理.com域的下一级DNS服务器地址(http://qq.com)给本地DNS服务器。当本地DNS服务器收到这个地址后，就会找http://qq.com域服务器，重复上面的动作，进行查询，直至找到www  . qq  .com主机。

// 从客户端到本地DNS服务器是属于递归查询，而DNS服务器之间就是的交互查询就是迭代查询。