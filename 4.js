// 两数之和
// var twoSum = function (nums, target) {
//   let map = new Map();
//   // 存map
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i);
//   }
//   // 遍历 收否存在不等于x本身的 target-x
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (map.has(complement) && map.get(complement) != i) {
//       return [i, map.get(complement)];
//     }
//   }
//   return null
// };


// var twoSum = function (nums, target) {

//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i)  // value为下标
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];

//     if (map.get(complement) !== undefined && map.get(complement) != i) { // 下标存在且不等于当前下标
//       return [i, map.get(complement)] // 返回下标
//     }
//   }
//   return null

// };



const twoSum = (arr, target) => {
  if (!arr.length) return null;
  let map = new Map();
  for (let i = 0; i <= arr.length; i++) {
    map.set(arr[i], i);
  }
  for (let j = 0; j < arr.length; j++) {
    let ce = map.get(target - arr[j]);
    if (ce && ce !== j) {
      return [j, ce];
    }
  }
  return null;

}


console.log(twoSum([2, 7, 11, 15], 13))