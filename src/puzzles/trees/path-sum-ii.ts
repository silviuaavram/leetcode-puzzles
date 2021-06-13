/**
 * https://leetcode.com/problems/path-sum-ii/
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

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) {
    return []
  }

  const result: number[][] = []

  function visitNode(
    node: TreeNode,
    pathSoFar: TreeNode[] = [],
    sumSoFar = 0,
  ): void {
    const newPathSoFar = [...pathSoFar, node]
    const newSumSoFar = sumSoFar + node.val

    if (!node.left && !node.right && newSumSoFar === targetSum) {
      result.push(newPathSoFar.map(n => n.val))

      return
    }

    if (node.left) {
      visitNode(node.left, newPathSoFar, newSumSoFar)
    }

    if (node.right) {
      visitNode(node.right, newPathSoFar, newSumSoFar)
    }
  }

  visitNode(root)

  return result
}
