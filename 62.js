// 居中对齐
// flex margin auto
// absolute  0 0 0 0 auto
// absolute top:50% left 50% transform:tanslate:(-50%, -50%);
// absolute top 50% left 50% margin
// grid justify-self:center align-self:center

// Vue 的响应式原理中 Object.defineProperty 有什么缺陷
// Object.defineProperty无法监控到数组下标的变化 导致通过数组下标添加元素，不能实时响应；
// Object.defineProperty只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历
// Proxy可以劫持整个对象，并返回一个新的对象。
// Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。

// 作用域问题 要考虑变量提升
var a = 10;
(function () {
  console.log(a)  // 内部有a 变量提升 赋值提升 为undefined
  a = 5
  console.log(window.a)
  var a = 20;
  console.log(a)
})()



// setTimeout, setInterval 和 requestAnimationFrame

// setTimeout(code, millseconds) 用于延时执行参数指定的代码，如果在指定的延迟时间之前，你想取消这个执行，那么直接用clearTimeout(timeoutId)来清除任务，timeoutID 是 setTimeout 时返回的；

// setInterval(code, millseconds)用于每隔一段时间执行指定的代码，永无停歇，除非你反悔了，想清除它，可以使用 clearInterval(intervalId)，这样从调用 clearInterval 开始，就不会在有重复执行的任务，intervalId 是 setInterval 时返回的

// requestAnimationFrame(code)，一般用于动画，与 setTimeout 方法类似，区别是 setTimeout 是用户指定的，而 requestAnimationFrame 是浏览器刷新频率决定的，一般遵循 W3C 标准，它在浏览器每次刷新页面之前执行。

// requestAnimationFrame的执行机制
// 目前的显示器大部分的PSF都是60帧/秒，即每1000/60 = 16.7ms刷新一次，如果setTimeout/setInterval设置的时间间隔小于16.7，那么就会出现过度绘制的问题。而requestAnimationFrame正是为了这个而出现的，它会跟着浏览器的绘制走，浏览器每次重绘会通知requestAnimationFrame：我要重绘了。所以如果浏览器的绘制间隔是16.7s，它就会每隔16.7s绘制一次，这就不存在过度绘制导致掉帧的问题。

// 而且就算有多个requestAnimationFrame存在，浏览器会统一通知，而setTimeout是相互独立的，所以会耗费更多资源。
// 当页面tab切换到其他页面时，requestAnimationFrame会停止运行，节约资源。（chrome浏览器对时间间隔小于1s的setInterval也）

// 可以直接调用，也可以通过window来调用，接收一个函数作为回调，返回一个ID值，通过把这个ID值传给window.cancelAnimationFrame()可以取消该次动画。

// 前端大文件上传
// 切片上传
// 通过Blob对象的slice方法将文件拆分成切片
// 断点续传
// 在切片上传成功后，保存已上传的切片信息（存locaStorage或后端提供接口记录）
// 当下次传输相同文件时，遍历切片列表，只选择未上传的切片进行上传
// 所有切片上传完毕后，再调用接口通知服务端进行文件合并
// 上传进度和暂停
// 通过xhr.upload中的progress方法可以实现监控每一个切片上传进度。
// xhr.abort取消上传


// 纯组件忽略重新渲染时，不仅会影响它本身，而且会影响它的说有子元素，所以，使用PureComponent的最佳情况就是展示组件，它既没有子组件，也没有依赖应用的全局状态

// for await of