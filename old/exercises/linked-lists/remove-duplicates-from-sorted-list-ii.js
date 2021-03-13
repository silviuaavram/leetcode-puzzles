const {getLinkedList, expect} = require('../../lib')
/**
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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
var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head
  }

  let prev = null
  let current = head
  let jump = null
  let val = current.val

  while (current.next) {
    if (val === current.next.val) {
      jump = jump || prev || head
    } else {
      if (jump) {
        if (!prev) {
          head = current.next
          prev = null
        } else {
          jump.next = current.next
          prev = jump
        }
        jump = null
      } else {
        prev = current
      }
    }

    val = current.next.val
    current = current.next
  }

  if (jump) {
    if (!prev) {
      head = current.next
      prev = null
    } else {
      jump.next = current.next
      prev = jump
    }
  }

  return head
}

const actual1 = deleteDuplicates(getLinkedList(1, 1, 2, 3, 3, 4))
const actual2 = deleteDuplicates(getLinkedList(1, 1, 1))
const actual3 = deleteDuplicates(getLinkedList(1, 2, 3, 4))
const actual4 = deleteDuplicates(getLinkedList(1, 2, 3, 4, 4))
const actual5 = deleteDuplicates(getLinkedList(1, 2, 3, 3, 4, 4, 5))
const actual6 = deleteDuplicates(getLinkedList(1, 1))

expect(deleteDuplicates(null)).toBe(null)
expect(deleteDuplicates(getLinkedList(1))).toEqual(getLinkedList(1))
expect(actual1).toEqual(getLinkedList(2, 4))
expect(actual2).toEqual(getLinkedList())
expect(actual3).toEqual(getLinkedList(1, 2, 3, 4))
expect(actual4).toEqual(getLinkedList(1, 2, 3))
expect(actual5).toEqual(getLinkedList(1, 2, 5))
expect(actual6).toEqual(getLinkedList())

