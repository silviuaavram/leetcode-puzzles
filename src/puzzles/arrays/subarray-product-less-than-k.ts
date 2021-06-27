/**
 * https://leetcode.com/problems/subarray-product-less-than-k/
 */

export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let result = 0
  let start = 0
  let end = 0
  let product = nums[0]

  while (end < nums.length) {
    if (product < k) {
      end++
      result += end - start
      product *= nums[end]
    } else {
      if (start === end) {
        end++
        start++
        product = nums[end]
      } else {
        product /= nums[start]
        start++
      }
    }
  }

  return result
}

function numSubarrayProductLessThanKBruteForce(
  nums: number[],
  k: number,
): number {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    let product = 1
    for (let j = i; j < nums.length; j++) {
      product *= nums[j]
      if (product < k) {
        result++
      } else {
        break
      }
    }
  }

  return result
}
