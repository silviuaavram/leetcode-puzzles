/**
 * https://leetcode.com/problems/binary-search-tree-iterator/
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

export class BSTIterator {
  constructor(root: TreeNode | null) {
    this.stack = root === null ? [] : [root]
    this.visited = new Set()
  }

  private stack: TreeNode[]
  private visited: Set<TreeNode>

  next(): number {
    let current = this.stack[this.stack.length - 1]

    while (current.left && !this.visited.has(current.left)) {
      this.stack.push(current.left)
      current = current.left
    }

    this.visited.add(current)
    this.stack.pop()

    if (current.right && !this.visited.has(current.right)) {
      this.stack.push(current.right)
    }

    return current.val
  }

  hasNext(): boolean {
    return this.stack.length !== 0
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
