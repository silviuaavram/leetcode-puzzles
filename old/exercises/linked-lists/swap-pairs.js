/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 *
 * Example:
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let current = head
  let aux = null

  while (current && current.next) {
    if (current === head) {
      head = current.next
    }

    if (aux) {
      aux.next = current.next
    }
    aux = current.next
    current.next = aux.next
    aux.next = current
    aux = current
    current = current.next
  }

  return head
}

const l1 = {val: 2, next: {val: 4, next: {val: 3, next: null}}}
const l4 = {
  val: 9,
  next: {
    val: 10,
    next: {
      val: 11,
      next: {val: 12, next: {val: 13, next: {val: 14, next: null}}},
    },
  },
}
const l2 = {val: 5, next: {val: 6, next: null}}
const l3 = {val: 8, next: null}

// console.log(swapPairs(l1));
console.log(JSON.stringify(swapPairs(l4)))
// console.log(swapPairs(l3));
// console.log(swapPairs(l4));
