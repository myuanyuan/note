// jsonp

// 前端需要做什么？
// 后端又需要做些什么来支持？
// 超时场景又该如何处理？
// 整个生命周期会有多个钩子可以被触发，而我们可以监听哪些钩子来得知请求的状况?

// 客户端利用script标签可以跨域请求资源的性质，向网页中动态插入script标签，来向服务端请求数据
// 服务端会解析请求的url,至少拿到一个回调函数(比如callback=myCallback)参数,之后将数据放入其中返回给客户端
// jsonp只支持get请求

// `http://www.abc.com/api/xxx?name=qianlongo&sex=boy&_=${new Date() + 0}&callback=myCallback`

// var myCallback = function (data) {
//   // todo
// }

// 后端 this.body = `${callback}(${JSON.stringify(callbackData)})`


// 合并两个数组
// var merge = function (nums1, m, nums2, n) {
//   let count = m + n;
//   while (m > 0 && n > 0) {
//     nums1[--count] = nums1[m - 1] < nums2[n - 1] ? nums2[--n] : nums1[--m];
//   }
//   if (n > 0) {
//     nums1.splice(0, n, ...nums2.slice(0, n));
//   }
//   return nums1;
// }

// console.log(merge([2, 3, 0], 1, [1, 2, 5, 6, 7], 4))

// 合并两个对象

// console.log(Object.assign({}, { a: 1 }, { b: 2 }))
// console.log({...{ a: 1 }, ...{ b: 2 }})

// var deepClone = function (source, hash=new WeakMap()) {
//   if (source == undefined)return source;
//   if(typeof source !=='object')return source;
//   if (source instanceof Date) return new Date(source);
//   if (source instanceof RegExp) return new RegExp(source);
//   if (hash.has(source)) return hash.get(source);   // 处理循环引用

//   let clone = new source.constructor; // new 构造函数 返回的是新对象

//   hash.set(source,clone);
//   for(key in source){
//     if (source.hasOwnProperty(key)) {  // 原则上只clone对象自身属性
//       clone[key] = deepClone(source[key],hash);
//     }
//   }
//   return clone;
// }

// console.log(deepClone({a:1}))

// 求数组最长公共前缀
// var longestCommonPrefix = function (strs) {
//   if(!strs||!strs.length)return '';
//   let prev = strs[0];
//   for(let i =1; i<strs.length;i++){
//    let j=0;
//     for (; j < prev.length;j++){
//       if (strs[i][j]!==prev[j]) break;
//     }
//     prev = prev.substring(0,j);
//   }
//   return prev;
// }

// console.log(longestCommonPrefix(['flex', 'flexw', 'flegg']))

// let list =[1,2,3];
// const square = num => {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(num*num);
//     }, 1000);
//   })
// }

// function test() {
//   list.forEach(async(x)=>{
//     const res = await square(x);
//     console.log(res);
//   })
//  }

// async function test() {
//   for (let i = 0; i < list.length; i++) {
//     const res = await square(list[i]);
//     console.log(res);
//   }
// }
// test();



// function foo() {
//  return  new Promise((resolve, reject) => {
//     resolve('hello world!')
//   });
// }

// result = foo()
// console.log(result)  // undefined

// promise 链式调用

// let fetch1 = new Promise((resolve, reject)=>{
//   resolve('fetch1')
// })

// let fetch2 = new Promise((resolve, reject) => {
//   resolve('fetch2')
// })

// let fetch3= new Promise((resolve, reject) => {
//   resolve('fetch3')
// })

// let fetch4 = new Promise((resolve, reject) => {
//   resolve('fetch4')
// })

// fetch1.then((data1)=>{
//   console.log(data1);
//   return fetch2;
// }).then((data2)=>{
//   console.log(data2);
//   return fetch3;
// }).then((data3)=>{
//   console.log(data3);
//   return fetch4;
// }).then((data4)=>{
//   console.log(data4);
// })


//  async await 错误捕获

var fetchData = () => {
  return new Promise((resolve, reject) => {
    // resolve({a:1})
    reject('err')
  })
}

const awaitWrap = (promise) => {
  return promise
    .then(data => [null, data])
    .catch(err => [err, null])
}

