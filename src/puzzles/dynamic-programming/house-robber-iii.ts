/**
 * https://leetcode.com/problems/house-robber-iii/
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

export function rob(root: TreeNode | null): number {
  const sums = new Map<TreeNode, number>()

  function visitNode(node: TreeNode): void {
    if (!node) {
      return
    }

    visitNode(node.left)
    visitNode(node.right)
    const sumWithNode =
      node.val +
      (sums.get(node.left?.left) ?? 0) +
      (sums.get(node.left?.right) ?? 0) +
      (sums.get(node.right?.left) ?? 0) +
      (sums.get(node.right?.right) ?? 0)
    const maxSum = Math.max(
      sumWithNode,
      (sums.get(node.left) ?? 0) + (sums.get(node.right) ?? 0),
    )

    sums.set(node, maxSum)
  }

  visitNode(root)

  return Array.from(sums.values()).reduce((acc, sum) => Math.max(acc, sum), 0)
}
