const {getLinkedList, expect} = require('../../lib')

/**
 * Given a linked list, determine if it has a cycle in it.

 * To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list 
 * where tail connects to. If pos is -1, then there is no cycle in the linked list.
 * 
 * https://leetcode.com/problems/linked-list-cycle/
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }

  let auxNormal = head
  let auxDouble = head.next

  while (auxDouble && auxDouble.next) {
    if (auxDouble.val === auxNormal.val) {
      return true
    }

    auxNormal = auxNormal.next
    auxDouble = auxDouble.next.next
  }

  return false
}

const l1 = getLinkedList(1)
const l2 = getLinkedList(1, 2)
const l3 = getLinkedList(1, 2)
l3.next.next = l3
const l4 = getLinkedList(1, 2, 3, 4)
l4.next.next.next = l4.next
const l5 = getLinkedList(1, 2, 3, 4, 5, 6, 7, 8)
l5.next.next.next.next.next.next.next = l5.next.next.next.next.next.next
const l6 = getLinkedList(1, 2, 3, 4, 5, 6)

expect(hasCycle(l1)).toBe(false)
expect(hasCycle(l2)).toBe(false)
expect(hasCycle(l3)).toBe(true)
expect(hasCycle(l4)).toBe(true)
expect(hasCycle(l5)).toBe(true)
expect(hasCycle(l6)).toBe(false)
