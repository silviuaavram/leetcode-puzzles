/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 */

export interface TreeWithNextNode {
  next: TreeWithNextNode
  left: TreeWithNextNode
  right: TreeWithNextNode
}

export function connect(
  root: TreeWithNextNode | null,
): TreeWithNextNode | null {
  const queue = [root]
  const nextQueue = []

  if (root) {
    root.next = null
  } else {
		return root
	}

  while (queue.length) {
    const current = queue.shift()

    if (current.left) {
      nextQueue.push(current.left, current.right)
    }

    if (!queue.length && nextQueue.length) {
      queue.push(...nextQueue)

      for (let index = 0; index < nextQueue.length; index++) {
        nextQueue[index].next = nextQueue[index + 1] ?? null
      }

      nextQueue.length = 0
    }
  }

  return root
}
