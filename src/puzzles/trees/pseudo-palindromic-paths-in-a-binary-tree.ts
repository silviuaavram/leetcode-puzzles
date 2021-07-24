/**
 * https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
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

export function pseudoPalindromicPaths(root: TreeNode | null): number {
  const nodes = new Map<number, number>()
  let result = 0

  function visitNode(node: TreeNode): void {
    nodes.set(node.val, (nodes.get(node.val) ?? 0) + 1)

    if (!node.left && !node.right) {
      let oddFrequencies = 0

      for (const value of nodes.values()) {
        if (value % 2 === 1) {
          if (oddFrequencies === 1) {
            oddFrequencies = 2
            break
          } else {
            oddFrequencies = 1
          }
        }
      }

      if (oddFrequencies < 2) {
        result++
      }
    }

    if (node.left) {
      visitNode(node.left)
    }

    if (node.right) {
      visitNode(node.right)
    }

    if (nodes.get(node.val) - 1 === 0) {
      nodes.delete(node.val)
    } else {
      nodes.set(node.val, nodes.get(node.val) - 1)
    }
  }

  visitNode(root)

  return result
}
