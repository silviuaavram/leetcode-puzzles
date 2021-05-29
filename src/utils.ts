export interface GraphNode {
  val: number
  neighbors: GraphNode[]
}

export interface ListNode {
  val: number
  next: ListNode | null
}

export interface DoublyListNode extends ListNode {
  prev: DoublyListNode | null
  next: DoublyListNode | null
}

export interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  visited?: boolean
}

export interface TrieNode {
  isWord: boolean
  values: Map<string, TrieNode>
}

export function toLinkedList(nums: number[]): ListNode | null {
  if (!nums || !nums.length) {
    return null
  }

  return {val: nums[0], next: toLinkedList(nums.slice(1))}
}

export function toDoublyLinkedList(nums: number[]): DoublyListNode | null {
  const listResult = toLinkedList(nums) as DoublyListNode

  if (!listResult) {
    return null
  }

  let current = listResult
  let prev = null

  while (current) {
    current.prev = prev
    prev = current
    current = current.next
  }

  return listResult
}

export function toTree(nums: number[]): TreeNode | null {
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

export function toGraph(nums: number[][], startNode: number): GraphNode | null {
  const nodes = new Map<number, GraphNode>()

  for (let index = 0; index < nums.length; index++) {
    const link = nums[index]
    const nodeValue = link[0]
    const nodeNeighbour = link[1]

    if (!nodes.has(nodeValue)) {
      nodes.set(nodeValue, {val: nodeValue, neighbors: []})
    }

    if (!nodes.has(nodeNeighbour)) {
      nodes.set(nodeNeighbour, {val: nodeNeighbour, neighbors: []})
    }

    nodes.get(nodeValue).neighbors.push(nodes.get(nodeNeighbour))
  }

  return nodes.get(startNode)
}
