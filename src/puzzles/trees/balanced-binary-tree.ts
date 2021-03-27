/**
 * https://leetcode.com/problems/balanced-binary-tree/
 */

import {TreeNode} from 'utils'

export function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }

  let isBalanced = true

  function getHeight(node: TreeNode, height: number): number {
    if (!isBalanced) {
      return
    }

		if (!node.left && !node.right) {
			return height
		}

		const leftHeight = node.left ? getHeight(node.left, height + 1) : height
		const rightHight = node.right ? getHeight(node.right, height + 1) : height

		if (Math.abs(leftHeight - rightHight) > 1) {
			isBalanced = false
		}

		return Math.max(leftHeight, rightHight)
  }

  getHeight(root,1)

  return isBalanced
}
