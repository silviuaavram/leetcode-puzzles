/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

import {ListNode} from 'utils'

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  
  let aux1: ListNode | null = l1
  let aux2: ListNode | null = l2
  let result: ListNode | null = null
  let head: ListNode | null = null

  while (aux1 && aux2) {
    if (aux1.val <= aux2.val) {
      if (result === null) {
        result = aux1
        head = result
      } else {
        result.next = aux1
        result = result.next
      }
      aux1 = aux1.next
    } else {
      if (result === null) {
        result = aux2
        head = result
      } else {
        result.next = aux2
        result = result.next
      }
      aux2 = aux2.next
    }
  }

  if (aux1) {
    (result as ListNode).next = aux1
  } else if (aux2) {
    (result as ListNode).next = aux2
  }

  return head
}
