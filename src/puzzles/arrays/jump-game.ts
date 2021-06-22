/**
 * https://leetcode.com/problems/jump-game/
 */
export function canJump(nums: number[]): boolean {
  let max = 0

  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] === 0 && max === 0) {
      return false
    }

    max = Math.max(max, nums[index])

    max--
  }

  return true
}
