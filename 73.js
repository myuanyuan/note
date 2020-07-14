// 设计模式
let fs = require('fs');

// 观察者模式/发布订阅模式 应用场景 网页事件绑定、promise.then EventEmitter 自定义事件
class MyPromise {
  constructor(run) { // run 函数 (resolve) => any
    this.observerList = [];
    const notifyAll = value => this.observerList.forEach((callback) => callback(value));
    run(notifyAll); // 核心
  }

  subscribe(callback) {
    this.observerList.push(callback);
    return this;
  }
}
//
const p = new MyPromise(notifyAll => {
  fs.readFile("1.js", (err, data) => {
    notifyAll(data.toString()) // resolve
  })
});

p.subscribe((data) => {
  console.log(data)
}).subscribe(data => console.log(111, data)); // then

// 工厂模式 应用场景：我们明确地计划不同条件下创建不同实例时 React.createElement

// 单例模式 只有一个实例 应用场景 ：浏览器中的window对象，全局缓存对象等


// 策略模式
// 策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。 ... 优点：1. 策略模式利用组合，委托等技术和思想，有效的避免很多if条件语句。 2. 策略模式提供了开放-封闭原则，使代码更容易理解和扩展

var strategies = {
  "S": function (salary) {
    return salary * 4;
  },
  "A": function (salary) {
    return salary * 3;
  },
  "B": function (salary) {
    return salary * 2;

  }
};
var calculateBonus = function (level, salary) {
  return strategies[level](salary);
};

console.log(calculateBonus('S', 20000)); // 输出：80000
console.log(calculateBonus('A', 10000)); // 输出：30000

// 配器模式（Adapter）：是将一个类（对象）的接口（方法或属性）转化成客户希望的另外一个接口（方法或属性），适配器模式使得原本由于接口不兼容而不能一起工作的那些类（对象）可以一些工作
// 应用场景：旧接口现在难以使用的兼容问题 封装旧接口 eg:ajax  sdk m&&app端封装
