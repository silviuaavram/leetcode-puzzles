/**
 * https://leetcode.com/problems/peeking-iterator/
 */
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

export interface Iterator {
  hasNext(): boolean
  next(): number
}

export class PeekingIterator {
  private iterator: Iterator
  private nextValue: number

  constructor(iterator: Iterator) {
    this.iterator = iterator

    if (this.iterator.hasNext()) {
      this.nextValue = this.iterator.next()
    } else {
      this.nextValue = null
    }
  }

  peek(): number {
    return this.nextValue
  }

  next(): number {
    const result = this.nextValue

    if (this.iterator.hasNext()) {
      this.nextValue = this.iterator.next()
    } else {
      this.nextValue = null
    }

    return result
  }

  hasNext(): boolean {
    return this.nextValue !== null
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
