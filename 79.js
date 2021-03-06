// JavaScript常见的六种继承方式
// 1.原型链继承 :子类型的原型为父类型的一个实例对象  Student.prototype  = new Person();
// 2.借用构造函数继承: 在子类型构造函数中通用call()调用父类型构造函数
// 3.原型链+借用构造函数的组合继承 :通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用。
// 4.组合继承优化1
// 5.组合继承优化2
// 6.ES6中class 的继承