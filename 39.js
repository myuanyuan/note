// 链表求和 反向
var addTwoNumbers = function (l1, l2) {
  let sum = 0,
    head = {},
    cur = head;
  while (l1 || l2 || sum) {
    sum += (l1 && l1.val) + (l2 && l2.val);
    cur = cur.next = new ListNode(sum % 10); // cur = new ListNode(sum % 10); cur.next= new ListNode(sum % 10);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    sum = Math.floor(sum / 10); // 舍去小数 存十位数
  }
  return head.next;
};

