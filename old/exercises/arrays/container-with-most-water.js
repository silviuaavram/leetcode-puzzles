const {expect} = require('../../lib')

/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the
 * two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains
 * the most water.
 * Note: You may not slant the container and n is at least 2.
 *
 * https://leetcode.com/problems/container-with-most-water/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxSoFar = 0
  let m = 0
  let n = height.length - 1

  while (m !== n) {
    maxSoFar = Math.max(maxSoFar, Math.min(height[m], height[n]) * (n - m))
    // We know for sure that horizontal axis (n-m) will get smaller.
    // We will iterate with the possibility of getting something bigger.
    if (height[m] >= height[n]) {
      n--
    } else {
      m++
    }
  }

  return maxSoFar
}

expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49)
expect(maxArea([9, 9, 1, 2, 3, 4, 5])).toEqual(30)
