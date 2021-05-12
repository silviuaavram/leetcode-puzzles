/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */
interface HeapNode {
  parent: HeapNode
  left: HeapNode
  right: HeapNode
  val: any
}
export function findKthLargest(nums: number[], k: number): number {
  if (k > nums.length) {
    return -1
  }
  const nodes: HeapNode[] = [
    {val: nums[0], left: null, right: null, parent: null},
  ]

  function swapIfNeeded(node: HeapNode) {
    if (node.left && node.left.val > node.val) {
      node.val = node.val + node.left.val
      node.left.val = node.val - node.left.val
      node.val = node.val - node.left.val

      swapIfNeeded(node.left)
    }
    if (node.right && node.right.val > node.val) {
      node.val = node.val + node.right.val
      node.right.val = node.val - node.right.val
      node.val = node.val - node.right.val

      swapIfNeeded(node.right)
    }
  }

  for (let index = 1; index < nums.length; index++) {
    let node: HeapNode = {
      val: nums[index],
      left: null,
      right: null,
      parent: null,
    }
    const div = Math.floor((index - 1) / 2)
    const rest = (index - 1) % 2
    const parent = nodes[div]
    node.parent = parent
    nodes.push(node)

    if (rest === 1) {
      parent.right = node
    } else {
      parent.left = node
    }

    while (node.parent && node.parent.val < node.val) {
      node.parent.val = node.parent.val + node.val
      node.val = node.parent.val - node.val
      node.parent.val = node.parent.val - node.val
      node = node.parent
    }
  }

  let removedNode
  for (let index = 0; index < k; index++) {
    if (index === nums.length - 1) {
      return nodes[0].val
    }
    removedNode = nodes.shift()
    let node = nodes.pop()
    nodes.unshift(node)
    node.left = removedNode.left
    node.right = removedNode.right
    node.left && (node.left.parent = node)
    node.right && (node.right.parent = node)

    if (node.parent.left === node) {
      node.parent.left = null
    } else {
      node.parent.right = null
    }

    node.parent = null
    swapIfNeeded(node)
  }

  return removedNode.val
}
