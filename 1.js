// 并发器
// class Scheduler {
//   constructor(count) {
//     this.count = count;
//     this.tasks = [];
//     this.executing = 0;
//   }
//   add(promiseCreater) {
//     this.tasks.push(promiseCreater);
//     this.executing < this.count && this.runTask();
//   }
//   runTask() {
//     if (this.tasks.length === 0) return;
//     this.executing++;
//     this.tasks.splice(0, 1)[0]().then(() => {
//       this.executing--;
//       this.runTask();
//     });
//   }
// }

// let scheduler = new Scheduler(2);

// var addTask = (time, url) => {
//   scheduler.add(() => new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(url)
//       resolve();
//     }, time);
//   }))
// }

class Scheduler {
  constructor(count) {
    this.tasks = [];
    this.count = count;
    this.executing = 0;
  }
  add(promiseCreater) {
    this.tasks.push(promiseCreater);
    if (this.executing < this.count) {
      this.runTask();
    }
  }
  runTask() {
    if (!this.tasks.length) return;
    this.executing++;
    this.tasks.splice(0, 1)[0]().then(() => {
      this.executing--;
      this.runTask();
    });
  }
}


const scheduler = new Scheduler(2);

function addTask(timer, url) {
  scheduler.add(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(url)
    }, timer);
  }));
}


addTask(1000, '1');
addTask(1000, '2');
addTask(1000, '3');
addTask(1000, '4');
addTask(1000, '1');
addTask(1000, '2');
addTask(1000, '3');
addTask(1000, '4');
addTask(1000, '1');
addTask(1000, '2');
addTask(1000, '3');
addTask(1000, '4');