// display：table和本身的table有什么区别
// table要全部加载完之后才显示出来
// display tanle 可以 大小不固定的元素垂直居中 两列垂直居中
// 等高布局

// 常见浏览器内核有哪些

// Trident ie
// WebKit Safari、旧版的Chrome
// Presto Opera
// Blink Chrome、Opera
// Gecko Firefox
// Chromium 国内的大部分双核浏览器都采用Chromium内核

// css 预处理器 SASS、LESS和Stylus 优点：语言级逻辑处理，动态特性，改善项目结构 缺点：采用特殊语法，框架耦合度高，复杂度高
// css 后处理器框架postcss 使用 CSS 语法，容易进行模块化，贴近 CSS 的未来标准 逻辑处理能力有限



// 前端路由和后端路由的区别

// 路由
// 路由是根据不同的 url 地址展示不同的内容或页面；

// 前端路由
// 前端路由一般说的是spa，不再是切换页面而是切换组件
// 因为无需进行http请求，节省了数据交换的时间 所以前端路由体验更好 切换更快
// 缺点是前进后退会重新发送请求，没有合理利用缓存资源。

// 后端路由/服务端路由
// 后端路由将url映射成了对应函数
// 安全性好、利于seo
// 加大服务器压力，对用户体验不好，代码耦合大

// JS哪些操作会造成内存泄露

// 被遗忘的定时器或者回调 setTimeout setInterval 闭包 全局变量 没有清理的DOM元素引用


// 解决Ajax缓存问题的方法
// 在ajax发送请求前加上 xmlHttpRequest.setRequestHeader(“Cache-Control”,”no-cache”);
// 在服务端加 header(“Cache-Control: no-cache, must-revalidate”);
// 在ajax发送请求前加上 xmlHttpRequest.setRequestHeader(“If-Modified-Since”,”0″);
// 在 Ajax 的 URL 参数后加上 "?fresh=" + Math.random(); // 当然这里参数 fresh 可以任意取了
// 第五种方法和第四种类似，在 URL 参数后加上 "?timestamp=" + new Date().getTime();

// js如何往数组Array中添加元素
// push  unshift splice concat

// ES6 新增的数组方法
// Array.from() 将类对象转为真正的数组
// Array.of() 将一组值，转换为数组
// find() 和 findIndex()
// find()方法找到第一个符合条件的成员 没有符合的则返回 undefined
// findIndex 方法的用法与 find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
// 数组实例的 fill()
// 数组实例的 entries()，keys() 和 values()
// keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
// includes()方法返回一个布尔值
// 数组实例的 flat()，flatMap()
// flat()用于将嵌套的数组“拉平”，变成一维的数组
// flatMap()只能展开一层数组

// set map object
// map 和 object
// map 只能用new Map()声明
// 访问元素的方法不同
// 插入元素
// 删除元素
// 清空
// 元素的迭代
// Map有内置的迭代器，Object没有内置的迭代器

// weakset 成员都是对象
// weakmap 键名只能是对象 但是map 都可以


// react 事件机制
// 全部注册在document上 统一派发
// 可以大量节省内存占用，减少事件注册。比如ul上代理所有li的click事件就很不错
// 优点：可以实现当新增子对象时，无需再对其进行事件绑定，对于动态内容部分尤为合适
// 缺点：事件代理的常用应用应该仅限于上述需求，如果把所有事件都用事件代理，可能会出现事件误判。即本不该被触发的事件被绑定上了事件。


// 箭头函数与正常函数有哪些区别
// 语法更加简洁、清晰
// 箭头函数不会创建自己的this
// 箭头函数继承而来的this指向永远不变
// .call()/.apply()/.bind()无法改变箭头函数中this的指向
// 箭头函数不能作为构造函数使用
// 箭头函数没有自己的arguments
// 箭头函数没有原型prototype
// 箭头函数不能用作Generator函数，不能使用yeild关键字

// ajax axios fetch的区别

// axios 基于promise用于浏览器和node.js的http客户端
// fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象

// axios更好一些
// 从浏览器中创建 XMLHttpRequest
// 从 node.js 创建 http 请求。
// 支持 Promise API。
// 支持拦截请求和响应。
// 转换请求和响应数据。
// 取消请求。
// 客户端支持防止CSRF。
// 客户端支持防御 XSRF。
// axios既提供了并发的封装，也没有fetch的各种问题，而且体积也较小，当之无愧现在最应该选用的请求的方式。


// a11y是什么，如何理解

// Accessibility，通常缩写为 A11Y ，这缩写取的是首字母 + 中间字母长度 + 结尾字母，译为 “可访问性”。

// 理解ES6中的暂时死区(TDZ)
// 运行流程一进入作用域创建变量，到变量开始可被访问之间的一段时间，就称之为TDZ(暂时死区)。
// 当程序的控制流程在新的作用域(module, function或block作用域)进行实例化时，在此作用域中的用let/const声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，也就是对声明语句进行求值运算，所以是不能被访问的，访问就会抛出错误。

