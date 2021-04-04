/**
 * https://leetcode.com/problems/sort-list/
 */

import {ListNode} from 'utils'
let x = 0

export function sortList(
  head: ListNode | null,
  size?: number,
): ListNode | null {
  if (!head || !head.next || size === 1) {
    return head
  }

  if (size === undefined) {
    size = 0
    let current = head

    while (current) {
      size++
      current = current.next
    }
  }

  let result: ListNode
  let resultHead: ListNode

  function update(l: ListNode): void {
    if (!resultHead) {
      result = l
      resultHead = l
    } else {
      result.next = l
      result = result.next
    }
  }

  if (size === 2) {
    if (head.val < head.next.val) {
      return head
    }
    const aux = head
    head = head.next
    head.next = aux
    aux.next = null

    return head
  } else {
    const halfSize = Math.floor(size / 2)
    let secondHead = head

    for (let index = 0; index < halfSize - 1; index++) {
      secondHead = secondHead.next
    }

		const l = secondHead.next
		secondHead.next = null

    let l1 = sortList(head, halfSize)
    let l2 = sortList(l, size - halfSize)


    for (let index = 0; index < size; index++) {
      if (!l1 || l2 && l1.val > l2.val) {
        update(l2)
				l2 = l2.next
      } else {
				update(l1)
				l1 = l1.next
			}
    }

		result.next = null
		return resultHead
  }
}
