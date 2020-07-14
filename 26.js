// promisify
function promisify(fn) {
  return function (...args) {
    return new Promise(function (reslove, reject) {
      args.push(function (err, data) {  // node err res 习惯
        if (err) {
          reject(err)
        } else {
          reslove(data)
        }
      })
      fn.apply(null, args)
    })
  }
}

function fn(num, cb) {
  cb(null, num);
  return num;
 }

let fn1 = promisify(fn);

fn1(123).then((res)=>{
  console.log(res)
  return res;
}).then(data=>{
  console.log(data)
})
