/**
 * https://leetcode.com/problems/binary-tree-vertical-order-traversal/
 */

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
import {TreeNode} from 'utils'

export function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const queue = [root]
  const columns = new Map<TreeNode, number>()
  const levels = new Map<number, number[]>()
  columns.set(root, 0)

  while (queue.length) {
    const current = queue.shift()
    const currentLevel = columns.get(current)

    if (current.left) {
      queue.push(current.left)
      columns.set(current.left, currentLevel - 1)
    }

    if (current.right) {
      queue.push(current.right)
      columns.set(current.right, currentLevel + 1)
    }

    if (!levels.has(currentLevel)) {
      levels.set(currentLevel, [])
    }

    levels.get(currentLevel).push(current.val)
  }

  return Array.from(levels.entries())
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, value) => [...acc, value[1]], [])
}
