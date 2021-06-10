/**
 * https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/
 */
export function maxSubArrayLen(nums: number[], k: number): number {
  let sum = 0
  let max = 0
  const map = new Map()
  map.set(0, 0)

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    if (map.has(sum - k)) {
      max = Math.max(max, i + 1 - map.get(sum - k))
    }

    if (!map.has(sum)) {
      map.set(sum, i + 1)
    }
  }
  return max
}
