import {ListNode} from 'utils'

export function reverse(head: ListNode) {
  // Write your code here
  if (!head) {
    return head
  }

  const nodesToReverse = []
  let result
  let current = head
  let lastOddNode: ListNode

  while (current) {
    if (current.val % 2 === 0) {
      nodesToReverse.push(current)
    } else {
      for (let index = 0; index < nodesToReverse.length; index++) {
        const node = nodesToReverse[nodesToReverse.length - 1 - index]

        if (!lastOddNode) {
          lastOddNode = node
          result = node
        } else {
          lastOddNode.next = node
          lastOddNode = node
        }
      }

      nodesToReverse.length = 0

      if (lastOddNode) {
        lastOddNode.next = current
        lastOddNode = current
      } else {
        lastOddNode = current
        result = current
      }
    }

    current = current.next
  }

  for (let index = 0; index < nodesToReverse.length; index++) {
    const node = nodesToReverse[nodesToReverse.length - 1 - index]

    if (!lastOddNode) {
      lastOddNode = node
      result = node
    } else {
      lastOddNode.next = node
      lastOddNode = node
    }

    lastOddNode.next = null
  }

  return result
}
