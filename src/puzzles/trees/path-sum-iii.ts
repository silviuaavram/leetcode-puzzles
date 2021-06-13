/**
 * https://leetcode.com/problems/path-sum-iii/
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

export function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0
  }

  const visited = new Set<TreeNode>()
  let result = 0

  function visitNode(node: TreeNode, sumSoFar = 0): void {
    const newSumSoFar = sumSoFar + node.val

    if (newSumSoFar === targetSum) {
      result++
    }

    if (node.left) {
      visitNode(node.left, newSumSoFar)
      !visited.has(node) && visitNode(node.left, 0)
    }

    if (node.right) {
      visitNode(node.right, newSumSoFar)
      !visited.has(node) && visitNode(node.right, 0)
    }

    visited.add(node)
  }

  visitNode(root)

  return result
}
