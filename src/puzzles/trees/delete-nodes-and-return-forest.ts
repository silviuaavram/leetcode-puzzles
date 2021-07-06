/**
 * https://leetcode.com/problems/delete-nodes-and-return-forest/
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

export function delNodes(
  root: TreeNode | null,
  to_delete: number[],
): Array<TreeNode | null> {
  const trees = [root]

  function visitNode(
    node: TreeNode,
    parent?: TreeNode,
    direction?: 'left' | 'right',
  ): void {
    if (!node) {
      return
    }

    if (to_delete.includes(node.val)) {
      if (trees.includes(node)) {
        trees.splice(trees.indexOf(node), 1)
      }

      if (parent) {
        parent[direction] = null
      }

      if (node.left) {
        trees.push(node.left)
        visitNode(node.left)
      }

      if (node.right) {
        trees.push(node.right)
        visitNode(node.right)
      }
    } else {
      if (node.left) {
        visitNode(node.left, node, 'left')
      }

      if (node.right) {
        visitNode(node.right, node, 'right')
      }
    }
  }

  visitNode(root)

  return trees
}
