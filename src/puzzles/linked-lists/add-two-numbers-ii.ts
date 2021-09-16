/**
 * https://leetcode.com/problems/add-two-numbers-ii/
 */
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
  const stackResult: number[] = []
  const stackL1: number[] = []
  const stackL2: number[] = []
  let current1 = l1
  let current2 = l2
  let carryOver = false

  while (current1 || current2) {
    if (current1) {
      stackL1.push(current1.val)
      current1 = current1.next
    }

    if (current2) {
      stackL2.push(current2.val)
      current2 = current2.next
    }
  }

  while (stackL1.length || stackL2.length) {
    let result = 0

    if (stackL1.length) {
      result += stackL1.pop()
    }

    if (stackL2.length) {
      result += stackL2.pop()
    }

    if (carryOver) {
      carryOver = false
      result++
    }

    if (result > 9) {
      carryOver = true
      result %= 10
    }

    stackResult.push(result)
  }

  if (carryOver) {
    stackResult.push(1)
  }

  let currentResultL = {} as ListNode
  const result = currentResultL

  while (stackResult.length) {
    currentResultL.val = stackResult.pop()

    if (stackResult.length === 0) {
      currentResultL.next = null
    } else {
      currentResultL.next = {} as ListNode
      currentResultL = currentResultL.next
    }
  }

  return result
}
