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

export interface NAryTreeNode {
  val: number
  children: NAryTreeNode[]
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

export function toNAryTree(nums: number[]): NAryTreeNode | null {
  if (!nums || !nums.length) {
    return null
  }

  const root: NAryTreeNode = {val: nums[0], children: []}
  const queue = [root]
  let index = 2
  let prevIndex = 2

  while (index <= nums.length) {
    if (nums[index] === null || index === nums.length) {
      const current = queue.shift()

      for (let i = prevIndex; i < index; i++) {
        const child: NAryTreeNode = {val: nums[i], children: []}
        queue.push(child)
        current.children.push(child)
      }

      prevIndex = index + 1
    }
    index++
  }

  return root
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

interface HeapNode<T> {
  value: T
  left?: HeapNode<T>
  right?: HeapNode<T>
  parent?: HeapNode<T>
}

interface HeapProps<T> {
  maxSize?: number
  isHigher?: (value1: T, value2: T) => boolean
}

export class Heap<T = number> {
  constructor(props: HeapProps<T> = {}) {
    const {isHigher, maxSize} = props
    this.isHigher = isHigher
      ? isHigher
      : (value1: T, value2: T) => value1 > value2 // MaxHeap with numbers by default
    this.nodes = []
    this.maxSize = maxSize
  }

  private isHigher: (value1: T, value2: T) => boolean
  private nodes: HeapNode<T>[]
  private head: HeapNode<T>
  private maxSize: number

  public print(): void {
    const result: T[][] = [[this.head.value]]
    const queue: HeapNode<T>[] = [this.head]
    const newQueue: HeapNode<T>[] = []

    while (queue.length) {
      const current = queue.shift()

      if (current.left) {
        newQueue.push(current.left)
      }
      if (current.right) {
        newQueue.push(current.right)
      }
      if (!queue.length && newQueue.length) {
        queue.push(...newQueue)
        result.push(newQueue.map(n => n.value))
        newQueue.length = 0
      }
    }

    console.log(result)
  }

  public add(value: T) {
    let current: HeapNode<T> = {
      value,
    }

    if (this.nodes.length === 0) {
      this.head = current
      this.nodes.push(current)
    } else {
      let parent = this.nodes[0]
      current.parent = parent

      if (parent.left) {
        parent.right = current
        this.nodes.shift()
      } else {
        parent.left = current
      }

      this.nodes.push(current)

      while (
        current.parent &&
        this.isHigher(current.value, current.parent.value)
      ) {
        const auxValue = current.parent.value

        current.parent.value = current.value
        current.value = auxValue

        current = current.parent
      }
    }

    if (this.size !== undefined && this.nodes.length > this.size) {
      this.removeLastNode()
    }
  }

  public peek(): T {
    return this.head.value
  }

  public remove(): T {
    const result = this.head.value

    if (!this.head.left && !this.head.right) {
      this.head = null
      this.nodes.pop()
      return result
    }

    const current = this.removeLastNode()

    this.head.value = current.value

    this.swapOnRemove()

    return result
  }

  public get size() {
    return this.nodes.length
  }

  private removeLastNode(): HeapNode<T> {
    const current = this.nodes.pop()

    if (current.parent.left === current) {
      current.parent.left = null
    } else if (current.parent.right === current) {
      current.parent.right = null
      this.nodes.unshift(current.parent) // put the parent back in the nodes accepting children
    }

    return current
  }

  private swapOnRemove(current = this.head): void {
    if (current.left && this.isHigher(current.left.value, current.value)) {
      const aux = current.left.value
      current.left.value = current.value
      current.value = aux

      this.swapOnRemove(current.left)
    }

    if (current.right && this.isHigher(current.right.value, current.value)) {
      const aux = current.right.value
      current.right.value = current.value
      current.value = aux

      this.swapOnRemove(current.right)
    }
  }
}
