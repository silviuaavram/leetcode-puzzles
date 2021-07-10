/**
 * https://leetcode.com/problems/find-duplicate-subtrees/
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

export function findDuplicateSubtrees(
  root: TreeNode | null,
): Array<TreeNode | null> {
  const nodeStrings = new Map<string, number>()
  const result: TreeNode[] = []

  function visitNode(node: TreeNode): string {
    if (!node) {
      return 'x'
    }

    const nodeString = `${node.val},${visitNode(node.left)},${visitNode(node.right)}`
    
    nodeStrings.set(nodeString, (nodeStrings.get(nodeString) ?? 0) + 1)

    if (nodeStrings.get(nodeString) === 2) {
      result.push(node)
    }

    return nodeString
  }

  visitNode(root)

  return result
}
