import {
  PeekingIterator,
  Iterator as IteratorInterface,
} from './peeking-iterator'

class Iterator implements IteratorInterface {
  private nums: number[]
  private index: number

  constructor(nums: number[]) {
    this.nums = nums
    this.index = 0
  }

  hasNext(): boolean {
    return this.index < this.nums.length
  }

  next(): number {
    return this.nums[this.index++] ?? null
  }
}

test('peeking iterator works', () => {
  const iterator = new Iterator([1, 2, 3])
  const peekingIterator = new PeekingIterator(iterator)

  expect(peekingIterator.next()).toEqual(1)
  expect(peekingIterator.peek()).toEqual(2)
  expect(peekingIterator.next()).toEqual(2)
  expect(peekingIterator.next()).toEqual(3)
  expect(peekingIterator.hasNext()).toEqual(false)
})