// 实现cacheRequest()，相同资源ajax只发一次请求

const dict = new Map()

// 这里简单的把url作为cacheKey
const cacheRquest = (url) => {
  if (dict.has(url).status == 'success') {
    return dict.get(url).resolve;
  } else if (dict.has(url).status == 'padding') {
    return dict.get(url).promise;
  } else {
    // 无缓存，发起真实请求，成功后写入缓存
    let _request = request(url);
    dict.set(url, _request)
    return _request.then(res => {
      return res
    }).catch(err => Promise.reject(err))
  }
}

const handleRequest = (url, cacheKey) => {
  setCache(cacheKey, {
    status: 'PENDING',
    resolves: [],
    rejects: [],
    promise: new Promise(),
  })
  const ret = request(url)
  return ret.then(res => {
    // 返回成功，刷新缓存，广播并发队列
    setCache(cacheKey, {
      status: 'SUCCESS',
      response: res,
      promise: ret,
    })
    return Promise.resolve(res)
  }).catch(err => {
    // 返回失败，刷新缓存，广播错误信息
    setCache(cacheKey, { status: 'FAIL' })
    return Promise.reject(err)
  })
}

// 从输入URL到页面加载发生了什么

// DNS解析
// TCP连接
// 发送HTTP请求
// 服务器处理请求并返回HTTP报文
// 浏览器解析渲染页面
// 连接结束


// http keep—alive都解决了哪些问题 keep-alive是从c - nginx建立的还是直接到服务建立的长连接，与websocket有什么区别与联系

// 在以前 HTTP 协议中所谓的 connection ：keep-alive 是指在一次 TCP 连接中完成多个 HTTP 请求，但是对每个请求仍然要单独发 header；所谓的 polling 是指从客户端（一般就是浏览器）不断主动的向服务器发 HTTP 请求查询是否有新数据。
// 这两种模式有一个共同的缺点，就是除了真正的数据部分外，服务器和客户端还要大量交换 HTTP header，信息交换效率很低。它们建立的“长连接”都是伪.长连接，只不过好处是不需要对现有的 HTTP server 和浏览器架构做修改就能实现。

// WebSocket 解决的第一个问题是，通过第一个 HTTP request 建立了 TCP 连接之后，之后的交换数据都不需要再发 HTTP request了，使得这个长连接变成了一个真.长连接。
// 但是不需要发送 HTTP header就能交换数据显然和原有的 HTTP 协议是有区别的，所以它需要对服务器和客户端都进行升级才能实现。

// keep-alive 只是一种为了达到复用tcp连接的“协商”行为，双方并没有建立正真的连接会话，服务端也可以不认可，也可以随时（在任何一次请求完成后）关闭掉。
// http协议决定了浏览器端总是主动发起方，http的服务端总是被动的接受、响应请求，从不主动。而WebSocket协议，在连接之后，客户端、服务端是完全平等的，不存在主动、被动之说。

// bind 实现

Function.prototype.bind = Function.prototype.bind || function bind(thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError(this + ' must be a function');
  }
  var self = this;
  var args = [].slice.call(arguments, 1); // 除去第一个参数
  var bound = function () {
    var boundArgs = [].slice.call(arguments); // 绑定后返回的函数调用的参数
    var finalArgs = args.concat(boundArgs);    // 参数合并
    if (this instanceof bound) {
      if (self.prototype) {
        function Empty() { }
        Empty.prototype = self.prototype;
        bound.prototype = new Empty();
      }
      var result = self.apply(this, finalArgs);
      var isObject = typeof result === 'object' && result !== null;
      var isFunction = typeof result === 'function';
      if (isObject || isFunction) {
        return result;
      }
      return this;
    }
    else {
      return self.apply(thisArg, finalArgs);
    }
  };
  return bound;
}

// js 数组随机打乱
// 写一个数组方法，打乱整个数组顺序，并且每个数字落在各个位置的概率相同
// Array.prototype.shuffle = function () {
//   var array = this;
//   var m = array.length,
//     t, i;
//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//   return array;
// }

var shuffle = function (arr) {
  let end = arr.length - 1;
  let i;
  while (end) {
    i = Math.floor(Math.random() * end);
    [arr[i], arr[end]] = [arr[end], arr[i]];
    end--;
  }
  return arr;
}

console.log(shuffle([2, 3, 4, 5, 7, 9]))


// css 画三角形
// 宽高为0 border四边都有长度 设置一边有颜色
// width: 0;
// height: 0;
// border: 40px solid;
// border - top - color: green;
// 等边三角形可以调节显示color的边的长度
// 有颜色的边的宽度控制的是三角形的高为 h = width / 2

// css画梯形  设置宽高
// width: 20px;
// height: 20px;
// border: 30px solid transparent;
// margin: 40px;
// border-bottom-color: green;