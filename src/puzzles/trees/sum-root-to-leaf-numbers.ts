/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
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

export function sumNumbers(root: TreeNode | null): number {
  let result = 0

  function visitNode(node: TreeNode, pathSoFar: TreeNode[] = []): void {
    const newPathSoFar = [...pathSoFar, node]

    if (!node.left && !node.right) {
      result += newPathSoFar.reduce((acc, n, index) => {
        return acc + n.val * Math.pow(10, newPathSoFar.length - 1 - index)
      }, 0)
    } else {
      if (node.left) {
        visitNode(node.left, newPathSoFar)
      }
      if (node.right) {
        visitNode(node.right, newPathSoFar)
      }
    }
  }

  visitNode(root)

  return result
}
