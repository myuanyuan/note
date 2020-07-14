// Function.prototype.bind2 = function (context) {
//   if (typeof this !== 'function') {
//     throw Error('')
//   }
//   let self = this; // 被继承的fn
//   let Temp = function () { };
//   let args = Array.prototype.slice.call(arguments, 1);
//   let newFn = function () {
//     let bindArgs = Array.prototype.slice.call(arguments); // slice 传空相当于复制
//     self.apply(this instanceof Temp ? this : context, args.concat(bindArgs));
//   }

//   Temp.prototype = this.prototype; // 为了实例可以继承绑定函数原型的值
//   newFn.prototype = new Temp();
//   return newFn;
// }


// firstPromise

// var firstPromise = function (fn) {
//   let flag = true;
//   return function () {
//     return new Promise((resolve, reject) => {
//       if (!flag) return;
//       flag = false;
//       fn().then((res) => {
//         resolve(res);
//         flag = true;
//       }).catch((err) => {
//         reject(err);
//         flag = true;
//       })
//     })
//   }
// }

// // 示例
// var count = 1;
// var promiseFunction = () => new Promise(rs =>
//   window.setTimeout(() => {
//     rs(count++);
//   }, 1000)
// );

// var fistFn = firstPromise(promiseFunction);

// fistFn().then(console.log); // 1
// fistFn().then(console.log); // 1
// fistFn().then(console.log); // 1


// queryString
