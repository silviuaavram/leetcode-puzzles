/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 */
export function lengthOfLIS(nums: number[]): number {
  if (!nums || nums.length < 2) {
    return 1
  }

  const solutions = new Map<number, number>()
	for (let i = 0; i < nums.length; i++) {
		solutions.set(i, 1)
	}

  for (let i = 1; i < nums.length; i++) {
    const currentVal = nums[i]
		let max = 1

    for (let j = 0; j < i; j++) {
      const comparingVal = nums[j]
      const memoSolution = solutions.get(j)

			if (currentVal > comparingVal) {
				max = Math.max(max, 1 + memoSolution)
			}
    }

		solutions.set(i, max)
  }

	let max = 1

	solutions.forEach(val => {
		max = Math.max(val, max)
	})

	return max
}
