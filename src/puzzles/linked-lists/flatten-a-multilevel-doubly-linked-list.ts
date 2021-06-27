/**
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */

import {DoublyListNode} from 'utils'

/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

export interface MultilevelDoublyListNode extends DoublyListNode {
  prev: MultilevelDoublyListNode
  next: MultilevelDoublyListNode
  child?: MultilevelDoublyListNode
}

type Node = MultilevelDoublyListNode

export function flatten(head: Node | null): Node | null {
  const nodesWithChildren: Node[] = []
  let current = head

  while (current) {
    if (current.child) {
      nodesWithChildren.push(current)

      current = current.child

      continue
    }

    if (current.next === null && nodesWithChildren.length) {
      const nodeToReturn = nodesWithChildren.pop()
      const nodeToReturnNext = nodeToReturn.next

      nodeToReturn.next = nodeToReturn.child
      nodeToReturn.child.prev = nodeToReturn
      nodeToReturn.child = null

      current.next = nodeToReturnNext
      if (nodeToReturnNext) {
        nodeToReturnNext.prev = current
      }

      current = nodeToReturn

      continue
    }

    current = current.next
  }

  return head
}
