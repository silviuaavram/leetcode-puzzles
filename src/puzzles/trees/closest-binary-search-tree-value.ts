/**
 * https://leetcode.com/problems/closest-binary-search-tree-value/
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

export function closestValue(root: TreeNode | null, target: number): number {
  let closest = root.val

  function visitNode(node: TreeNode): void {
    if (!node) {
      return
    }

    if (Math.abs(closest - target) > Math.abs(node.val - target)) {
      closest = node.val
    }

    if (node.val < target) {
      visitNode(node.right)
    }

    if (node.val > target) {
      visitNode(node.left)
    }
  }

  visitNode(root)

  return closest
}
