/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
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

export function maxLevelSum(root: TreeNode | null): number {
  const queue: TreeNode[] = [root]
  const nextQueue: TreeNode[] = []
  let levelSum = 0
  let result = 0
  let maxSum
  let level = 1

  while (queue.length) {
    const current = queue.shift()
    levelSum += current.val

    if (current.left) {
      nextQueue.push(current.left)
    }

    if (current.right) {
      nextQueue.push(current.right)
    }

    if (queue.length === 0) {
      if (maxSum === undefined || maxSum < levelSum) {
        maxSum = levelSum
        result = level
      }

      if (nextQueue.length > 0) {
        levelSum = 0
        level++

        queue.push(...nextQueue)
        nextQueue.length = 0
      }
    }
  }

  return result
}