// 使用
async function test() {
  const [err, data] = await awaitWrap(fetchData())
}
test()

// zijie

// 像素单位有哪些？分别怎么用？
// 浏览器渲染一帧会发生什么？
// css选择器的优先级，计算原理？
// dns是什么？cdn了解多少？

// dns解析服务器
// DNS会在本地进行缓存有效期由dns告知，一般为100-300s DNS结果可能返回多个IP 一般客户端使用第一个就可以 如果第一个IP不能访问 客户端可以决策是否按顺序使用后续的IP
// CDN（Content Delivery Network，即内容分发网络） 帮助源站将资源分发到全世界各地；而实际上，CDN的另外一个用途是可以帮助源站分担访问压力。

// set的实现原理是什么？

// 渲染器渲染的过程，script 除了加defer，还要加什么
// CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染
// JS 阻塞 DOM 解析，但浏览器会"偷看"DOM，预先下载相关资源。
// 浏览器遇到 <script>且没有defer或async属性的 标签时，会触发页面渲染，因而如果前面CSS资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本
// <script>与<link>同时在头部的话，<script>在上可能会更好
// <script>最好放底部，<link>最好放头部，如果头部同时有<script>与<link>的情况下，最好将<script>放在<link>上面

// 项目有什么难点？


// 洋葱圈模型: 注册中间件 第一层中间件开始 --> 第二层中间件开始 --> 第三层中间件开始 --> 第一层中间件结束 --> 第二层中间件结束 --> 第三层中间件结束

// 数组扁平化

// const _flat = (arr) => arr.reduce((res, cur) => res.concat(Array.isArray(cur) ? _flat(cur):cur),[])

// 数组扁平化加去重

let arr = [1, 3, 5, [3, 4, 5], [12, 3]];
const _flat = (arr) => arr.reduce((res, cur) => res.concat(Array.isArray(cur) ? _flat(cur) : cur), [])

// console.log(Array.from(new Set(_flat(arr))));

// console.log(Array.from(new Set(_flat(arr))).sort((a, b) => { return a - b }))


// event loop

// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2() {
//   console.log('async2');
// }

// console.log('script start');

// setTimeout(function () {
//   console.log('setTimeout');
// }, 0)

// async1();

// new Promise(function (resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function () {
//   console.log('promise2');
// });
// console.log('script end');


// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// var run = () => { console.log(2) }
// var a = async function () {
//   console.log(1)
//   await run()
//   console.log(3)
// }
// a()

// setTimeout(function () {
//   console.log(4)
// })

// var b = new Promise((resolve) => {
//   console.log(5)
//   resolve(6)
//   console.log(7)
// }).then((val) => console.log(val))

// console.log(8)

// 1
// 2
// 5
// 7
// 8
// 3
// 6
// 4


// console.log('1');

// setTimeout(function () {
//   console.log('2');
//   process.nextTick(function () {
//     console.log('3');
//   })
//   new Promise(function (resolve) {
//     console.log('4');
//     resolve();
//   }).then(function () {
//     console.log('5')
//   })
// })

// process.nextTick(function () {
//   console.log('6');
// })
// new Promise(function (resolve) {
//   console.log('7');
//   resolve();
// }).then(function () {
//   console.log('8')
// })

// setTimeout(function () {
//   console.log('9');
//   process.nextTick(function () {
//     console.log('10');
//   })
//   new Promise(function (resolve) {
//     console.log('11');
//     resolve();
//   }).then(function () {
//     console.log('12')
//   })
// })

// 1
// 7
// 6
// 8
// 2
// 4
// 3
// 5
// 9
// 11
// 10
// 12

function testlog() {
  console.log('start')
  setTimeout(() => {
    console.log('children2')
    Promise.resolve().then(() => { console.log('children2-1') })
  }, 0)
  setTimeout(() => {
    console.log('children3')
    Promise.resolve().then(() => { console.log('children3-1') })
  }, 0)
  Promise.resolve().then(() => { console.log('children1') })
  console.log('end')
}

testlog()

// start
// end
// children1
// children2
// children2-1
// children3
// children3-1
