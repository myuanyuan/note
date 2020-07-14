// 206 反转一个单链表。
// 输入: 1 -> 2 -> 3 -> 4 -> 5 -> NULL

// 输出: NULL <-1 <- 2 <- 3 <- 4 <- 5

// 输出: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

// 递归
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let newHead = reverseList(haed.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

// var reverseList = function (head) {
//   if (!head || !head.next) return head;
//   let newHead = null;
//   while (head !== null) {
//     let temp = head.next;
//     head.next = newHead;
//     newHead = head;
//     head = temp;
//   }
//   return newHead;
// };