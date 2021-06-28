/**
 * https://leetcode.com/problems/flip-equivalent-binary-trees/
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

export function flipEquiv(
  root1: TreeNode | null,
  root2: TreeNode | null,
): boolean {
  if (root1 && root2 && root1.val !== root2.val) {
    return false
  }

  function visitNodes(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 === null) {
      if (node2 === null) {
        return true
      } else {
        return false
      }
    }

    if (node2 === null && node1 !== null) {
      return false
    }

    const left1 = node1.left?.val
    const left2 = node2.left?.val
    const right1 = node1.right?.val
    const right2 = node2.right?.val

    if (left1 === right2 || left2 === right1) {
      if (left1 === right2 && left2 === right1) {
        // switch
        const aux = node1.left
        node1.left = node1.right
        node1.right = aux
      } else {
        return false
      }
    }

    return (
      visitNodes(node1.left, node2.left) && visitNodes(node1.right, node2.right)
    )
  }

  return visitNodes(root1, root2)
}
