/**
 * https://leetcode.com/problems/check-completeness-of-a-binary-tree/
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

export function isCompleteTree(root: TreeNode | null): boolean {
  const queue = [root]
  const nextQueue: TreeNode[] = []

  while (queue.length) {
    const current = queue.shift()

    if (!current) {
      // check here
      if (nextQueue.length) {
        for (const node of nextQueue) {
          if (node) {
            return false
          }
        }
      }

      for (let index = 0; index < queue.length; index++) {
        if (queue[index]) {
          return false
        }
      }

      return true
    }

    nextQueue.push(current.left)
    nextQueue.push(current.right)

    if (!queue.length && nextQueue.length) {
      queue.push(...nextQueue)
      nextQueue.length = 0
    }
  }

  return true
}
