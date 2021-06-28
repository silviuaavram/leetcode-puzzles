/**
 * https://leetcode.com/problems/maximum-subarray/
 */
export function maxSubArray(nums: number[]): number {
  const bestSums: number[] = [nums[0]]

  for (let index = 1; index < nums.length; index++) {
    bestSums[index] = Math.max(bestSums[index - 1] + nums[index], nums[index])
  }

  return bestSums.reduce((acc, sum) => Math.max(acc, sum), nums[0])
}
