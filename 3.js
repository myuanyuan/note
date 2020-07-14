
// 快排
// var quickSort = function (arr) {

//   if (arr.length <= 1) { return arr; }

//   var pivotIndex = Math.floor(arr.length / 2);  // 中间项位置

//   var pivot = arr.splice(pivotIndex, 1)[0];  // 取出中间项

//   var left = [];

//   var right = [];

//   for (var i = 0; i < arr.length; i++) {

//     if (arr[i] < pivot) {  // 分左右两半

//       left.push(arr[i]);

//     } else {

//       right.push(arr[i]);

//     }

//   }

//   return quickSort(left).concat([pivot], quickSort(right));  // 递归调用

// };



// var quickSort = function (arr) {
//   if (arr.length <= 1) return arr;

//   let mIndex = Math.floor(arr.length / 2);
//   let mItem = arr.splice(mIndex, 1)[0];

//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < mItem) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat([mItem]).concat(quickSort(right))
// }


var sortColors = function (nums) {
  if (nums.length <= 2) return nums;
  let mIndex = Math.floor(nums.length / 2);
  let mItem = nums.splice(mIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < mItem) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return sortColors(left).concat([mItem]).concat(sortColors(right))
};











console.log(sortColors([2, 0, 2, 1, 1, 0]))