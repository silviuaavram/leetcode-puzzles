/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const l1 = {val: 2, next: {val: 4, next: {val: 3, next: null}}}
const l2 = {val: 5, next: {val: 6, next: {val: 4, next: null}}}
const l3 = {val: 8, next: null}
const l4 = {val: 9, next: {val: 9, next: null}}
const l5 = {val: 0, next: null}
const l6 = {val: 0, next: null}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let rest = 0
  let result = {}
  let first = result

  while (l1 && l2) {
    let val = l1.val + l2.val + rest
    rest = 0

    if (val > 9) {
      rest = 1
      val = Math.trunc(val % 10)
    }

    result.val = val
    result.next =
      !l1.next && !l2.next ? (rest ? {val: 1, next: null} : null) : {}

    l1 = l1.next
    l2 = l2.next
    result = result.next
  }

  if (l1) {
    const remainingList = rest ? addRest(l1) : l1
    result.val = remainingList.val
    result.next = remainingList.next
  }
  if (l2) {
    const remainingList = rest ? addRest(l2) : l2
    result.val = remainingList.val
    result.next = remainingList.next
  }
  return first
}

function addRest(l) {
  let first = l
  let current = l
  while (current) {
    const val = current.val + 1

    if (val === 10) {
      current.val = 0

      if (current.next === null) {
        current.next = {val: 1, next: null}
        return first
      }
    } else {
      current.val = val
      return first
    }
    current = current.next
  }
  return first
}

console.log(addTwoNumbers(l5, l6))
