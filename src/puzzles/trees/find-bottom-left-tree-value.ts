/**
 * https://leetcode.com/problems/find-bottom-left-tree-value/
 */

import { TreeNode } from "utils";

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

 export function findBottomLeftValue(root: TreeNode | null): number {
  const queue = [root]
  const nextQueue = []
  let result = root.val

  while (queue.length) {
    const current = queue.shift()

    if (current.left) {
      nextQueue.push(current.left)
    }
    
    if (current.right) {
      nextQueue.push(current.right)
    }

    if (!queue.length && nextQueue.length) {
      result = nextQueue[0].val

      queue.push(...nextQueue)
      nextQueue.length = 0
    }
  }

  return result
};
