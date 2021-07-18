/**
 * https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/
 */

export function minCost(s: string, cost: number[]): number {
  let result = 0

  for (let index = 0; index < s.length - 1; index++) {
    if (s[index] === s[index + 1]) {
      result += Math.min(cost[index], cost[index + 1])
      cost[index + 1] = Math.max(cost[index], cost[index + 1])
    }
  }

  return result
}
