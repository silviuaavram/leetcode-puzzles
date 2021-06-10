/**
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 */
export function minOperations(nums: number[], x: number): number {
  if (nums.length === 1) {
    return x === nums[0] ? 1 : -1
  }

  const sum = nums.reduce((acc, num) => acc + num, 0)
  let leftIndex = 0
  let rightIndex = 0
  let subarraySum = 0
  let result = -1

  while (
    leftIndex <= nums.length &&
    rightIndex <= nums.length &&
    leftIndex <= rightIndex
  ) {
    const difference = sum - subarraySum

    if (difference > x) {
      subarraySum += nums[rightIndex++]
    } else if (difference < x) {
      subarraySum -= nums[leftIndex++]
    } else if (difference === x) {
      const newLength = nums.length - rightIndex + leftIndex
      result = result === -1 ? newLength : Math.min(newLength, result)
      subarraySum += nums[rightIndex++]
    }
  }

  return result
}
