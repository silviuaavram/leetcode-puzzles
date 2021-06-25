/**
 * https://leetcode.com/problems/distribute-coins-in-binary-tree/
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

export function distributeCoins(root: TreeNode | null): number {
  let result = 0

  function visitNode(node: TreeNode, coins: number[] = []): number {
    if (node === null) {
      return 0
    }

    const left = visitNode(node.left)
    const right = visitNode(node.right)

    result += Math.abs(left) + Math.abs(right)

    return node.val + left + right - 1
  }

  visitNode(root)

  return result
}
