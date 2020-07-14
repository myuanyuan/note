// 继承 与 单例模式

// es5 实现继承的方式
// function Car(name) { // 通过function实现类
//   this.name = name;
//   this.type = 'car';
//   this.sayName = function () {
//     console.log(this.name)
//   }
// }

// let car = new Car('bmw');

// console.log(car)
// car.sayName();

// function myCar(name) {
//   Car.apply(this, arguments);
// }

// // myCar.prototype = Object.create(Car.prototype);  // 通过设置构造函数的prototype为 被继承的构造函数的原型的实例 实现继承

// myCar.prototype = car;

// let mycar = new myCar('mycar');


// mycar.sayName()


// ES6 实现继承

// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     console.log(this.name)
//   }
// }

// let car = new Car('car');

// car.sayName();

// class myCar extends Car {   // 继承 用super
//   constructor(name) {
//     super(name);
//   }
// }

// let mycar = new myCar('mycar');
// mycar.sayName();

// 单例就是保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。
// 在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。

// ES5的单例模式写法

function Car(name) {
  this.name = name;
  this.instance = null;
}

Car.getInstance = function (name) {  // 通过 getInstance 获取唯一的实例
  if (!this.instance) {
    this.instance = new Car(name);
  }
  return this.instance;
}

let car = new Car('car');

// es6的单例模式的写法
// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“ 静态方法”。

class Car {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Car(name);
    }
    return this.instance;
  }
}

// let car1 = Car.getInstance('car1');


// 单例模式弹窗

var createLoginLayer = () => {
  var div;
  return function () {
    if (!div) {
      var div = document.createElement('div')
      div.innerHTML = '我是登录弹窗'
      div.style.display = 'none'
      document.appendChild(div)
    }
    return div;
  }
}

document.getElementById('loginBtn').onclick = function () {
  var loginLayer = createLoginLayer()
  loginLayer.style.display = 'block'
}
