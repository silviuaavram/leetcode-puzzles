/**
 * https://leetcode.com/problems/longest-arithmetic-subsequence/
 */
export function longestArithSeqLength(nums: number[]): number {
  const differences = new Map<number, Map<number, number>>()
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    differences.set(i, new Map())

    for (let j = 0; j < i; j++) {
      const difference = nums[i] - nums[j]
      const value = (differences.get(j).get(difference) ?? 0) + 1
      differences.get(i).set(difference, value)

      result = Math.max(result, value)
    }
  }

  return result + 1
}
