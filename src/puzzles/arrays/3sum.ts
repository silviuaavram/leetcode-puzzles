/**
 * https://leetcode.com/problems/3sum/
 */

export function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      if (nums[k] === nums[k + 1]) {
        k--
        continue
      }

      if (nums[j] === nums[j - 1] && j > i + 1) {
        j++
        continue
      }

      if (nums[i] + nums[j] + nums[k] <= 0) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]])
        }
        j++
      } else {
        k--
      }
    }
  }

  return result
}
