/**
 * https://leetcode.com/problems/coin-change/
 */

export function coinChange(coins: number[], amount: number): number {
  const solutions = new Map<number, number>()
	solutions.set(0, 0)

  for (const coin of coins) {
    solutions.set(coin, 1)
  }

  for (let sum = 1; sum <= amount; sum++) {
    for (const coin of coins) {
      const diff = sum - coin

      if (diff === 0) {
        continue
      }

      const diffSolution = solutions.get(diff)

      if (!diffSolution) {
        continue
      }

      const prevSoltion = solutions.get(sum)

      if (prevSoltion === undefined || prevSoltion > diffSolution + 1) {
        solutions.set(sum, diffSolution + 1)
      }
    }
  }

	return solutions.get(amount) ?? -1
}
