// es6的新特性

// 变量声明 let const
// 模版字符串
// 箭头函数
// 函数的参数默认值
// Spread / Rest 操作符 ...
// 对象和数组解构
// ES6中的类 ES6的class不是新的对象继承模型，它只是原型链的语法糖表现形式。
// 类的声明不会提升（hoisting)，如果你要使用某个 Class，那你必须在使用之前定义它，否则会抛出一个 ReferenceError 的错误
// 在类中定义函数不需要使用 function 关键词

// == 和 === 的区别

// === 严格相等 会比较两个值的类型和值
// == 抽象相等 比较时，会先进行类型转换，然后再比较值
// node.js中使用es6模块管理import需要借助babel babel-register babel-preset-env
// 数组和链表的区别 数组可以根据下标取得任意位置的值 链表只能一个接一个的指针查找 数组一旦删除或者添加一个元素 则后面所有的元素都要移动位置 而链表只需要改变指针就可以了
// 一个4升和一个9升的杯子倒出6升水 9升装满倒进4升 4升倒掉 继续倒4升 再倒掉 剩下1升倒进4升 9升装满 倒满4升 剩下6升 9-3=6;

// 谈谈你对 JS 原型和原型链的理解
// JS 原型是指为其它对象提供共享属性访问的对象。在创建对象时，每个对象都包含一个隐式引用指向它的原型对象或者 null，原型也是对象，因此它也有自己的原型。这样构成一个原型链。
// 原型链有什么作用
// 在访问一个对象的属性时，实际上是在查询原型链。这个对象是原型链的第一个元素，先检查它是否包含属性名，如果包含则返回属性值，否则检查原型链上的第二个元素，以此类推。
// 那如何实现原型继承呢？
// 有两种方式。一种是通过 Object.create 或者 Object.setPrototypeOf 显式继承另一个对象，将它设置为原型，另一种是通过 constructor 构造函数，在使用 new 关键字实例化时，会自动继承 constructor 的 prototype 对象，作为实例的原型。
// ConstructorB 如何继承 ConstructorA ？
// 需要新建constructor 通过apply或者call合并属性 比较麻烦 建议使用es6的class来实现