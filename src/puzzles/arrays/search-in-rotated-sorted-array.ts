/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

export function search(nums: number[], target: number): number {
	function binarySearch(start: number, end: number): number {
		if (start > end || start === end && nums[start] !== target) {
			return -1
    }

		if (start === end && nums[start] === target) {
			return start
		}

		const middle = Math.floor((start + end) / 2)
		const current = nums[middle]

		if (current === target) {
			return middle
		}

		if (current > target) {
			const result = binarySearch(start, middle - 1)
			if (result === -1) {
				return binarySearch(middle + 1, end)
			} else {
				return result
			}
		} else {
			const result = binarySearch(middle + 1, end)
			if (result === -1) {
				return binarySearch(start, middle - 1)
			} else {
				return result
			}
		}
	}

	return binarySearch(0, nums.length - 1)
}
