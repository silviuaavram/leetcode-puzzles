/**
 * https://leetcode.com/problems/rotate-list/
 */

import {ListNode} from 'utils'

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) {
    return head
  }

  let current = head
  let length = 1
  let last = current
  let result

  while (current.next) {
    last = current.next
    length++
    current = current.next
  }

  if (k === length || k % length === 0) {
    return head
  }

  const rotatePos = length - (k > length ? k % length : k)

  current = head

  for (let index = 0; index < rotatePos - 1; index++) {
    current = current.next
  }

  result = current.next
  last.next = head
	current.next = null

	return result
}
