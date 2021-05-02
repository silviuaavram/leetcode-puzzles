/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */

import {TreeNode} from 'utils'

export function maxPathSum(root: TreeNode | null): number {
  const pathSums = new Map<TreeNode, number>()
  let max: number

  function getMaxPathSum(node: TreeNode) {
    if (pathSums.has(node)) {
      return pathSums.get(node)
    }

    const values = [node.val]
    if (node.left) {
      values.push(node.val + getMaxPathSum(node.left))
    }

    if (node.right) {
      values.push(node.val + getMaxPathSum(node.right))
    }

    const maxValue = Math.max(...values)
    pathSums.set(node, maxValue)

    max = Math.max(max ?? maxValue, maxValue)

    if (node.left && node.right) {
      max = Math.max(
        max,
        maxValue,
        node.val + getMaxPathSum(node.right) + getMaxPathSum(node.left),
      )
    }

    return maxValue
  }

  getMaxPathSum(root)

  return max
}
