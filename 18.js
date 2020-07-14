// 手写二进制转 Base64

// let bineryToBase64 = (byte) => {
//   let sBytes = new Uint8Array(byte).reduce((accu, next) => {
//     return accu + String.fromCharCode(next)
//   }, '')
//   return `data:image/png;base64,${btoa(sBytes)}`
// }

function mySetInterval() {
  mySetInterval.timer = setTimeout(() => {
    arguments[0]();
    mySetInterval(...arguments)
  }, arguments[1]);
  mySetInterval.clear = function () {
    clearTimeout(mySetInterval.timer)
  }
}

mySetInterval(() => {
  console.log(11111)
}, 1000)

setTimeout(() => {
  mySetInterval.clear()
}, 5000)




