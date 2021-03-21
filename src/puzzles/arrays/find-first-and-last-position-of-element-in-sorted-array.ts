/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

export function searchRange(nums: number[], target: number): number[] {
	let first: number
	let last: number

	function updateValues(index: number) {
		if (first === undefined || first > index) {
			first = index
		}
		if (last === undefined || last < index) {
			last = index
		}
	}

	function binarySearch(start: number, end: number): void {
		const mid = Math.floor((start + end) / 2)

		if (start > end) {
			return
		}
		
		if (start === end && nums[start] === target) {
			updateValues(start)
			return
		}
		

		if (nums[mid] === target) {
			updateValues(mid)

			binarySearch(start, mid - 1)
			binarySearch(mid + 1, end)
		} else {
			if (nums[mid] < target) {
				binarySearch(mid + 1, end)
			} else {
				binarySearch(start, mid - 1)
			}
		}
	}

	binarySearch(0, nums.length - 1)

	return [first ?? -1, last ?? -1]
}
