/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

 * You are given a target value to search. If found in the array return its index, otherwise return -1.

 * You may assume no duplicate exists in the array.

 * Your algorithm's runtime complexity must be in the order of O(log n).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let i
  let reversed = false

  if (!nums.length) {
    return -1
  }

  for (i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      nums = [...nums.slice(i), ...nums.slice(0, i)]
      reversed = true
      break
    }
  }

  const result = binarySearch(nums, target, 0, nums.length - 1)

  return result === -1 ? -1 : reversed ? (result + i) % nums.length : result
}

function binarySearch(nums, target, i, j) {
  if (i === j) {
    return target === nums[i] ? i : -1
  }

  const middle = Math.trunc((j + i) / 2)

  if (nums[middle] === target) return middle

  return nums[middle] > target
    ? binarySearch(nums, target, i, middle)
    : binarySearch(nums, target, middle + 1, j)
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 2))
console.log(search([4, 5, 6, 7, 0, 1, 2], 5))
console.log(search([1, 2, 3, 4, 5], 8))
console.log(search([2, 3], 1))
console.log(search([], 8))
