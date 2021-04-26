/**
 * https://leetcode.com/problems/serialize-and-deserialize-bst/
 */

import {TreeNode} from 'utils'

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  if (!root) {
    return ''
  }

  const queue = [root]
  const nodes = [root.val]

  while (queue.length) {
    const current = queue.shift()

    if (current.left) {
      queue.push(current.left)
      nodes.push(current.left.val)
    } else {
      nodes.push(-1) // null is -1
    }

    if (current.right) {
      queue.push(current.right)
      nodes.push(current.right.val)
    } else {
      nodes.push(-1) // null is -1
    }
  }

  const serialized = nodes.reduce((acc, node) => {
    return acc + ' ' + node
  }, '')
  const lastNulls = serialized.match(/(?: -1)+$/)

  return serialized.substring(1, lastNulls.index)
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  if (data === '') {
    return null
  }

  const nodeValues = data.split(' ')
  const root = {val: Number(nodeValues[0])} as TreeNode
  const queue: TreeNode[] = [root]
  let index = 0

  while (queue.length) {
    const current = queue.shift()
    const left = nodeValues[index + 1] && nodeValues[index + 1] !== '-1'
      ? ({val: Number(nodeValues[index + 1])} as TreeNode)
      : null
    const right = nodeValues[index + 2] && nodeValues[index + 2] !== '-1'
      ? ({val: Number(nodeValues[index + 2])} as TreeNode)
      : null
    index += 2

    if (left) {
      queue.push(left)
    }
    if (right) {
      queue.push(right)
    }

    current.left = left
    current.right = right
  }

  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
