/**
 * https://leetcode.com/problems/binary-tree-paths/
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

export function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = []

  function visitNode(node: TreeNode, pathSoFar?: string): void {
    const newPathSoFar = !pathSoFar ? `${node.val}` : `${pathSoFar}->${node.val}`

    if (!node.left && !node.right) {
      result.push(newPathSoFar)

      return
    }

    if (node.left) {
      visitNode(node.left, newPathSoFar)
    }

    if (node.right) {
      visitNode(node.right, newPathSoFar)
    }
  }

  visitNode(root)

  return result
}
