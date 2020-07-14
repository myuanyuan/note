//  实现一个apply
Function.prototype.myApply = function (context) {
  if (!context) context = window;
  let fnName = '__uniquie__';
  context[fnName] = this; // this指向调用者 即apply之前的 f2.fn.apply(f1) 指向f2
  args = [...arguments].slice(1); // arguments[1]是一个数组
  context[fnName](args);  // 调用者（被继承者）执行
  delete context[fnName];
}

function fn1() {
  this.name = 'fn1';
}

function fn2() {
  this.name = 'fn2';
}
fn2.sayName = function (args) {
  console.log(this.name);
  console.log(...args);
}

fn2.sayName.myApply(fn1, [1, 2, 3]);