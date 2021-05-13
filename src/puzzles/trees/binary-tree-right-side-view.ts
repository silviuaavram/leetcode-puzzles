/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 */

import {TreeNode} from 'utils'

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  const queue = [root]
  const nextQueue = []
  const result: number[] = [root.val]

  while (queue.length) {
    const current = queue.shift()

    if (current.left) {
      nextQueue.push(current.left)
    }

    if (current.right) {
      nextQueue.push(current.right)
    }

    if (!queue.length && nextQueue.length) {
      result.push(nextQueue[nextQueue.length - 1].val)
      queue.push(...nextQueue)
      nextQueue.length = 0
    }
  }

  return result
}
