// promise实现

// promise.all 的特点
// 接收一个 Promise 实例的数组或具有 Iterator 接口的对象
// 如果元素不是 Promise 对象，则使用 Promise.resolve 转成 Promise 对象
// 如果全部成功，状态变为 resolved，返回值将组成一个数组传给回调
// Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
// Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
// Promise.all 会在任何一个请求失败的时候进入失败状态

function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    let resolvedCounter = 0;
    let len = promises.length;
    let resolvedValues = new Array(len);
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(function (value) {
        resolvedCounter++
        resolvedValues[i] = value
        if (resolvedCounter === len) {
          return resolve(resolvedValues)
        }
      }, function (reason) {
        return reject(reason)
      })
    }
  })
}


function promiseRace(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    let len = promises.length;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(function (value) {
        return resolve(value)
      }, function (reason) {
        return reject(reason)
      })
    }
  })
}


var promiseRetry = function (fn, times, delay) {
  return new Promise(function (resolve, reject) {
    var attempt = function () {
      fn().then(resolve).catch(function (err) {
        console.log(`Attempt #${times} failed`);
        if (0 == times) {
          reject(err);
        } else {
          times--;
          setTimeout(function () {
            attempt()
          }, delay);
        }
      });
    };
    attempt();
  });
}

Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};


Promise.allSettled(requests).finally(() => {
  console.log('All requests are completed: either failed or succeeded, I don’t care');
});