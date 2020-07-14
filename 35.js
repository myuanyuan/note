// 二叉树 查找最近的公共节点
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root;
  if (root.val === p.val || root.val === q.val) return root;
  let l = lowestCommonAncestor(root.left, p, q);
  let r = lowestCommonAncestor(root.right, p, q);
  if (l && r) return root;
  if (l) return l;
  if (r) return r;
}