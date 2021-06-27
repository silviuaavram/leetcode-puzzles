/**
 * https://leetcode.com/problems/maximum-product-subarray/
 */
export function maxProduct(nums: number[]): number {
  let min = 1
  let max = nums[0]
  let result = nums[0]

  for (let index = 1; index < nums.length; index++) {
    const num = nums[index]
    if (num === 0) {
      min = 1
      max = 0
    } else {
      min *= num
      max *= num

      if (min > max) {
        max = max + min
        min = max - min
        max = max - min
      }

      max = Math.max(max, num)
      min = Math.min(min, num)
    }

    result = Math.max(result, max)
  }

  return result
}
