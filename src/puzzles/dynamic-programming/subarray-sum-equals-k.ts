/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
 */

export function subarraySum(nums: number[], k: number): number {
  if (!nums) {
    return 0
  }

  const solutions = new Map<number, number>()
  solutions.set(0, 1)

  let sum = 0
	let count = 0

  for (let index = 0; index < nums.length; index++) {
    sum += nums[index]

		if (solutions.has(sum - k)) {
			count += solutions.get(sum - k)
		}
		solutions.set(sum, (solutions.get(sum) ?? 0) + 1)
  }


	return count
}
