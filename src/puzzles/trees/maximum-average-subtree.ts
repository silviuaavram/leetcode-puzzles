/**
 * https://leetcode.com/problems/maximum-average-subtree/
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

export function maximumAverageSubtree(root: TreeNode | null): number {
  let max = 0
  function visitNode(node: TreeNode): [number, number] {
    if (!node) {
      return [0, 0]
    }

    const [leftSum, leftCount] = visitNode(node.left)
    const [rightSum, rightCount] = visitNode(node.right)
    const totalSum = node.val + leftSum + rightSum
    const totalCount = leftCount + rightCount + 1

    max = Math.max(max, totalSum / totalCount)

    return [totalSum, totalCount]
  }

  visitNode(root)

  return Math.round(max * 100000) / 100000
}
