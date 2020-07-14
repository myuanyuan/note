// 二分查找
const binarySearch = (target, arr) => {
  if (!arr.length) return -1;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt(start + (end - start) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1
}

// console.log(search([1, 3, 4, 6, 8, 9], 9))

// 单词拆分
var wordBreak = function (s, wordDict) {
  let set = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}

//   颜色排列
var sortColors = function (nums) {
  let start = 0, end = nums.length - 1;
  let curr = 0;
  while (curr <= end) {
    if (nums[curr] === 0) {
      [nums[start], nums[curr]] = [nums[curr], nums[start]]
      curr++
      start++
    } else if (nums[curr] === 2) {
      [nums[end], nums[curr]] = [nums[curr], nums[end]]
      end--
    } else {
      curr++;
    }
  }
  return nums;
};

console.log(sortColors([1, 2, 0]))