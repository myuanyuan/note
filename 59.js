// 函数柯里化

function sum(a = 0, b = 0, c = 0) {
  return a + b + c;
}

function curry(fn, ...args) {
  var length = fn.length; // 代表函数fn的参数数量
  return function (...nextArgs) {
    var allArgs = [...args, ...nextArgs];//收集参数
    if (allArgs.length >= length) return fn.apply(null, allArgs); //当参数足够时则调用原函数
    return curry(fn, ...allArgs); //不够参数则,继续递归调用
  }
}

var currySum = curry(sum);

console.log(currySum(1, 2, 3))

// console.log(currySum(3).valueOf());
// console.log(currySum(3).getVal());
// console.log(currySum(1)(2).getVal());
// console.log(currySum(1)(2)(3).getVal());
// console.log(currySum(1, 2).getVal());
// console.log(currySum(1, 2, 3).getVal());

// array.splice实现

Array.prototype._splice = function (start, deleteCount, ...addList) {
  if (start < 0) {
    if (Math.abs(start) > this.length) {  // start为负数时 判断绝对值是否大于length 大于length重置为0 小于length start += this.length
      start = 0;
    } else {
      start += this.length;
    }
  }

  if (typeof deleteCount === 'undefined') {  // deleteCount不传默认到结尾
    deleteCount = this.length - start
  }

  const removeList = this.slice(start, start + deleteCount);
  const right = this.slice(start + deleteCount);
  let addIndex = start;
  addList.concat(right).forEach(item => { // 从start 位置开替换为 addList.concat(right);
    this[addIndex] = item
    addIndex++
  })
  this.length = addIndex; // 更新length属性
  return removeList;  // 返回删除的项
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr._splice(-3, 1, 0);


// 将'10000000000'形式的字符串，以每3位进行分隔


//  德国以 . 分割金钱, 转到德国当地格式化方案即可
// 10000000000..toLocaleString('de-DE')

// 寻找字符空隙加 .
// '10000000000'.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

// 寻找数字并在其后面加 .
// '10000000000'.replace(/(\d)(?=(\d{3})+\b)/g, '$1.')

// 转成金钱字符串后全部替换,
// 10000000000..toLocaleString().replace(/,/g, ".")
// console.log(10000000000..toLocaleString().replace(/,/g, "."))

// 求多个数组之间的交集

let a = [1, 2, 3, 9, 4, 4, 4];
let b = [4, 3, 2, 4, 1];
let c = [1];

function intersect(...args) {
  if (args.length === 0) {
    return [];
  }
  if (args.length === 1) {
    return args[0];
  }
  return args.reduce((result, arg) => {
    return result.filter(item => new Set(arg).has(item))
  })
}

// console.log(intersect(a, b,c))

// 接口如何防刷
// 网关控制流量洪峰，对在一个时间段内出现流量异常，可以拒绝请求s
// 源ip请求个数限制。对请求来源的ip请求个数做限制
// http请求头信息校验；（例如host，User-Agent，Referer）
// 对用户唯一身份uid进行限制和校验。例如基本的长度，组合方式，甚至有效性进行判断。或者uid具有一定的时效性
// 前后端协议采用二进制方式进行交互或者协议采用签名机制
// 人机验证，验证码，短信验证码，滑动图片形式，12306形式


// reduce用法

let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = arr.reduce((res, cur) => {
  return res + cur;
});

// 如果第二个参数（初始值）没传则初始值为第一个值

console.log(result);