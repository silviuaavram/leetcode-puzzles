import {TreeNode} from 'utils'

/**
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 */
export function flatten(root: TreeNode | null): void {
	if (!root) {
		return 
	}
  const nodes: TreeNode[] = []
  let queue: TreeNode[] = [root]

  while (queue.length) {
    const current = queue.shift()
    nodes.push(current)

    if (current.right) {
      queue = [current.right, ...queue]
    }
    if (current.left) {
      queue = [current.left, ...queue]
    }
  }

	let current = root
	nodes.shift()

	for (let index = 0; index < nodes.length; index++) {
		current.left = null
		current.right = nodes[index]
		current = current.right
	}

	current.left = null
	current.right = null
}
