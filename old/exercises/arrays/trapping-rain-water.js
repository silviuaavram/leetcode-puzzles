/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (!height.length) {
    return 0
  }

  currMax = height[0]

  for (let i = 1; i < height.length; i++) {
    if (height[i] > currMax) {
    }
  }
}
