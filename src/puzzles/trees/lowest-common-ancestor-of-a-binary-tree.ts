/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */

import {TreeNode} from 'utils'

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
	const queue = [root]
	const visited: TreeNode[] = []
	let solP: TreeNode[]
	let solQ: TreeNode[]

	while(queue.length || (!solP && !solQ)) {
		const current = queue[queue.length - 1]

		if (visited.indexOf(current) < 0) {
			if (current === p && !solP) {
				solP = [...queue]
			}

			if (current === q && !solQ) {
				solQ = [...queue]
			}
		}
		
		if (current.left && visited.indexOf(current.left) < 0) {
			queue.push(current.left)
			continue
		}

		if (current.right && visited.indexOf(current.right) < 0) {
			queue.push(current.right)
			continue
		}

		visited.push(queue.pop())
	}

	for (let index = 0; index < solQ.length; index++) {
		if (solP[index] === undefined || solP[index] !== solQ[index]) {
			return solQ[index - 1]
		}
	}

	return solQ[solQ.length - 1]
}
