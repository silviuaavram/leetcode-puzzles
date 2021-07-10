/**
 * https://leetcode.com/problems/continuous-subarray-sum/
 */
export function checkSubarraySum(nums: number[], k: number): boolean {
  const map = new Map<number, number>()
  map.set(0, -1)
  let sum = 0

  for (let index = 0; index < nums.length; index++) {
    sum += nums[index]

    if (k !== 0) {
      sum %= k
    }

    const prev = map.get(sum)

    if (prev !== undefined) {
      if (index - prev > 1) {
        return true
      }
    } else {
      map.set(sum, index)
    }
  }

  return false;
}
