/**
 * https://leetcode.com/problems/paint-house/
 */
export function minCost(costs: number[][]): number {
  const sums: number[][] = [costs[0]]
  const housesCount = costs.length

  for (let index = 1; index < costs.length; index++) {
    sums.push([])
    sums[index][0] =
      costs[index][0] + Math.min(sums[index - 1][1], sums[index - 1][2])
    sums[index][1] =
      costs[index][1] + Math.min(sums[index - 1][0], sums[index - 1][2])
    sums[index][2] =
      costs[index][2] + Math.min(sums[index - 1][0], sums[index - 1][1])
  }

  return Math.min(
    sums[housesCount - 1][0],
    sums[housesCount - 1][1],
    sums[housesCount - 1][2],
  )
}
