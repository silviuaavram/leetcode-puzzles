/**
 * https://leetcode.com/problems/leaf-similar-trees/
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

export function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null,
): boolean {
  function visitNode(node: TreeNode, acc: number[]): void {
    if (!node.left && !node.right) {
      acc.push(node.val)

      return
    }

    if (node.left) {
      visitNode(node.left, acc)
    }

    if (node.right) {
      visitNode(node.right, acc)
    }
  }

  const leafValues1: number[] = []
  const leafValues2: number[] = []

  visitNode(root1, leafValues1)
  visitNode(root2, leafValues2)

  if (leafValues1.length !== leafValues2.length) {
    return false
  }

  for (let index = 0; index < leafValues1.length; index++) {
    if (leafValues1[index] !== leafValues2[index]) {
      return false
    }
  }

  return true
}
