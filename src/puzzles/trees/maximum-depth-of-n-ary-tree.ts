/**
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 */

import {NAryTreeNode as Node} from 'utils'

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

export function maxDepth(root: Node): number {
  let maxDepth = 0

  if (!root) {
    return 0
  }

  function visitNode(node: Node, level = 1): void {
    if (!node.children.length) {
      maxDepth = Math.max(maxDepth, level)
    } else {
      for (const child of node.children) {
        visitNode(child, level + 1)
      }
    }
  }

  visitNode(root)

  return maxDepth
}
