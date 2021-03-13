const {getLinkedList, expect} = require('../../lib')

/**
 * Given a linked list, rotate the list to the right by k places, where k is non-negative.
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) {
    return head
  }

  let current = head
  let length = 1

  while (current.next) {
    length++
    current = current.next
  }

  const kFinal = k % length
  let tail = current
  current = head

  for (let index = 0; index < length - kFinal - 1; index++) {
    current = current.next
  }

  tail.next = head
  head = current.next
  current.next = null

  return head
}

expect(rotateRight(getLinkedList(1, 2, 3, 4, 5), 2)).toEqual(
  getLinkedList(4, 5, 1, 2, 3),
)
expect(rotateRight(getLinkedList(0, 1, 2), 4)).toEqual(
  getLinkedList(2, 0, 1),
)
expect(rotateRight(getLinkedList(1), 6)).toEqual(getLinkedList(1))
expect(rotateRight(getLinkedList(), 6)).toEqual(getLinkedList())