// 防抖和节流

// 1.防抖 input 用户操作

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    const args = Array.prototype.slice.call(arguments);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);

  }
}

// function debounce(fun, delay) {
//   return function (args) {
//     clearTimeout(fun.id)
//     fun.id = setTimeout(() => {
//       fun.call(this, args);
//     }, delay);
//   }
// }


// 2.节流 规定时间内触发一次
// function throttle(fun, delay) {
//   let last, deferTimer;
//   return function (args) {
//     let now = +new Date();
//     if (last && now < last + delay) {
//       clearTimeout(deferTimer)
//       deferTimer = setTimeout(() => {
//         last = now
//         fun.call(this, args)
//       }, delay)
//     } else {
//       last = now
//       fun.call(this, args)
//     }
//   }
// }

// function throttle(fn, delay = 100) {
//   var timeout;
//   var start = new Date;
//   return function () {
//     var context = this, args = arguments, curr = new Date() - 0
//     clearTimeout(timeout) // 总是干掉事件回调
//     if (curr - start >= delay) {  // 时间够了 执行
//       fn.apply(context, args) //只执行一部分方法，这些方法是在某个时间段内执行一次
//       start = curr  // 重置开始时间
//     } else {
//       //让方法在脱离事件后也能执行一次
//       timeout = setTimeout(function () {
//         fn.apply(context, args)
//       }, delay);
//     }
//   }
// }

// var throttle = (fn, delay = 300) => {
//   let timer;
//   let start = new Date() + 0;
//   return (args) => {
//     clearTimeout(timer);
//     let now = new Date() + 0;
//     if (now - start >= delay) {
//       fn.apply(this, args);
//     } else {
//       timer = setTimeout(() => {
//         fn.apply(this, args);
//       }, delay);
//     }
//   }
// }

var throttle = function (fn, delay = 300) {
  let timer;
  let start = new Date() + 0;
  return function () {
    let args = Array.prototype.slice.call(arguments);
    clearTimeout(timer);
    let now = new Date() + 0;
    if (now - start >= delay) {
      fn.apply(this, args);
      start = curr;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  }
}

// var debounce = (fn, delay) => {
//   let timer;
//   return (args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   }
// }