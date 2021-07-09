/**
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
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

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  if (!root) {
    return ''
  }

  const tokens: string[] = []
  const queue: TreeNode[] = [root]

  while (queue.length) {
    const current = queue.shift()
    tokens.push(String(current ? current.val : null))

    if (!current) {
      continue
    }

    queue.push(current.left)
    queue.push(current.right)
  }

  let index

  for (index = tokens.length - 1; index >= 0; index--) {
    if (tokens[index] !== 'null') {
      break
    }
  }

  return tokens.slice(0, index + 1).join(' ')
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  if (!data) {
    return null
  }

  const tokens = data.split(' ')
  const root: TreeNode = {val: Number(tokens[0]), left: null, right: null}
  const queue: TreeNode[] = [root]

  tokens.splice(0, 1)

  for (let index = 0; index < tokens.length; index += 2) {
    const nodeLeft: TreeNode =
      tokens[index] === 'null'
        ? null
        : {val: Number(tokens[index]), left: null, right: null}
    const nodeRight: TreeNode =
      index + 1 < tokens.length && tokens[index + 1] !== 'null'
        ? {val: Number(tokens[index + 1]), left: null, right: null}
        : null
    const parent = queue.shift()

    parent.left = nodeLeft
    parent.right = nodeRight

    if (nodeLeft) {
      queue.push(nodeLeft)
    }
    if (nodeRight) {
      queue.push(nodeRight)
    }
  }

  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
