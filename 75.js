
// 数组去重 无序 牺牲空间
// var unique = function (arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       arr.splice(i, 1);
//       i--;
//     }
//     obj[arr[i]] = true;
//   }
//   return arr;
// }

// 数组去重 有序 返回长度即可 倒序遍历
// var unique = function (nums) {
//   for (let i = nums.length; i > 0; i--) {
//     if (nums[i] === nums[i - 1]) nums.splice(i, 1);
//   }
//   return nums.length;
// };

// // 双指针
// var unique = function (nums) {
//   if (nums.length == 0) return 0;
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] != nums[i]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i + 1;
// }
// console.log(unique([1, 1, 3, 4, 4, 5, 6, 7]))

// 首字母大小写

function bigLetter(str) {
  return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
    return $1.toUpperCase() + $2.toLowerCase();
  });
}
console.log(bigLetter(`this is a pen haha nihao`))

// css 实现
// text-transform: capitalize;