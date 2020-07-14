// new 操作符
function _new(Con, ...args) { // 首先函数接受不定量的参数，第一个参数为构造函数，接下来的参数被构造函数使用
  if (typeof Con !== 'function') {
    throw 'create function the first param must be a function';
  }
  let obj = {}  // 创建一个空对象
  Object.setPrototypeOf(obj, Con.prototype); // obj的原形指向传入的构造函数的原形 等同于 obj.__proto__ = Con.prototype
  let result = Con.apply(obj, args);  // 执行构造函数里面的语句
  return result instanceof Object ? result : obj;  // 判断执行结果是否是对象或者function，是则返回该结果，否则返回obj
}

function _new(fn, ...arg) {  // 不建议 会多一层prototype
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}

// Object.create(o) 执行过程
// 创造一个新匿名函数
var F = function () { };
// 给该匿名函数的原型指向o
F.prototype = o;
// 返回该匿名函数的实例
return new F();


function Person(name, age) {
  this.name = name;
  this.age = age;
  // return this.name;
  // return () => {
  //   console.log(this.name)
  // }
  // return function () {
  //   console.log(1)
  // }
}

// let person = new Person('mm');
let person = create(Person, 'mm', 19)

console.log(person)

// 原型 prototype
// 隐式原型 __proto__

// 1，字面量创建对象
var obj = {}; // obj 的 _proto_指向Object

// 2，构造函数创建
function Obj(name) {
  this.name = name;
}
var obj = new Obj('obj');

// new 操作符的执行过程 创建一个空对象{}, 设置该对象的__proto__指向构造函数的prototype 判断构造函数返回结果是不是对象 是的话返回结果，不是的话返回obj
// obj 的__proto__指向构造函数Obj的prototype 指向 Function Function的 prototype指向 Object

// 3，Object.create()创建对象
// Object.create(o)执行过程
// 创造一个新匿名函数
var F = function () { };
// 给该匿名函数的原型指向o
F.prototype = o;
// 返回该匿名函数的实例
var obj = new F();
// obj的__proto__ 指向匿名函数的prototype 也就是obj的__proto__直接指向o

// Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
// （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
// （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
// class创建的对象默认有prototype属性，不需要通过_proto_向上查找
class A { }
class B extends A { }
B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true

// 1，class创建对象的方式，对象默认有prototype属性
// 2，Object.create的创建的对象没有prototype属性，只有_proto_属性指向传入的对象
// 3，new a()创建方式 _proto_属性指向constructor为a的对象，也没有prototype属性
// 4，字面量创建对象_proto_属性指向Object，也没有没有prototype属性

// 原型链查找规则
// 对象的prototype>_proto_>对象的constructor.prototype>_proto_._proto_
// class, extends, 字面量创建或者继承的对象是类，new创建的对象是实例
// Object.create(obj)创建的对象是实例还是类，取决于传入的对象是实例还是对象
// Object.create(obj)的实质是把新对象的_protot_指向obj
// 继承 prototype优先