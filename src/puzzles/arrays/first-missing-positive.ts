/**
 * https://leetcode.com/problems/first-missing-positive/
 */
export function firstMissingPositive(nums: number[]): number {
  let contains = false

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 1) {
      contains = true
      break
    }
  }

  if (!contains) {
    return 1
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] <= 0 || nums[index] > nums.length) {
      nums[index] = 1
    }
  }

  for (let index = 0; index < nums.length; index++) {
    const a = Math.abs(nums[index])

    if (a === nums.length) {
      nums[0] = -Math.abs(nums[0])
    } else {
      nums[a] = -Math.abs(nums[a])
    }
  }

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] > 0) {
      return index
    }
  }

  if (nums[0] > 0) return nums.length

  return nums.length + 1
}
