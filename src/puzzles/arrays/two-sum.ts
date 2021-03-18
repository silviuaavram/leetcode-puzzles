/**
 * https://leetcode.com/problems/two-sum/
 */

export function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number>()

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]
    const secondNumIndex = numsMap.get(target - num)

    if (secondNumIndex !== undefined) {
      return [secondNumIndex, index]
    }

    numsMap.set(num, index)
  }

  throw new Error('should not end here.')
}
