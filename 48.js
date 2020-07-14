// 动态规划

// dp创建
// Array.from(new Array(n+1), ()=>new Array(m+1).fill(0))

// 最长公共子序列

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function (text1, text2) {
//   let n = text1.length;
//   let m = text2.length;
//   let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       if (text1[i - 1] == text2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       } else {
//         dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
//       }
//     }
//   }
//   return dp[n][m];
// };

//  最长回文子串

/**
 * @param {string}
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   let total = s.length;
//   // 储存上面表格值的数组
//   let dp = Array.from(Array(total)).map(() => Array(total).fill(false))
//   let start = 0, end = 0, len = 0, maxLen = 0;
//   // j 是子串的起始位置，i 是结束位置
//   for (let i = 0; i < total; ++i) {
//     for (let j = 0; j <= i; ++j) {
//       if (j == i) {
//         dp[j][i] = true;
//       } else if (i - j == 1) {
//         dp[j][i] = s[i] == s[j];  // 相邻
//       } else if (i - j > 1) {
//         dp[j][i] = s[i] == s[j] && dp[j + 1][i - 1]; // 右上角 孩子是否是回文
//       }
//       len = i - j + 1;
//       if (dp[j][i] && len > maxLen) {
//         // 只有当该子串是回文，且长度大于上一个回文串的长度时才更新变量
//         maxLen = len;
//         start = j;
//         end = i;
//       }
//     }
//   }
//   return s.substr(start, end - start + 1);
// };

// 最长上升子序列

// var lengthOfLIS = function (nums) {
//   const len = nums.length
//   if (len == 0) return 0
//   if (len == 1) return 1
//   let dp = new Array(len).fill(1);
//   let max = 0;
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     max = Math.max(max, dp[i]);
//   }
//   return max;
// };


// lengthOfLIS([1, 4, 3, 4, 2])

// 单词拆分
// var wordBreak = function (s, wordDict) {
//   // dp[i]表示0-i之间的字符串是否可以被拆分并满足题设条件存在于wordDict中
//   let dp = new Array(s.length).fill(false);
//   let set = new Set(wordDict);
//   for (let i = 0; i < s.length; i++) {
//     // 检查0-i之间的字符串是否直接存在于wordDict中
//     if (set.has(s.substring(0, i + 1))) {
//       dp[i] = true;
//       continue;
//     }
//     // 这一步是为了检查。假如s.substring(0,i)不直接存在于wordDict中
//     // 那么判断拆分之后是否存在于wordDict中
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && set.has(s.substring(j + 1, i + 1))) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }
//   return dp[s.length - 1]
// };

// var wordBreak = function (s, wordDict) {
//   let dp = new Array(s.length).fill(false);
//   let set = new Set(wordDict);
//   for (let i = 0; i < s.length; i++) {
//     if (set.has(s.substring(0, i + 1))) {
//       dp[i] = true;
//       continue;
//     }
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && set.has(s.substring(j + 1, i + 1))) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }
//   return dp[s.length - 1];
// }

// console.log(wordBreak("applepenapple", ["apple", "pen"]))


// 最大公共前缀

// var longestCommonPrefix = function (strs) {
//   if (strs === null || strs.length === 0) return "";
//   let prevs = strs[0];
//   if (prevs === "") return "";
//   for (let i = 1; i < strs.length; i++) {
//     let j = 0;
//     for (; j < prevs.length && j < strs[i].length; j++) {
//       if (prevs.charAt(j) !== strs[i].charAt(j)) break;
//     }
//     prevs = prevs.substring(0, j);
//   }
//   return prevs;
// };

var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) return '';
  let prev = strs[0];
  if (!prev.length) return '';
  for (let i = 1; i < strs.length; i++) { // i用来记录第项
    let j = 0;
    for (; j < prev.length; j++) {
      if (strs[i][j] !== prev[j]) break;
    }
    prev = prev.subsring(0, j); // j用来记录当前项的第j个字母
  }
  return prev;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))


// 字符串去重
// var unique = function (str) {
//   let obj = {};
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (!obj[str[i]]) newStr += str[i];
//     obj[str[i]] = true;
//   }
//   return newStr;
// }

// 数组去重

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

// console.log(unique([1, 2, 4, 2, 4, 5, 1, 5, 7, 8]))


// 冒泡排序
// var bubbleSort = function (arr) {
// if(!arr||!arr.length)return arr;
//   var len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }


// console.log(bubbleSort([1, 2, 4, 2, 4, 5, 1, 5, 7, 8]))

// 快排

// var quickSort = function (arr) {
//   if (!arr || arr.length <= 1) return arr;
//   let mIndex = Math.floor(arr.legth / 2);
//   let mItem = arr.splice(mIndex, 1)[0];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < mItem) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([mItem], quickSort(right));
// }

// console.log(quickSort([1, 2, 4, 2, 4, 5, 1, 5, 7, 8]));

// 二分查找
// const binarySearch = (target, arr) => {
//   if (!arr.length) return -1;
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let mid = parseInt(start + (end - start) / 2);
//     if (target === arr[mid]) {
//       return mid;
//     } else if (target > arr[mid]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return -1
// }

// console.log(bsearch([1, 2, 4, 2, 4, 5, 1, 5, 7, 8], 2));

// 十进制转二进制后的1的个数
// var fn = function (num) {
//   let str = num.toString(2);
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '1') count++;
//   }
//   return count;
// }

// console.log(fn(1011))

// 括号是否合法
// var isValid = function (s) {
//   var map = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
//   }
//   var leftArr = []
//   for (var ch of s) {
//     if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
//     else { //为右括号时，与数组末位匹配
//       if (ch != map[leftArr.pop()]) return false; // 与最后一位比较 并pop最后一位
//     }
//   }
//   return !leftArr.length // 防止全部为左括号
// };
// console.log(isValid('{()[]}'))


// 金币零钱
// var coinChange = function (coins, amount) {
//   let dp = new Array(amount + 1).fill(Infinity); // 无限大
//   dp[0] = 0;
//   for (let i = 1; i <= amount; i++) {
//     for (let coin of coins) {
//       if (i - coin >= 0) {  // 不足或等于当前amount
//         dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//       }
//     }
//   }
//   return dp[amount] === Infinity ? -1 : dp[amount];
// }

// // 无重复字符的最长子串
// var lengthOfLongestSubstring = function (s) {
//   let map = new Map();
//   let start = -1, maxLen = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       start = Math.max(map.get(s[i]), start); // 改变起始位置
//     }
//     map.set(s[i], i);
//     maxLen = Math.max(i - start, maxLen);
//   }
//   return maxLen;
// };

// console.log(lengthOfLongestSubstring('wdrtwfgj'))

// 比较版本号
var compareVersion = (version1, version2){
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  let i = 0;
  while (i <= arr1.length || i <= arr2.length) {
    let v1 = Number(arr1[i]) || 0;
    let v2 = Number(arr2[i]) || 0;
    if (v1 > v2) return 1;
    if (v1 < v2) return -1;
    i++
  }
  return 0;
}


