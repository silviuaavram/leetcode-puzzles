/**
 * https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
 */
export function minDifference(nums: number[]): number {
  const size = nums.length
  const k = 3

  if (size <= k + 1) {
    return 0
  }

  nums.sort((a, b) => a - b)
  let result = nums[size - 1] - nums[0]

  for (let index = 0; index <= k; index++) {
    result = Math.min(result, nums[size - 1 - index] - nums[k - index])
  }

  return Math.min(
    nums[size - 1] - nums[3],
    nums[size - 2] - nums[2],
    nums[size - 3] - nums[1],
    nums[size - 4] - nums[0],
  )
}
