

// 组件设计原则

// 解耦 单一职责

// 通用性 组件开发要服务于业务，为了更好的复用，又要从业务中抽离。

// 封装 减少访问全局变量 良好的组件封装应该隐藏内部细节和实现意义，并通过props来控制行为和输出

// 组合 具有多个功能的组件，应该转换为多个小组件

//  dubble click的实现 分为timeout和数组的方式 数组用来记录点击次数和分别点击的时间
// let div = document.getElementById("div");
// doubleClick(div, function (event) {
//   console.log('双击')
// })

// function doubleClick(ele, fn) { // 省略参数合法性的判断
//   let event = new Event("doubleClick"); // 自定义双击事件（可以使用CustomEvent携带数据）
//   // 双击事件监听
//   ele.addEventListener("doubleClick", function (event) {
//     fn(event);
//   });
//   // 双击事件触发
//   let timeout;
//   let clicked = false; // 是否已经点击过一次
//   ele.addEventListener("click", function () {
//     if (clicked) {
//       clicked = false;
//       if (timeout) clearTimeout(timeout);
//       ele.dispatchEvent(event); // 事件分发
//     } else {
//       clicked = true;
//       timeout = setTimeout(function () {
//         clicked = false;
//       }, 400);
//     }
//   });
// }


// 使用 rebase 和 merge 的基本原则：
// 下游分支更新上游分支内容的时候使用 rebase
// 上游分支合并下游分支内容的时候使用 merge
// 更新当前分支的内容时一定要使用 --rebase 参数


// babel todo

// md5不属于对称加密 也不属于非对称加密 并不能正常解密

// 二进制 十进制转化

// 十进制转二进制
var a = 10;
console.log(a.toString(2))

// 二进制转十进制

var b = 1011;
console.log(parseInt(b, 2))


// array 判断
// const a = [];
// console.log(a instanceof Array); // true
// console.log(a.constructor) //function Array(){ [native code] }  但是需要注意 contrtuctor是可以改写的，如果改写之后，就不再靠谱了
// Object.prototype.toString.call(something) === '[object Array]'; // 注意Object。prototype的toString 方法也是有可能被改写的
// Array.isArray(a)  // 最靠谱的 是es5的方法 es3需要做兼容处理

// base64
// 所谓Base64，就是说选出64个字符----小写字母a-z、大写字母A-Z、数字0-9、符号"+"、"/"（再加上作为垫字的"="，实际上是65个字符）----作为一个基本字符集。
// 然后，其他所有符号都转换成这个字符集中的字符。

// 第一步，将每三个字节作为一组，一共是24个二进制位。
// 第二步，将这24个二进制位分为四组，每个组有6个二进制位。
// 第三步，在每组前面加两个00，扩展成32个二进制位，即四个字节。
// 第四步，根据下表，得到扩展后的每个字节的对应符号，这就是Base64的编码值。

// 因为，Base64将三个字节转化成四个字节，因此Base64编码后的文本，会比原文本大出三分之一左右。
// Base64图片编码原理Base64编码要求把3个8位字节（38=24）转化为4个6位的字节（46=24），之后在6位的前面补两个0，形成8位一个字节的形式。 如果剩下的字符不足3个字节，则用0填充，输出字符使用’=’，因此编码后输出的文本末尾可能会出现1或2个’=

// 为什么一般在事件冒泡阶段监听事件而不是捕获阶段 事件流 ： 捕获 目标 冒泡 冒泡比较符合事件处理习惯 ie8以下没有事件捕获阶段
// 数据的不可变性 immutable 由于浅克隆会有引用类型的副作用，深克隆又太消耗性能，immutable.js是正是兼顾了使用效果和性能的解决方案
// immutable的原理是持久化数据结构，对immutable对象的任何修改和添加删除操作都会返回一个新的immutable对象，同时使用旧数据创建新数据时，保证旧数据可用且不变；

// 开闭原则：软件中的对象（类，模块，函数等等）应该对于扩展是开放的，但是对于修改是封闭的

// JSBridge的原理

// JSbridge简单来讲就是给javascript提供调用native功能的接口 构建 Native 和非 Native 间消息通信的通道 是双向通信的通道
// JS 向 Native 发送消息 : 调用相关功能、通知 Native 当前 JS 的相关状态等
// Native 向 JS 发送消息 : 回溯调用结果、消息推送、通知 JS 当前 Native 的状态等

// h5调用native
// 原生将 WebViewJavascriptBridge 绑定到window上，js直接调用这个对象中的原生方法
// JavaScript 调用 Native 的方式，主要有两种：注入 API 和 拦截 URL SCHEME。

// URL SCHEME是一种类似于url的链接，是为了方便app直接互相调用设计的，形式和普通的 url 近似，主要区别是 protocol 和 host 一般是自定义的，例如: qunarhy://hy/url?url=ymfe.tech，protocol 是 qunarhy，host 则是 hy。

// 使用 iframe.src 发送 URL SCHEME 会有 url 长度的隐患  而且比api注入耗时更长（因为需要创建请求），只是支持ios6，不推荐为了兼容ios6而使用；

// JsBridge之所以能实现Native与Js相互调用的功能，其核心实现其实就是
// 1. 拦截url
// 2. load url("javascript:js_method()")

// native调用h5
// h5将jsbridge绑定在window上 native通过原生方法调用这个对象上的h5 接受方法
// FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。


var a = { n: 1 }
var b = a;
// a.x = a = { n: 2 }  // =>> a.x ={n:2}; a= {n:2}
a.x = { n: 2 };
a = { n: 2 };
console.log(a.x)
console.log(b.x)

var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'splice': Array.prototype.splice,
  'push': Array.prototype.push,
}
obj.push(1)
obj.push(2) // 改变length
console.log(obj)

