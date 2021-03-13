/**
 * Reverse a linked list from position m to n. Do it in one-pass.
 * Note: 1 ≤ m ≤ n ≤ length of list.
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (!head || !head.next) {
    return head
  }

  let current = head
  let prev = null
  let next
  let index = 1

  while (index < m) {
    prev = current
    current = current.next
    index++
  }

  const start = prev
  const end = current

  while (index <= n) {
    next = current.next
    current.next = prev
    prev = current
    current = next
    index++
  }

  if (start) {
    start.next = prev
  } else {
    head = prev
  }

  end.next = current

  return head
}

const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {val: 3, next: {val: 4, next: {val: 5, next: null}}},
  },
}
const l2 = {
  val: 1,
  next: {
    val: 2,
    next: {val: 3, next: {val: 4, next: {val: 5, next: null}}},
  },
}
const l3 = {
  val: 1,
  next: {
    val: 2,
    next: {val: 3, next: {val: 4, next: {val: 5, next: null}}},
  },
}
const l4 = {
  val: 1,
  next: {
    val: 2,
    next: {val: 3, next: {val: 4, next: {val: 5, next: null}}},
  },
}

console.log(JSON.stringify(reverseBetween(Object.assign({}, l1), 2, 4)))
console.log(JSON.stringify(reverseBetween(Object.assign({}, l2), 1, 4)))
console.log(JSON.stringify(reverseBetween(Object.assign({}, l3), 1, 5)))
console.log(JSON.stringify(reverseBetween(Object.assign({}, l4), 2, 5)))
