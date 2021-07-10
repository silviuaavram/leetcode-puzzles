/**
 * https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/
 */
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

import {NAryTreeNode as Node} from 'utils'

export class Codec {
  constructor() {}

  // Encodes a tree to a single string.
  serialize(root: Node | null): string {
    if (!root) {
      return ''
    }

    const queue = [root]
    const nodes: string[] = [String(root.val), 'null']

    while (queue.length) {
      const current = queue.shift()

      nodes.push(...current.children.map(n => String(n.val)), 'null')
      queue.push(...current.children)
    }

    let index
    for (index = nodes.length - 1; index >= 0; index--) {
      if (nodes[index] !== 'null') {
        break
      }
    }

    return nodes.slice(0, index + 1).join(',')
  }

  // Decodes your encoded data to tree.
  deserialize(data: string): Node | null {
    if (!data) {
      return null
    }

    const tokens = data.split(',')
    const root: Node = {val: Number(tokens[0]), children: []}
    const children: Node[] = []
    const queue: Node[] = [root]

    for (let index = 2; index < tokens.length; index++) {
      if (tokens[index] !== 'null') {
        const node: Node = {val: Number(tokens[index]), children: []}

        children.push(node)
        queue.push(node)
      } else {
        const current = queue.shift()

        current.children.push(...children)
        children.length = 0
      }
    }

    if (children.length) {
      queue.shift().children.push(...children)
    }

    return root
  }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
