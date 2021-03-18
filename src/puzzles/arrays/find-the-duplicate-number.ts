/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 */

export function findDuplicate(nums: number[]): number {
  const numsSoFar = new Map<number, undefined>()

  for (const num of nums) {
    if (numsSoFar.has(num)) {
      return num
    }

    numsSoFar.set(num, undefined)
  }

	throw new Error('should not end here.')
}
