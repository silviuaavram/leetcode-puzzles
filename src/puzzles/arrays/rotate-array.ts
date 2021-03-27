/**
 * https://leetcode.com/problems/rotate-array/
 */

export function rotate(nums: number[], k: number): void {
	const normalizedK = k % nums.length
	if (nums.length < 2 || normalizedK < 1) {
		return
	}
	
  function swap(i: number, j: number) {
    nums[i] = nums[i] + nums[j]
    nums[j] = nums[i] - nums[j]
    nums[i] = nums[i] - nums[j]
  }

	for (let index = 0; index < Math.floor(nums.length / 2); index++) {
		swap(index, nums.length - index - 1)
	}

	for (let index = 0; index < Math.floor(normalizedK / 2); index++) {
		swap(index, normalizedK - index - 1)
	}

	for (let index = 0; index < Math.floor((nums.length - normalizedK) / 2); index++) {
		swap(normalizedK + index, nums.length - 1 - index)
	}
}
