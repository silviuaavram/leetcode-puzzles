/**
 * https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/
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
type PathValue = {asc?: number; desc?: number}

export function longestConsecutive(root: TreeNode | null): number {
  const paths = new Map<TreeNode, {asc?: number; desc?: number}>()
  let max = 1

  function visitNode(node: TreeNode): void {
    if (!node) {
      return
    }

    const values: PathValue = {asc: 1, desc: 1}

    visitNode(node.left)
    visitNode(node.right)

    if (node.left) {
      if (node.left.val === node.val - 1) {
        values.asc = Math.max(values.asc, 1 + paths.get(node.left).asc)
      } else if (node.left.val === node.val + 1) {
        values.desc = Math.max(values.desc, 1 + paths.get(node.left).desc)
      }
    }

    if (node.right) {
      if (node.right.val === node.val - 1) {
        values.asc = Math.max(values.asc, 1 + paths.get(node.right).asc)
      } else if (node.right.val === node.val + 1) {
        values.desc = Math.max(values.desc, 1 + paths.get(node.right).desc)
      }
    }

    max = Math.max(max, values.asc, values.desc)

    if (
      node.left &&
      node.right &&
      ((node.val === node.left.val + 1 && node.val === node.right.val - 1) ||
        (node.val === node.left.val - 1 && node.val === node.right.val + 1))
    ) {
      max = Math.max(max, values.asc + values.desc - 1)
    }

    // console.log(node, values.asc, values.desc)

    paths.set(node, values)
  }

  visitNode(root)

  return max
}
