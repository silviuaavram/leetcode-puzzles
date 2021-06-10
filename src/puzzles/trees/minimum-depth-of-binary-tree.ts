/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
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

export function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  let result: number

  function visitNode(node: TreeNode, height = 1) {
    if (!node.left && !node.right) {
      if (result === undefined) {
        result = height
      } else {
        result = Math.min(result, height)
      }
    }

    if (node.left) {
      visitNode(node.left, height + 1)
    }

    if (node.right) {
      visitNode(node.right, height + 1)
    }
  }

  visitNode(root)

  return result
}
