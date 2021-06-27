import {Heap} from 'utils'

/**
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
 */
export function maximumProduct(nums: number[]): number {
  const minHeap = new Heap({
    isHigher: (value1: number, value2: number) => value1 < value2,
    maxSize: 2,
  })
  const maxHeap = new Heap({maxSize: 3})

  for (let index = 0; index < nums.length; index++) {
    minHeap.add(nums[index])
    maxHeap.add(nums[index])
  }

  const firstMaxNumber = maxHeap.remove()

  return Math.max(
    firstMaxNumber * maxHeap.remove() * maxHeap.remove(),
    firstMaxNumber * minHeap.remove() * minHeap.remove(),
  )
}
