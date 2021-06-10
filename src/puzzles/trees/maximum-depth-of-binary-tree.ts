/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  function processNode(node: TreeNode): number {
    const depthLeft = node.left ? 1 + processNode(node.left) : 1
    const depthRight = node.right ? 1 + processNode(node.right) : 1

    return Math.max(depthLeft, depthRight)
  }

  return processNode(root)
}
