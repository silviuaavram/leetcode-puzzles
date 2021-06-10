/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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

export function goodNodes(root: TreeNode | null): number {
  let result = 0

  if (!root) {
    return 0
  }

  function visitNode(node: TreeNode, max?: number) {
    let nextMax = max
    if (max === undefined || node.val >= max) {
      nextMax = node.val
      result++
    }

    if (node.left) {
      visitNode(node.left, nextMax)
    }
    if (node.right) {
      visitNode(node.right, nextMax)
    }
  }

  visitNode(root)

  return result
}
