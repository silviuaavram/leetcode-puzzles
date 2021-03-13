const {getLinkedList, expect} = require('../../lib')
/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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

  let val = head.val
  let current = head

  while (current.next) {
    let jumpNext = current.next

    while (jumpNext && jumpNext.val === val) {
      jumpNext = jumpNext.next
    }

    current.next = jumpNext
    current = current.next

    if (current) {
      val = current.val
    } else {
      break
    }
  }

  return head
}

const actual1 = deleteDuplicates(getLinkedList(1, 1, 2))
const actual2 = deleteDuplicates(getLinkedList(1, 1, 1))
const actual3 = deleteDuplicates(getLinkedList(1, 2, 2))
const actual4 = deleteDuplicates(getLinkedList(1))
const actual5 = deleteDuplicates(getLinkedList())

const expected1 = getLinkedList(1, 2)
const expected2 = getLinkedList(1)

expect(actual1).toEqual(expected1)
expect(actual2).toEqual(expected2)
expect(actual3).toEqual(expected1)
expect(actual4).toEqual(actual4)
expect(actual5).toEqual(actual5)
