/**
 * https://leetcode.com/problems/jump-game-ii/
 */
export function jump(nums: number[]): number {
  let i = 0
  let result = 0

  while (i < nums.length - 1) {
    const jumps = nums[i]
    let maxValue = 0
    let maxIndex
    let index

    for (index = 1; index <= jumps && i + index < nums.length; index++) {
      const possibleMaxIndex = i + index
      const value = index + nums[possibleMaxIndex]

      if (possibleMaxIndex === nums.length - 1) {
        maxIndex = possibleMaxIndex
        break
      }
      

      if (value > maxValue) {
        maxValue = value
        maxIndex = possibleMaxIndex
      }
    }

    result++
    i = maxIndex
  }

  return result
}
