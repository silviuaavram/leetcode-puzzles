/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxSoFar = 0;
  for (let i = 1; i < height.length; i++) {
    for (let j = 0; j < i; j++) {
      maxSoFar = Math.max(maxSoFar, Math.min(height[j], height[i]) * (i - j));
    }
  }

  return maxSoFar;
};

// console.log(maxArea([2, 3]));
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([9, 9, 1, 2, 3, 4, 5]));
