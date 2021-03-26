/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

export function search(nums: number[], target: number): number {
	function binarySearch(start: number, end: number): number {
		// console.log('search', start, end)
    
		if (start > end) {
			return -1
    }

		const first = nums[start]
		const last = nums[end]
    const middle = Math.floor((start + end) / 2)
    const current = nums[middle]

		if (current === target) {
			return middle
		}

		if (start === end && current !== first) {
			return -1
		} 

		if (current > target) {
			return binarySearch(start, middle - 1)
		} else {
			return binarySearch(middle + 1, end)
		}
	}
	
	function binarySearchPartition(start: number, end: number): number {
		// console.log('partition', start, end)
    
		if (start > end) {
			return -1
    }

		const first = nums[start]
		const last = nums[end]
    const middle = Math.floor((start + end) / 2)
    const current = nums[middle]

		if (current === target) {
			return middle
		}

		if (start === end && current !== first) {
			return -1
		} 

    if (current < last) {
			// console.log('start search right')
			const res = binarySearch(middle + 1, end)

			if (res === -1) {
				return binarySearchPartition(start, middle - 1)
			} else {
				return res
			}
		} else {
			// console.log('start search left')
			const res = binarySearch(start, middle - 1)

			if (res === -1) {
				return binarySearchPartition(middle + 1, end)
			} else {
				return res
			}
		}
  }

  return binarySearchPartition(0, nums.length - 1)
}
