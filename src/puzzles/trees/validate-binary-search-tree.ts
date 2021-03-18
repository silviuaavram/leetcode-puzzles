/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

import {TreeNode} from 'utils'

export function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return false
  }

  const queue = [root]
  const lrrResult = []

  while (queue.length) {
    const current = queue[queue.length - 1]

    if (current.left && !current.left.visited) {
      queue.push(current.left)

      continue
    }

    lrrResult.push(current.val)
    queue.pop()
    current.visited = true

    if (current.right && !current.right.visited) {
      queue.push(current.right)

      continue
    }
  }

  for (let index = 0; index < lrrResult.length - 1; index++) {
    if (lrrResult[index] >= lrrResult[index + 1]) {
      return false
    }
  }

  return true
}
