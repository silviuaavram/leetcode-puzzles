/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 */
import {ListNode} from 'utils'

export interface ListNodeWithRandom extends ListNode {
  random: ListNodeWithRandom | null
  next: ListNodeWithRandom | null
}

export function copyRandomList(
  head: ListNodeWithRandom | null,
): ListNodeWithRandom | null {
  const nodes = new Map<ListNodeWithRandom, ListNodeWithRandom>()
  let current = head
  let copy

  while (current) {
    const copy: ListNodeWithRandom = {
      val: current.val,
      next: null,
      random: null,
    }

    nodes.set(current, copy)

    current = current.next
  }

  current = head
  copy = nodes.get(current)
  const copyHead = copy

  while (current) {
    const next = current.next
    const random = current.random
    const copyNext = nodes.get(next) || null
    const copyRandom = nodes.get(random) || null

    copy.next = copyNext
    copy.random = copyRandom

    copy = copy.next
    current = current.next
  }

  return copyHead
}
