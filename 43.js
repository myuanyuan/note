// http 状态码

// 400 一般为客户端错误 参数格式有误等
// 401 身份需要验证 一般跳登录页
// 403 资源不可用
// 404 不存在
// 405 方法被拒绝 方法指 options get post 等

// 301  永久重定向 301重定向是永久的重定向，搜索引擎在抓取新内容的同时也将旧的网址替换为重定向之后的网址。
// 302 临时重定向  302重定向是临时的重定向，搜索引擎会抓取新的内容而保留旧的网址。
// 304 缓存

// 浏览器缓存
// 浏览器缓存的优点有：
// 减少了重复冗余的请求，减少了流量费用
// 减小了服务器负担，大大提升了网站性能
// 加快了客户端加载网页的速度

// 强缓存 协商缓存的区别
// 强缓存 不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;
// 协商缓存 向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；
// 两者的共同点是，都是从客户端缓存中读取资源；区别是强缓存不会发请求，协商缓存会发请求。

// 缓存中header的参数：
// Expires：response header里的过期时间，浏览器再次加载资源时，如果在这个过期时间内，则命中强缓存。
// Cache-Control：当值设为max-age=300时，则代表在这个请求正确返回时间（浏览器也会记录下来）的5分钟内再次加载资源，就会命中强缓存。

// Last-Modify / If-Modify-Since：浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modify，Last-modify是一个时间标识该资源的最后修改时间；
// 当浏览器再次请求该资源时，request的请求头中会包含If-Modify-Since，该值为缓存之前返回的Last-Modify。服务器收到If-Modify-Since后，根据资源的最后修改时间判断是否命中缓存
// Etag：web服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）。
// If-None-Match：当资源过期时（使用Cache-Control标识的max-age），发现资源具有Etage声明，则再次向web服务器请求时带上头If-None-Match （Etag的值）。web服务器收到请求后发现有头If-None-Match 则与被请求资源的相应校验串进行比对，决定是否命中协商缓存；

// ETag和Last-Modified的作用和用法，他们的区别：
// 1.Etag要优于Last-Modified。Last-Modified的时间单位是秒，如果某个文件在1秒内改变了多次，那么他们的Last-Modified其实并没有体现出来修改，但是Etag每次都会改变确保了精度；
// 2.在性能上，Etag要逊于Last-Modified，毕竟Last-Modified只需要记录时间，而Etag需要服务器通过算法来计算出一个hash值；
// 3.在优先级上，服务器校验优先考虑Etag。

// 触发 200 from cache：
// 直接点击链接访问
// 输入网址按回车访问
// 二维码扫描

// 触发 304 Not Modified：
// 刷新页面时触发
// 设置了长缓存、但 Entity Tags 没有移除时触发

// 请求时浏览器缓存 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache中？
// 缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。
// Service Worker
// Memory Cache Memory Cache 也就是内存中的缓存 主要包含的是当前中页面中已经抓取到的资源,例如页面上已经下载的样式、脚本、图片等。 一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。
// Disk Cache  Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。
// Push Cache

// 强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的Network选项中可以看到该请求返回200的状态码，并且Size显示from disk cache或from memory cache。强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache - Control。

// 协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：
// 协商缓存生效，返回304和Not Modified
// 协商缓存失效，返回200和请求结果

// 对于大文件来说，大概率是不存储在内存中的，反之优先
// 当前系统内存使用率高的话，文件优先存储进硬盘


// 三次握手
// 三次握手协议指的是在发送数据的准备阶段，服务器端和客户端之间需要进行三次交互：
// 第一次握手：客户端发送syn包(syn=j)到服务器，并进入SYN_SEND状态，等待服务器确认；
// 第二次握手：服务器收到syn包，必须确认客户的syn（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
// 第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。
// 连接建立后，客户端和服务器就可以开始进行数据传输了。


// 圆形可点击区域

// map和area 标签

{/* <img src="./peppa.png" usemap="#Map">
  <map name="Map" id="Map">
    <area shape="circle" coords="200,200,100" href="#rect" alt="圆形">
</map> */}

// CSS3的border-radius属性

{/* <div class="content"></div>
.content{
  width: 100px;
  height: 100px;
  border - radius: 50 %;
  border: 1px solid #ccc;
}
var content = document.getElementsByClassName("content")[0]
content.addEventListener("click", function () {
  alert("aaa")
}) */}

// js
// 设定一个坐标原点和半径，获取鼠标的x, y轴位置，当鼠标的位置与原点的位置不超过半径时，可点击。

// 红绿灯实现 循环显示红绿灯

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

/**
 * 循环显示红绿灯
 * @param {number} green 绿灯显示毫秒数
 * @param {number} yellow 黄灯显示毫秒数
 * @param {number} red 红灯显示毫秒数
 */
async function light(green = 15000, yellow = 3000, red = 10000) {
  let status = 'green';
  while (true) {
    await sleep(green).then(() => {
      status = 'yellow'
      console.log(status)
    })
    await sleep(yellow).then(() => {
      status = 'red'
      console.log(status)
    })
    await sleep(red).then(() => {
      status = 'green'
      console.log(status)
    })
  }
}
