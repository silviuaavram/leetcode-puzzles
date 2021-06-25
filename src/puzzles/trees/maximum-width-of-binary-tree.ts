/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree/
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

export function widthOfBinaryTree(root: TreeNode | null): number {
  const queue = [root]
  const nextQueue = []
  const indeces = new Map<TreeNode, bigint>()
  indeces.set(root, 0n)
  let maxWidth = 1

  while (queue.length) {
    const current = queue.shift()
    const currentIndex = indeces.get(current)

    if (current.left) {
      nextQueue.push(current.left)
      indeces.set(current.left, currentIndex * 2n)
    }

    if (current.right) {
      nextQueue.push(current.right)
      indeces.set(current.right, currentIndex * 2n + 1n)
    }

    if (!queue.length && nextQueue.length) {
      queue.push(...nextQueue)
      nextQueue.length = 0

      if (queue.length > 1) {
        const {min, max} = queue.reduce<{min?: bigint; max?: bigint}>(
          (acc, node) => {
            const index = indeces.get(node)
            if (acc.min === undefined || acc.min > index) {
              acc.min = index
            }

            if (acc.max === undefined || acc.max < index) {
              acc.max = index
            }

            return acc
          },
          {},
        )

        maxWidth = Math.max(Number(max - min + 1n), maxWidth)
      }
    }
  }

  return maxWidth
}
