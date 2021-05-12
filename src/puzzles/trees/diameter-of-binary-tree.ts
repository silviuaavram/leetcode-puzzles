/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
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

export function diameterOfBinaryTree(root: TreeNode | null): number {
  const visited = new Map<TreeNode, {left: number; right: number}>()
  const stack = [root]
  visited.set(root, {left: 0, right: 0})

  while (stack.length) {
    const current = stack[stack.length - 1]

    if (current.left && !visited.has(current.left)) {
      stack.push(current.left)
      continue
    }

    if (current.right && !visited.has(current.right)) {
      stack.push(current.right)
      continue
    }

    visited.set(current, {
      left: current.left
        ? Math.max(
            visited.get(current.left).left,
            visited.get(current.left).right,
          ) + 1
        : 0,
      right: current.right
        ? Math.max(
            visited.get(current.right).right,
            visited.get(current.right).left,
          ) + 1
        : 0,
    })

    stack.pop()
  }

  let diameter = 0

  visited.forEach(value => {
    diameter = Math.max(value.left + value.right, diameter)
  })

  return diameter
}

function diameterOfBinaryTreeRecursive(root: TreeNode | null): number {
  let diameter = 0
  function getDiameter(node: TreeNode): number {
    if (!node.left && !node.right) {
      diameter = Math.max(diameter, 0)
      return 0
    }

    const leftLevel = node.left ? getDiameter(node.left) + 1 : 0
    const rightLevel = node.right ? getDiameter(node.right) + 1 : 0
    const childrenLevel = leftLevel + rightLevel

    diameter = Math.max(diameter, childrenLevel)
    return Math.max(leftLevel, rightLevel)
  }

  getDiameter(root)

  return diameter
}
