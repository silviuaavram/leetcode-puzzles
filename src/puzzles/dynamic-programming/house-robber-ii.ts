/**
 * https://leetcode.com/problems/house-robber-ii/
 */

export function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }

  const loot: number[] = []

  for (let index = 0; index < nums.length - 1; index++) {
    const solutionWithNeighbour = nums[index] + (loot[index - 2] ?? 0)
    const solutionWithoutNeighbours = loot[index - 1] ?? 0

    loot[index] = Math.max(solutionWithNeighbour, solutionWithoutNeighbours)
  }

  const firstMax = loot[loot.length - 1]
  loot.length = 0

  for (let index = 0; index < nums.length - 1; index++) {
    const solutionWithNeighbour = nums[index + 1] + (loot[index - 2] ?? 0)
    const solutionWithoutNeighbours = loot[index - 1] ?? 0

    loot[index] = Math.max(solutionWithNeighbour, solutionWithoutNeighbours)
  }

  return Math.max(firstMax, loot[loot.length - 1])
}
