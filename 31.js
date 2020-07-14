// 数组扁平化
// 递归
var flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

// 迭代

var flatten = arr => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten([1, 2, 3, 4, [2, 3, 4], [4, 5, 6]]))

// 数组扁平化 可以先将数组转用 toString()化为字符串，然后再split()转化为数组，即为一维数组


// 青蛙跳 上楼

// 斐波那契数列 f(n) = f(n-1) + f(n-2);

// var numWays = function (n) {
//   if (n <= 1) return 1;
//   if (n === 2) return 2;
//   return numWays(n - 1) + numWays(n - 2);
// }

// 动态规划

// var numWays = function (n) {
//   if (n <= 1) return 1;
//   if (n === 2) return 2;

//   let i = 2, cur = 2, pre = 1, res = 0;

//   while (i++ < n) {
//     res = cur + pre;
//     pre = cur;
//     cur = res;
//   }
//   return res;
// };

var numWays = function (n) {
  if (n <= 1) return 0;
  if (n === 2) return 2;
  let a1 = 0;
  let a2 = 1;
  for (let i = 0; i < n; i++) {
    [a1, a2] = [a2, a1 + a2];
  }
  return a2;
}

console.log(numWays(10))

// 为什么for循环嵌套顺序会影响性能
// var t1 = new Date().getTime()
// for (let i = 0; i < 100; i++) {
//   for (let j = 0; j < 1000; j++) {
//     for (let k = 0; k < 10000; k++) {
//     }
//   }
// }
// var t2 = new Date().getTime()
// console.log('first time', t2 - t1)

// for (let i = 0; i < 10000; i++) {
//   for (let j = 0; j < 1000; j++) {
//     for (let k = 0; k < 100; k++) {

//     }
//   }
// }
// var t3 = new Date().getTime()
// console.log('two time', t3 - t2)

// 两个循环的次数的是一样的，但是 j 与 k 的初始化次数是不一样的
// 第一个循环的 j 的初始化次数是 100 次，k 的初始化次数是 10w 次
// 第二个循环的 j 的初始化次数是 1w 次， k 的初始化次数是 1000w 次
// 所以相同循环次数，外层越大，越影响性能


// 介绍下 Set、Map、WeakSet 和 WeakMap 的区别

// Set
// 成员不能重复
// 只有键值没有键名类似数组
// 可以遍历，方法有add, delete, has

// weakSet
// 成员都是对象
// 成员都是弱引用 随时可以消失 可以用来保存dom节点 不容易造成内存泄漏
// 不能遍历 方法有 add, delete,has

// Map
// 本质上是键值对的集合，类似集合
// 可以遍历 方法很多 可以跟各种数据格式转换

// weakMap
// 直接受对象作为健名（null除外），不接受其他类型的值作为健名
// 健名所指向的对象，不计入垃圾回收机制
// 不能遍历，方法有get,set,has,delete


// promise  优缺点
// 优点 解决了回调地狱
// 缺点 无法取消promise 错误需要用回调函数来捕获

// Async/await 优缺点
// 优点 代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题
// 缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低

