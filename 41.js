// 实现一个批量请求函数 multiRequest(urls, maxNum)
// 要求最大并发数 maxNum
// 每当有一个请求返回，就留下一个空位，可以增加新的请求
// 所有请求完成后，结果按照 urls 里面的顺序依次打出

function multiRequest(urls, maxNum) {
  if (!Array.isArray(urls)) {
    return new Error('arguments 1 must be array');
  }
  if (isNaN(maxNum = parseInt(maxNum))) {
    return new Error('arguments 1 must be number');
  }

  const taskQueue = [];
  const results = [];
  let index = 0;
  let resolve;

  const promise = new Promise(r => {
    resolve = r;
  });

  const taskPusher = (internalIdx) => {
    const onFinish = (res) => {
      if (index >= urls.length) {
        Promise.
          all(taskQueue)
          .then(() => resolve(results))
          .catch(() => resolve(results));
      }

      if (internalIdx < urls.length) {
        results[internalIdx] = res;
        taskPusher(index);
        index += 1;
      }
    }
    taskQueue.push(
      request(urls[internalIdx])
        .then(onFinish, onFinish)
    );
  }

  const len = urls.length > maxNum ? maxNum : urls.length;
  for (; index < len; index += 1) {
    taskPusher(index);
  }

  return promise;
}

// 模拟请求
function request(url) {
  return new Promise((r) => {
    const time = Math.random() * 1000;
    setTimeout(() => r(url), time);
  });
}