interface HeapNode<T> {
  value: T
  left?: HeapNode<T>
  right?: HeapNode<T>
  parent?: HeapNode<T>
}

interface HeapProps<T> {
  isHigher?: (value1: T, value2: T) => boolean
}

export class Heap<T = number> {
  constructor(props: HeapProps<T> = {}) {
    const {isHigher} = props
    this.isHigher = isHigher
      ? isHigher
      : (value1: T, value2: T) => value1 > value2 // MaxHeap with numbers by default
    this.nodes = []
  }

  private isHigher: (value1: T, value2: T) => boolean
  private nodes: HeapNode<T>[]
  private head: HeapNode<T>

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
