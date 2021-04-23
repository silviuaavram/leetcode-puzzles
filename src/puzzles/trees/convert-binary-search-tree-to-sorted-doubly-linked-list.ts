/**
 * https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
 */

import {DoublyListNode, TreeNode} from 'utils'

export function convertTreeToList(head: TreeNode): DoublyListNode {
  if (!head) {
    return null
  }


  let listHead: DoublyListNode
  const treeNodeQueue = [head]
  const visitedTreeNodes: TreeNode[] = []
  let currentListNode: DoublyListNode

  while (treeNodeQueue.length) {
    const currentTreeNode = treeNodeQueue[treeNodeQueue.length -1]

    if (
      currentTreeNode.left &&
      visitedTreeNodes.indexOf(currentTreeNode.left) < 0
    ) {
      treeNodeQueue.push(currentTreeNode.left)
      continue
    }

    if (!currentListNode) {
      currentListNode = {val: currentTreeNode.val, next: null, prev: null}
      listHead = currentListNode
    } else {
      currentListNode.next = {
        val: currentTreeNode.val,
        next: null,
        prev: currentListNode,
      }
      currentListNode = currentListNode.next
    }

    treeNodeQueue.pop()
    visitedTreeNodes.push(currentTreeNode)

    if (
      currentTreeNode.right &&
      visitedTreeNodes.indexOf(currentTreeNode.right) < 0
    ) {
      treeNodeQueue.push(currentTreeNode.right)
    }
  }

  return listHead
}
