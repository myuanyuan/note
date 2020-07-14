
// console.log(1);
// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(data => {
//     console.log(3);
//   });
// });
// new Promise((resolve) => {
//   resolve()
//   console.log(4)
// }).then(() => {
//   console.log(5);
//   setTimeout(() => {
//     console.log(6);
//   });
// }).then(() => console.log(7))
// console.log(8);

// 1 4 8 5 7 2 3 6

var nickname = "LiLei";
function Person(name) {
  this.nickname = name;
  this.sayHi = function () {
    console.log(this.nickname);
    setTimeout(function () {
      console.log(this.nickname);
    }, 0);
  }
}
var Male = {
  nickname: 'xiaofang',
  sayHi: () => {
    console.log(this.nickname);
  }
}

var person = new (Person.bind(Male, 'XiaoHong')); // 此处是male继承了person
console.log(person)
person.sayHi();
