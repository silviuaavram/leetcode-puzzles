/**
 * https://leetcode.com/problems/closest-binary-search-tree-value-ii/
 */

import {Heap, TreeNode} from 'utils'

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

export function closestKValues(
  root: TreeNode | null,
  target: number,
  k: number,
): number[] {
  const closestNodes = new Heap({
    isHigher: (value1, value2) => {
      return Math.abs(value1 - target) < Math.abs(value2 - target)
    },
  })

  function visitNode(node: TreeNode): void {
    if (!node) {
      return
    }

    closestNodes.add(node.val)

    visitNode(node.left)
    visitNode(node.right)
  }

  visitNode(root)

  const result: number[] = []

  for (let index = 0; index < k; index++) {
    result.push(closestNodes.remove())
  }

  return result
}
