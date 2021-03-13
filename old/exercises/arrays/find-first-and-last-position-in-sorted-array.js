const {expect} = require('../../lib')

/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) {
    return [-1, -1]
  }

  let first, last

  function binarySearch(start, end) {
    const middle = Math.floor((start + end) / 2)
    const current = nums[middle]

    if (nums[middle] !== target) {
        // end.
      if (start === end) {
        return
      }

      // continue to look for it based on the value of current position.
      if (target < current) {
        binarySearch(start, middle)
      } else {
        binarySearch(middle + 1, end) // middle + 1 because we use .floor.
      }
    } else {
      // we update the values if we need to.
      if (first === undefined || first > middle) {
        first = middle
      }
      if (last === undefined || last < middle) {
        last = middle
      }

        // end.
      if (start === end) {
        return
      }

      // we will go on both asc and desc if we just found it.
      if (first >= middle) {
        binarySearch(start, middle)
      }
      if (last <= middle) {
        binarySearch(middle + 1, end) // middle + 1 because we use .floor
      }
    }
  }

  binarySearch(0, nums.length - 1)

  return [first === undefined ? -1 : first, last === undefined ? -1 : last]
}

expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
expect(searchRange([3, 3, 3, 3, 3], 3)).toEqual([0, 4])
expect(searchRange([1, 2, 3, 4, 5], 6)).toEqual([-1, -1])
expect(searchRange([3], 3)).toEqual([0, 0])
expect(searchRange([3, 3], 3)).toEqual([0, 1])
expect(searchRange([2, 2], 3)).toEqual([-1, -1])
expect(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3)).toEqual([2, 5])
expect(searchRange([0,0,1,1,1,2,2,3,3,3,4,4,4,4,5,5,6,6,6,8,10,10], 4)).toEqual([10, 13])