/**
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
 */
export function minMoves2(nums: number[]): number {
  let result
  nums.sort((a, b) => a - b)

  for (const num1 of nums) {
    let moves = 0
    for (const num2 of nums) {
      moves += Math.abs(num1 - num2)
    }

    result =  Math.min(moves, result ?? moves)
  }

  return result
}
