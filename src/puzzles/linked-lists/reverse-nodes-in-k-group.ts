import {ListNode} from 'utils'

//           -
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
// 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 7
// 1 <- 2 <- 3
/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 */
export function reverseKGroup(
  head: ListNode | null,
  k: number,
): ListNode | null {
  if (!head || !head.next || k < 2) {
    return head
  }

  let current = head
  let index = 0
  let subListHead: ListNode

  while (current) {
    if (index === k - 1) {
      index = 0

      let revCurrent = subListHead ? subListHead.next : head
      let revPrevious: ListNode

      for (let reverseIndex = 0; reverseIndex < k; reverseIndex++) {
        const next = revCurrent.next
        revCurrent.next = revPrevious || current.next
        revPrevious = revCurrent
        revCurrent = next
      }

      if (!subListHead) {
        subListHead = head
        head = current
      } else {
        const prevSubListHeadNext = subListHead.next
        subListHead.next = current
        subListHead = prevSubListHeadNext
      }

      current = revCurrent
    } else {
      current = current.next
      index++
    }
  }

  return head
}
