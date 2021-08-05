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

export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean {
  function checkIfEqual(node1: TreeNode, node2: TreeNode): boolean {
    if (!node1 || !node2) {
      return !node1 && !node2
    }

    if (node1.val !== node2.val) {
      return false
    }

    return (
      checkIfEqual(node1.left, node2.left) &&
      checkIfEqual(node1.right, node2.right)
    )
  }

  function visitNode(node: TreeNode): boolean {
    if (!node) {
      return false
    }

    if (node.val === subRoot.val) {
      const isSubtree =
        checkIfEqual(node.left, subRoot.left) &&
        checkIfEqual(node.right, subRoot.right)

      if (isSubtree) {
        return true
      }
    }

    const visitLeft = visitNode(node.left)

    if (!visitLeft) {
      return visitNode(node.right)
    }

    return true
  }

  return visitNode(root)
}
