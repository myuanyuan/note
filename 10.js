// 深拷贝

function deepClone(source, hash = new WeakMap()) {

  if (source == null) return source;
  if (typeof source !== 'object') return source; // 函数 或者非object 直接返回
  if (source instanceof Date) return new Date(source); // 时间戳
  if (source instanceof RegExp) return new RegExp(source);
  if (hash.has(source)) return hash.get(source);   // 处理循环引用

  let clone = new source.constructor;

  hash.set(source, clone);

  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      clone[key] = deepClone(source[key], hash);
    }
  }
  return clone;
}

// console.log(deepClone({ s: 1, f: { d: 1, d: {} } }))

let dd = Object.create(null);
console.log(deepClone(dd))

// let在babel后是什么样的？babel是如何实现class的？在__proto__里的属性和在this里的属性有什么区别

// const和let现在一律转换成var
// 那const到底如何保证不变呢？如果你在源码中第二次修改const常量的值，babel编译会直接报错。

// 那let的块级作用怎么体现呢？来看看下面例子，实质就是在块级作用改变一下变量名，使之与外层不同。
