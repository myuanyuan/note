// 是否存在二叉树路径总和sum 题目是指是否存在一条完整路径和为sum

// var hasPathSum = function (root, sum) {
//   if (!root) return false;
//   sum = sum - root.val;
//   if (!root.left && !root.right) {
//     return sum === 0;
//   }
//   //如果还有子节点，则继续递归遍历该节点的孩子
//   return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
// };


// hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22);

var hasPathSum = function (root, sum) {
  if (!root) return false;
  sum = sum - root.val;
  if (!root.left && !root.right) {
    return sum === 0;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};


hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22);