/** 数对和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// var pairSums = function (nums, target) {
//   let map = new Map();
//   let list = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let compare = target - nums[i];
//     if (map.has(compare) && map.has(nums[i])) {
//       if (map.get(nums[i]) === 1) {
//         map.delete(nums[i]);
//       } else {
//         map.set(nums[i], map.get(nums[i]) - 1)
//       }
//       if (!map.has(compare)) continue;
//       if (map.get(compare) === 1) {
//         map.delete(compare);
//       } else {
//         map.set(compare, map.get(compare) - 1)
//       }
//       list.push([nums[i], compare]);
//     }
//   }
//   return list;
// };

var pairSums = (nums, target) => {
  nums = nums.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  let list = [];
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[l] + nums[r] == target) {
      list.push([nums[l], nums[r]]);
      l += 1;
      r -= 1;
    } else if (nums[l] + nums[r] < target) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return list;
}


console.log(pairSums([2, 1, 8, 6, 5, 7, -1, 3, 5, 5], 7))

// 洗牌 田忌赛马
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function (A, B) {
  //排序
  A.sort((a, b) => a - b);
  const getMinLargeNum = function (num) {
    for (let i = 0; i < A.length; i++) {
      //找到第一个比num大的数，返回
      if (num < A[i]) {
        return i;
      }
    }
    //找不到，取第一个，因为第一个是最小的，是下等马
    return 0;
  }
  let ans = [];
  for (let i = 0; i < B.length; i++) {
    let idx = getMinLargeNum(B[i]);
    ans.push(A[idx]);
    A.splice(idx, 1);
  }
  return ans;
};

// 尾递归优化

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

