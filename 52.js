// 二叉树

// 先序遍历  深度优先遍历
// 递归
// var preorderTraversal = function (root) {
//   if (!root) return [];
//   let arr = [root.val];
//   return arr.concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));
// };

// 迭代

var preorderTraversal = (root) => {
  if (!root) return [];
  let list = [];
  let stack = [root];
  while (stack.length > 0) {
    let curNode = stack.pop();
    list.push(curNode.val)
    if (curNode.right) stack.push(curNode.right)
    if (curNode.left) stack.push(curNode.left);
  }
  return list;
}

// 中序遍历
// 递归
// var inorderTraversal = function (root) {
//   if (!root) return [];
//   let arr = [root.val];
//   return inorderTraversal(root.left).concat(arr).concat(inorderTraversal(root.right));
// }

// 迭代
// isTrue记录是否要输出
var inorderTraversal = function (root) {
  if (!root) return [];
  let list = [];
  let stack = [[root, false]];
  while (stack.length > 0) {
    let curNode = stack.pop();
    let curr = curNode[0];
    let isTrue = curNode[1];
    if (isTrue) {
      list.push(curr.val);
    } else {
      if (curr.right) {
        stack.push([curr.right, false]);
      }
      stack.push([curr, true]);
      if (curr.left) {
        stack.push([curr.left, false]);
      }
    }
  }
  return list;
}


// 后续遍历

// 递归
// var postorderTraversal = function (root) {
//   if (!root) return [];
//   let arr = [root.val];
//   return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat(arr);
// }

// 迭代

var postorderTraversal = function (root) {
  if (!root) return [];
  let list = [];
  let stack = [[root, false]];
  while (stack.length > 0) {
    let curNode = stack.pop();
    let curr = curNode[0];
    let isTrue = curNode[1];
    if (isTrue) {
      list.push(curr.val);
    } else {
      stack.push([curr, true]);
      if (curr.right) {
        stack.push([curr.right, false]);
      }
      if (curr.left) {
        stack.push([curr.left, false]);
      }
    }
  }
  return list;
}

// 层次遍历  广度遍历
var levelOrder = function (root) {
  if (!root) return [];
  let list = [];
  let stack = [root]; // 存最后一层的节点
  list.push([root.val]);
  while (stack.length) {
    let newList = [];
    let newStack = [];
    for (let i = 0; i < stack.length; i++) {
      if (stack[i].left) {
        newStack.push(stack[i].left)
        newList.push(stack[i].left.val)
      };
      if (stack[i].right) {
        newStack.push(stack[i].right)
        newList.push(stack[i].right.val)
      };
    }
    stack = newStack;
    newList.length && list.push(newList);
  }
  return list;
};


// 判断二叉树是否对称
var isSymmetric = function (root) {
  if (root === null) return true;
  function isSame(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    return isSame(left.left, right.right) && isSame(left.right, right.left);
  }
  return isSame(root.left, root.right)
};

