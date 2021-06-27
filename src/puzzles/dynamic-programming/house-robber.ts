/**
 * https://leetcode.com/problems/house-robber/
 */

export function rob(nums: number[]): number {
  const solutions: number[] = []

  for (let index = 0; index < nums.length; index++) {
    const solutionWithNeighbour = nums[index] + (solutions[index - 2] ?? 0)
    const solutionWithoutNeighbours = solutions[index - 1] ?? 0

    solutions[index] = Math.max(
      solutionWithNeighbour,
      solutionWithoutNeighbours,
    )
  }

  return solutions.reduce((acc, solution) => Math.max(acc, solution), 0)
}
