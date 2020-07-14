// CDN的工作原理 cdn 内容分发网络
// 就是将您源站的资源缓存到位于全球各地的CDN节点上，用户请求资源时，就近返回节点上缓存的资源，而不需要每个用户的请求都回您的源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验


// bind 实现
// 第一个参数为 要改变的this指向 后面的一系列参数为返回函数的参数


// 第一版 改变this
// Function.prototype.bind = function (context) {
//   var self = this;
//   return function () {
//     self.apply(context);
//   }
// }

// 第二版 改变this+传递参数
// Function.prototype.bind2 = function (context) {
//   var self = this;
//   // 获取bind2函数从第二个参数到最后一个参数
//   var args = Array.prototype.slice.call(arguments, 1);
//   return function () {
//     // 这个时候的arguments是指bind返回的函数传入的参数
//     var bindArgs = Array.prototype.slice.call(arguments);
//     self.apply(context, args.concat(bindArgs));
//   }


// Function.prototype.bind = function (context) {
//   if (typeof this !== "function") {
//     throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
//   }
//   var self = this;
//   var args = Array.prototype.slice.call(arguments, 1); // 这里取出除this之外的参数

//   var fNOP = function () { };

//   var fbound = function () {
//     self.apply(this instanceof fNOP ? this : context, args.concat(Array.prototype.slice.call(arguments)));
//   }

//   fNOP.prototype = this.prototype;
//   fbound.prototype = new fNOP();

//   return fbound;
// }

Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('');
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () { }

  var fbound = function () {
    self.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  }
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();
  return fbound;
}

function test(num) {
  console.log(num)
}

let newTest = test.bind(this);

newTest(123);


// 变量提升
// var 非函数类型指提升 不赋值
// 函数类型 提升且赋值
// let 不提升 不赋值 未声明使用会报错