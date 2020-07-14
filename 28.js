// 合并两个排序的链表
// 输入：1 -> 2 -> 4, 1 -> 3 -> 4
// 输出：1 -> 1 -> 2 -> 3 -> 4 -> 4
// 限制： 0 <= 链表长度 <= 1000

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
};
