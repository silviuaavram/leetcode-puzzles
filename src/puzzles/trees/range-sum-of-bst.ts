/**
 * https://leetcode.com/problems/range-sum-of-bst/
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

export function rangeSumBST(
  root: TreeNode | null,
  low: number,
  high: number,
): number {
  let sum = 0

  if (!root) {
    return 0
  }

  function visitNode(node: TreeNode): void {
    if (node.val <= high && node.val >= low) {
      sum += node.val
    }

    if (node.left && node.val >= low) {
      visitNode(node.left)
    }

    if (node.right && node.val <= high) {
      visitNode(node.right)
    }
  }

  visitNode(root)

  return sum
}
