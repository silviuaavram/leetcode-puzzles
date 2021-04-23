/**
 * https://leetcode.com/problems/move-zeroes/
 */
export function moveZeroes(nums: number[]): void {
  let count = 0

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      nums[count++] = nums[index]
    }
  }
  for (let index = count; index < nums.length; index++) {
    nums[index] = 0
  }
}
