/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

import {TreeNode} from 'utils'

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  let queue = [root]
  let nextQueue = []
  const result = []
  const levelResult = []

  while (queue.length) {
    const current = queue.shift()

    if (current.left) {
      nextQueue.push(current.left)
    }

    if (current.right) {
      nextQueue.push(current.right)
    }

    levelResult.push(current.val)

    if (!queue.length) {
      result.push([...levelResult])
      queue = [...nextQueue]

      levelResult.length = 0
			nextQueue.length = 0
    }
  }

  return result
}
