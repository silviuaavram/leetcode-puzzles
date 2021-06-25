/**
 * https://leetcode.com/problems/deepest-leaves-sum/
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

export function deepestLeavesSum(root: TreeNode | null): number {
  let maxLevel = 1
  const values: number[] = []

  function visitNode(node: TreeNode, level = 1): void {
    if (!node) {
      return
    }

    if (maxLevel <= level) {
      if (maxLevel < level) {
        values.length = 0
        maxLevel = level
      }
      
      values.push(node.val)
    }
    visitNode(node.left, level + 1)
    visitNode(node.right, level + 1)
  }

  visitNode(root)

  return values.reduce((acc, val) => acc + val, 0)
}
