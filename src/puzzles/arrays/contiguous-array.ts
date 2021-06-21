/**
 * https://leetcode.com/problems/contiguous-array/
 */
export function findMaxLength(nums: number[]): number {
  const intervalSizes = new Map<number, number>()
  let count = 0
  let result = 0
  intervalSizes.set(0, -1)

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      count--
    } else {
      count++
    }

    if (intervalSizes.has(count)) {
      result = Math.max(result, index - intervalSizes.get(count))
    } else {
      intervalSizes.set(count, index)
    }
  }

  return result
}
