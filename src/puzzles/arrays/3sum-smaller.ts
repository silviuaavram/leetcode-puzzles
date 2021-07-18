/**
 * https://leetcode.com/problems/3sum-smaller/
 */
export function threeSumSmaller(nums: number[], target: number): number {
  if (nums.length < 3) {
    return 0
  }

  let result = 0
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < target) {
        result += k - j
        j++
      } else {
        k--
      }
    }
  }

  return result
}
