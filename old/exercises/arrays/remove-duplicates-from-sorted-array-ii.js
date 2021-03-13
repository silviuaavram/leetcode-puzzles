const {expect} = require('../../lib')

/**
 * Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || !nums.length) {
    return 0
  }

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    const duplicates = nums.slice(index).lastIndexOf(element)

    if (duplicates > 1) {
      nums.splice(index, duplicates - 1)
    } else {
      index += duplicates
    }
  }

  return nums.length
}

expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 4])).toEqual(8)
expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toEqual(5)
expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])).toEqual(7)
expect(removeDuplicates([0, 0, 0, 0, 0])).toEqual(2)
expect(removeDuplicates([0, 1, 2, 3])).toEqual(4)
expect(removeDuplicates([0, 0, 2, 2, 3])).toEqual(5)
