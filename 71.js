// nextTick （node&&vue）
// bfc
// 跨域
// 哪些是宏任务 哪些是微任务
// es7 include **
// 源码 （重要）
// webpack
// 设计模式 （重要）

// nextTick

// 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
// 原因：在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。
// 与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题

// 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
// 原因：Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部尝试对异步队列使用原生的 Promise.then 和MessageChannel，如果执行环境不支持，会采用 setTimeout(fn, 0)代替。

// 为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。

// nextTick源码浅析
// Vue.nextTick用于延迟执行一段代码，它接受2个参数（回调函数和执行回调函数的上下文环境），如果没有提供回调函数，那么将返回promise对象。
// 先了解nextTick中定义的三个重要变量。
// 1. callbacks 用来存储所有需要执行的回调函数
// 2. pending 用来标志是否正在执行回调函数
// 3. timerFunc 用来触发执行回调函数

// 执行callbacks里存储的所有回调函数。
// function nextTickHandler() {
//   pending = false
//   const copies = callbacks.slice(0)
//   callbacks.length = 0
//   for (let i = 0; i < copies.length; i++) {
//     copies[i]()
//   }
// }

// node 里的 process.nextTick()
// Node.js是单线程的，除了系统IO之外，在它的事件轮询过程中，同一时间只会处理一个事件。
// process.nextTick()的意思就是定义出一个动作，并且让这个动作在下一个事件轮询的时间点上执行

// function foo() {
//   console.error('foo');
// }

// process.nextTick(foo);
// setTimeout(() => console.log('time'), 0);
// console.log('bar');

// es6 es7 es8 es9 es10

// ES7新特性
// Array.prototype.includes()
// 指数操作符** ===Math.pow

// ES8新特性（2017）
// async/await
// Object.values()
// Object.entries()

// ES9新特性（2018）
// for await (let i of array)
// Promise.finally() 无论Promise运行成功还是失败，运行相同的代码
// Rest/Spread 属性
// 正则表达式命名捕获组

// const reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
//   match = reDate.exec('2018-04-30'),
//   year = match.groups.year,  // 2018
//   month = match.groups.month, // 04
//   day = match.groups.day;   // 30


// ES10新特性（2019）
// 新增了Array的flat()方法和flatMap()方法
// 新增了String的trimStart()方法和trimEnd()方法 分别去除字符串首尾空白字符
// 简化try {} catch {},修改 catch 绑定
// Function.prototype.toString()现在返回精确字符，包括空格和注释
// 新的基本数据类型BigInt

// 可以利用flat()方法的特性来去除数组的空项

var arr4 = [1, 2, , 4, 5];
console.log(arr4.flat())
// [1, 2, 4, 5]

var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// 只会将 flatMap 中的函数返回的数组 “压平” 一层
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

// 现在的基本数据类型（值类型）不止5种（ES6之后是六种）了哦！加上BigInt一共有七种基本数据类型，分别是：
// String、Number、Boolean、Null、Undefined、Symbol、BigInt
// BigInt数据类型的目的是比Number数据类型支持的范围更大的整数值

// 要创建BigInt，只需在整数的末尾追加n即可
// 可以调用BigInt()构造函数

BigInt("9007199254740995");    // → 9007199254740995n

// 不能使用严格相等运算符将BigInt与常规数字进行比较
// 除一元加号(+)运算符外，所有算术运算符都可用于BigInt
// 因为隐式类型转换可能丢失信息，所以不允许在bigint和 Number 之间进行混合操作
