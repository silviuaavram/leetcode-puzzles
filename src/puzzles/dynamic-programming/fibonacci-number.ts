/**
 * https://leetcode.com/problems/fibonacci-number/
 */

export function fib(n: number): number {
  const solutions = new Map<number, number>()

  solutions.set(0, 0)
  solutions.set(1, 1)

  for (let index = 2; index <= n; index++) {
    solutions.set(index, solutions.get(index - 1) + solutions.get(index - 2))
  }

	return solutions.get(n)
}
