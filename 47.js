// 中位数
// 暴力解法 均是O(NlogN)O(NlogN)，无法 ac
// var MedianFinder = function () {
//   this.list = [];
// };

// /**
//  * @param {number} num
//  * @return {void}
//  */
// MedianFinder.prototype.addNum = function (num) {
//   this.list.push(num);
// };

// /**
//  * @return {number}
//  */
// MedianFinder.prototype.findMedian = function () {
//   let len = this.list.length;
//   if (!len) return null;
//   let mid = Math.floor((len - 1) / 2);
//   this.list.sort((a, b) => a - b);
//   if (len % 2) {
//     return this.list[mid]
//   } else {
//     return (this.list[mid] + this.list[mid + 1]) / 2;
//   }
// };

// 二分插入
var MedianFinder = function () {
  this.list = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.list.length) {
    this.list.push(num)
    return;
  };
  let start = 0;
  let end = this.list.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (this.list[mid] === num) {
      this.list.splice(mid, 0, num);
      return;
    } else if (this.list[mid] < num) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  this.list.splice(end + 1, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let len = this.list.length;
  if (!len) return null;
  let mid = Math.floor((len - 1) / 2);
  if (len % 2) {
    return this.list[mid]
  } else {
    return (this.list[mid] + this.list[mid + 1]) / 2;
  }
};


