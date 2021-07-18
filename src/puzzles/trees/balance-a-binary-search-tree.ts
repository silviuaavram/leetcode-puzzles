/**
 * https://leetcode.com/problems/balance-a-binary-search-tree/
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

export function balanceBST(root: TreeNode | null): TreeNode | null {
  const traversalResult: TreeNode[] = []

  function visitNode(node: TreeNode): void {
    if (!node) {
      return
    }

    visitNode(node.left)
    traversalResult.push(node)
    visitNode(node.right)
  }

  visitNode(root)

  function buildTree(nodes: TreeNode[]): TreeNode {
    if (!nodes.length) {
      return null
    }

    const mid = Math.floor(nodes.length / 2)
    const node = nodes[mid]

    node.left = buildTree(nodes.slice(0, mid))
    node.right = buildTree(nodes.slice(mid + 1))
    
    return node
  }

  return buildTree(traversalResult)
}
