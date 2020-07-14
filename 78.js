// 正确判断变量类型
// Object.prototype.toString.call(variable) 用这个方法来判断变量类型目前是最可靠的了
// typeof 和 instanceof 都不能安全的判断变量是否是 Object 对象
// 用 constructor 判断变量类型有一个致命的缺陷，就是当检测 null 或者 undefined 类型的 constructor 属性时，js会报错
// 因此我们在利用变量的 constructor 属性来判断变量类型时，必须要先保证变量有 不会是 null 或者 undefined

// 办法先随机生成100个随机字符串整数扔到一个数组里，比如var arr = ['1'，'2'，'3' ....]，arr的长度是100，再设计一个算法去重，不允许用new set。

// let arr = Array.from(new Array(100), () => String(Math.floor(Math.random() * 100)))

// var newArr = [];

// arr.forEach((val) => {
//   if (newArr.indexOf(val) < 0) {
//     newArr.push(val)
//   }
// })
// console.log(newArr)

new Promise(resolve => {
  console.log(1)
  setTimeout(resolve, 100, 2)
  console.log(3)
}).then((data) => {
  console.log(data)
})

// 第一步查看缓存的顺序 浏览器缓存命中策略
// 面试过程中问到的浏览器缓存相关问题，一般是针对Disk Cache而言的，也就是硬盘缓存，下面我们主要对硬盘缓存进行详细解析下。
// 硬盘缓存分为以下两种类型：
// 强缓存
// 协商缓存

// 强缓存
// 打开一个web页面查看的时候，会发现第一次打开一般都是请求的服务器，然后点击刷新按钮，刷新当前页面，发现 Size 字段并没有出现from disk cache，而是显示from memory cache
// 强缓存特点是：不需要向服务器发出请求，直接从硬盘缓存中读取想要的资源。在Chrome调试面板 Network面板中，能看到该类请求会返回200状态码，Size 字段显示 from disk cache
// 内存缓存的优先级高于硬盘缓存，也比硬盘缓存的速度快。

// 如何复现出 disk cache 呢？
// 打开一个web页面查看的时候，会发现第一次打开一般都是请求的服务器，然后点击刷新按钮，刷新当前页面，发现 Size 字段并没有出现from disk cache，而是显示from memory cache
// 强缓存有两个头字段控制：Expired 和 Cache-Control
// Expired 是 Http/1.0的产物 表示的资源的过期时间（服务器端的时间）

// Cache-Control
// Cache-Control是一个相对时间，例如Cache-Control:3600，代表着资源的有效期是3600秒。由于是相对时间，并且都是与客户端时间比较，所以服务器与客户端时间偏差也不会导致问题。 Cache-Control与Expires可以在服务端配置同时启用或者启用任意一个，同时启用的时候Cache-Control优先级高。

// Cache-Control 可以由多个字段组合而成，主要有以下几个取值：

// max-age 指定一个时间长度
// 若未命中强缓存，则浏览器会将请求发送至服务器。服务器根据http头信息中的Last - Modified / If - Modified - Since或Etag / If - None - Match来判断是否命中协商缓存。如果命中，则http返回码为304，浏览器从缓存中加载资源。
// 如果命中缓存，则返回http304，并且不会返回资源内容，并且不会返回Last-Modify。
// 协商缓存
