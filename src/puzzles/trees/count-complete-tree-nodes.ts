/**
 * https://leetcode.com/problems/count-complete-tree-nodes/
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

export function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  let level = 1
  let current = root

  while (current.left) {
    level++
    current = current.left
  }

  if (level === 1) {
    return 1
  }

  const maxNodes = Math.pow(2, level - 1) - 1

  function visitNode(
    node: TreeNode,
    index: number,
    start = 0,
    end = maxNodes,
  ): boolean {
    if (start === end) {
      return !!node
    }

    const mid = Math.floor((start + end) / 2)

    if (mid < index) {
      return visitNode(node.right, index, mid + 1, end)
    } else {
      return visitNode(node.left, index, start, mid)
    }
  }

  let start = 0
  let end = maxNodes

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const nodeExists = visitNode(root, mid)

    if (start === end) {
      return Math.pow(2, level - 1) + start - (nodeExists ? 0 : 1)
    } 

    if (nodeExists) {
      start = mid + 1
    } else {
      end = mid
    }
  }
}
