/**
 * https://leetcode.com/problems/longest-univalue-path/
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

export function longestUnivaluePath(root: TreeNode | null): number {
  let result = 0

  function visitNode(node: TreeNode): number {
    if (!node) {
      return 0
    }

    const leftResult = visitNode(node.left)
    const rightResult = visitNode(node.right)
    let finalLeft = 0
    let finalRight = 0

    if (node.left && node.left.val === node.val) {
      finalLeft = 1 + leftResult
    }

    if (node.right && node.right.val === node.val) {
      finalRight = 1 + rightResult
    }

    result = Math.max(result, finalLeft + finalRight)

    return Math.max(finalLeft, finalRight)
  }

  visitNode(root)

  return result
}
