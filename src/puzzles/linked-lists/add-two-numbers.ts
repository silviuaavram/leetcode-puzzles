/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import {ListNode} from 'utils'

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }

  let current1 = l1
  let current2 = l2
  let currentResult: ListNode
  let headResult
  let carryOver: boolean

  while (current1 || current2) {
    const val1 = current1?.val ?? 0
    const val2 = current2?.val ?? 0
    let sum = val1 + val2 + (carryOver ? 1 : 0)
    carryOver = false

    if (sum > 9){
      carryOver = true
      sum = sum % 10
    }

    const newNode: ListNode = {val: sum, next: null}

    if (!currentResult) {
      currentResult = newNode
      headResult = newNode
    } else {
      currentResult.next = newNode
      currentResult = currentResult.next
    }

    if (current1) {
      current1 = current1.next
    }
    if (current2) {
      current2 = current2.next
    }
  }

  if (carryOver) {
    currentResult.next = {val: 1, next: null}
  }

  return headResult
}
