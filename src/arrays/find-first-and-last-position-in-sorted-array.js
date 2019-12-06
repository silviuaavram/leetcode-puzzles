/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  return binarySearch(0, nums.length - 1, nums, target);
};

/**
 *
 * @param {number} start
 * @param {number} end
 * @param {number[]} nums
 * @param {number} target
 * @param {number} foundPosition
 * @param {string} operation
 */
function binarySearch(start, end, nums, target, foundPosition, operation) {
  const middle = Math.round((start + end) / 2);
  // console.log("bs", start, end, middle, foundPosition, operation);
  
  if (start < 0 || end >= nums.length || start > end) {
    return foundPosition === undefined ? [-1, -1] : foundPosition;
  }

  if (start === end) {
    if (foundPosition === undefined) {
      return target === nums[start] ? [start, start] : [-1, -1];
    } else {
      return target === nums[start] ? start : foundPosition;
    }
  }

  if (nums[middle] === target) {
    if (foundPosition === undefined) {
      // first found.
      return [
        binarySearch(start, middle - 1, nums, target, middle, "first"),
        binarySearch(middle + 1, end, nums, target, middle, "last")
      ];
    } else {
      if (operation === "first") {
        return binarySearch(start, middle - 1, nums, target, middle, "first");
      }
      if (operation === "last") {
        return binarySearch(middle + 1, end, nums, target, middle, "last");
      }
    }
  } else {
    if (foundPosition === undefined) {
      if (nums[middle] > target) {
        return binarySearch(start, middle - 1, nums, target);
      } else {
        return binarySearch(middle + 1, end, nums, target);
      }
    } else {
      if (operation === "first") {
        return binarySearch(
          middle + 1,
          end,
          nums,
          target,
          foundPosition,
          operation
        );
      }
      if (operation === "last") {
        return binarySearch(
          start,
          middle - 1,
          nums,
          target,
          foundPosition,
          operation
        );
      }
    }
  }
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([3, 3, 3, 3, 3], 3));
console.log(searchRange([], 3));
console.log(searchRange([1, 2, 3, 4, 5], 6));
console.log(searchRange([3], 3));
console.log(searchRange([3, 3], 3));
console.log(searchRange([2, 2], 3));
console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3));
