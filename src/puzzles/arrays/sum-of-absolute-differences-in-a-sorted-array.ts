/**
 * https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
 */
export function getSumAbsoluteDifferences(nums: number[]): number[] {
  const result: number[] = [0]

  for (let index = 0; index < nums.length; index++) {
    result[0] += Math.abs(nums[0] - nums[index])
  }

  for (let index = 1; index < nums.length; index++) {
    const difference = nums[index] - nums[index - 1]
    result.push(result[index - 1] + index * difference - (nums.length - index) * difference)
  }

  return result
}
