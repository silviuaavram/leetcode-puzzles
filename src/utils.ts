export interface ListNode {
  val: number
  next: ListNode | null
}

export interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

export function toLinkedList(nums: number[]): ListNode | null {
  if (!nums || !nums.length) {
    return null
  }

  return {val: nums[0], next: toLinkedList(nums.slice(1))}
}

export function toBinaryTree(nums: number[]): TreeNode | null {
  if (!nums || !nums.length) {
    return null
  }

  const root: TreeNode = {val: nums[0], left: null, right: null}
  const queue = [root]
  let index = 1

  while (queue.length && index <= nums.length) {
    const current = queue.shift()
    const leftNumber = nums[index]
    const rightNumber = nums[index + 1]

    if (leftNumber !== null && leftNumber !== undefined) {
      current.left = {val: leftNumber, left: null, right: null}
      queue.push(current.left)
    }

    if (rightNumber !== null && rightNumber !== undefined) {
      current.right = {val: rightNumber, left: null, right: null}
      queue.push(current.right)
    }

    index += 2
  }

  return root
}
