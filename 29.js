// 相交链表
// 编写一个程序，找到两个单链表相交的起始节点。

// var getIntersectionNode = function (headA, headB) {
//   let [pA, pB] = [headA, headB];
//   while (pA !== pB) {
//     pA = pA === null ? headB : pA.next;  // 补差
//     pB = pB === null ? headA : pB.next;
//   }
//   return pA;
// };
// 思路 两链表拼接
var getIntersectionNode = function (headA, headB) {
  let [pA, pB] = [headA, headB];
  while (pA !== pB) {
    pA = pA !== null ? pA.next : headB;
    pB = pB !== null ? pB.next : headA;
  }
  return pA;
};