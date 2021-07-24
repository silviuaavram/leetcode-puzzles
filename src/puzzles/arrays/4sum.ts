/**
 * https://leetcode.com/problems/4sum/
 */
export function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }

    for (let j = nums.length - 1; j >= 0; j--) {
      if (nums[j] === nums[j + 1]) {
        continue
      }

      let sum1 = nums[i] + nums[j]

      let k = i + 1
      let l = j - 1

      while (k < l) {
        if (nums[k] === nums[k - 1] && k > i + 1) {
          k++
          continue
        }

        if (nums[l] === nums[l + 1] && l < j - 1) {
          l--
          continue
        }

        const sum2 = nums[k] + nums[l]

        if (sum1 + sum2 <= target) {
          if (sum1 + sum2 === target) {
            result.push([nums[i], nums[k], nums[l], nums[j]])
          }

          k++
        } else if (sum1 + sum2 > target) {
          l--
        }
      }
    }
  }

  return result
}
