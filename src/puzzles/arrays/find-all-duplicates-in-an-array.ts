/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 */

export function findDuplicates(nums: number[]): number[] {
  const duplicates: number[] = []

  for (let index = 0; index < nums.length; index++) {
    const indexToCheck = Math.abs(nums[index]) - 1

    if (nums[indexToCheck] < 0) {
      duplicates.push(Math.abs(nums[index]))
    } else {
      nums[indexToCheck] *= -1
    }

  }

  return duplicates
}
