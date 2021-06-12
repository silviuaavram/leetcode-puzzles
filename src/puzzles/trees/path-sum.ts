/**
 * https://leetcode.com/problems/path-sum/
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

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false
  }

  function visitNode(node: TreeNode, sumSoFar = 0): boolean {
    const newSumSoFar = sumSoFar + node.val
    let result = false
    
    if (!node.left && !node.right && newSumSoFar === targetSum) {
      return true
    }

    if (node.left) {
      result = result || visitNode(node.left, newSumSoFar)
    }

    if (node.right) {
      result = result || visitNode(node.right, newSumSoFar)
    }

    return result
  }

  return visitNode(root)
}
