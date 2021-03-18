/**
 * https://leetcode.com/problems/missing-number/
 */

export function missingNumber(nums: number[]): number {
  const numsLength = nums.length
  const actualSum = nums.reduce((acc, num) => acc + num, 0)
  const expectedSum = (numsLength * (numsLength + 1)) / 2
  
  return expectedSum - actualSum
}
