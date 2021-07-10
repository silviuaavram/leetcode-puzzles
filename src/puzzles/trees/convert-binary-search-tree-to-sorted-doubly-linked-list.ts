/**
 * https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
 */
/**
 * Definition for a binary tree node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import {TreeNode as Node} from 'utils'

export function treeToDoublyList(root: Node | null): Node | null {
  const nodes: Node[] = []

  function visitNode(node: Node): void {
    if (!node) {
      return
    }

    visitNode(node.left)
    nodes.push(node)
    visitNode(node.right)
  }

  visitNode(root)

  for (let index = 0; index < nodes.length; index++) {
    nodes[index].left = nodes[index - 1 < 0 ? nodes.length - 1 : index - 1]
    nodes[index].right = nodes[index + 1 === nodes.length ? 0 : index + 1]
  }

  return nodes[0]
}
