Promise.resolve().then(() => console.log(2));

new Promise((resolve, reject) => {
  resolve();
  console.log(3);
}).then(() => console.log(4));

setTimeout(() => {
  Promise.resolve().then(() => console.log(5));
  setTimeout(() => console.log(7), 0);
}, 0);

setTimeout(() => console.log(6), 0);

// 3 2 4 5 6 7