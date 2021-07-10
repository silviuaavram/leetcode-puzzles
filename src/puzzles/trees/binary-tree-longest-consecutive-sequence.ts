/**
 * https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/
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

export function longestConsecutive(root: TreeNode | null): number {
  let result = 0

  function visitNode(node: TreeNode): number {
    if (!node) {
      return 0
    }

    const leftVal = visitNode(node.left)
    const rightVal = visitNode(node.right)

    const max = Math.max(
      node.left && node.left.val === node.val + 1 ? leftVal + 1 : 1,
      node.right && node.right.val === node.val + 1 ? rightVal + 1 : 1,
    )
    result = Math.max(result, max)

    return max
  }

  visitNode(root)

  return result
}
