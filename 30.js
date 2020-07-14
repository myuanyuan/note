// axios interceptors

import axios from 'axios';

axios.interseptors.request.use(config => {
  // 对请求操作
  return config;
}, err => {
  return Promise.resolve(err);
})

axios.intersepectors.respose.use((data) => {
  // 对返回进行操作
  return data;
}, err => {
  return Promise.resolve(err);
})

// webpack代码分割方式

// webpack的代码分割Code Splitting，主要有两种方式：
// 第一种：webpack1通过require.ensure定义分割点，将代码进行分割打包，异步加载。
// 第二种：在动态代码拆分方面，webpack支持符合ECMAScript提议的import()语法进行代码分割和异步加载。


// cookie的限制 针对各个站点（域名）的限制是个数的限制 针对浏览器单条大小限制 一般为4k
// 除了Safari ，當cookie已達到限額，自動踢除最老的cookie
// Firefox很獨特：雖然最後的設置的cookie始終保留，但似乎隨機決定哪些cookie被保留
// 不同瀏覽器的cookie總大小也不同