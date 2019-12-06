/**
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * Given n will always be valid.
 *
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 */

const l1 = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) {
    return head;
  }

  const map = new Map();
  let aux = head;
  let i = 0;

  while (aux) {
    map.set(i++, aux);
    aux = aux.next;
  }

  const toRemoveIndex = map.size - n;

  if (toRemoveIndex === 0) {
    return head.next;
  }

  const toRemove = map.get(toRemoveIndex);
  const beforeToRemove = map.get(toRemoveIndex - 1);
  beforeToRemove.next = toRemove.next;

  return head;
};

console.log(JSON.stringify(removeNthFromEnd(l1, 5)));
