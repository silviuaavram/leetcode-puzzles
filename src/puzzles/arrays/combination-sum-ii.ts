/**
 * https://leetcode.com/problems/combination-sum-ii/
 */
export function combinationSum2(
  candidates: number[],
  target: number,
): number[][] {
  const queue = [[[], candidates]]
  const result: number[][] = []
  candidates.sort((a, b) => a - b)

  while (queue.length) {
    const [values, rest] = queue.shift()
    const sum = values.reduce((acc, value) => acc + value, 0)

    if (sum === target) {
      result.push(values)
      continue
    }

    if (rest.length && sum + rest[0] <= target) {
      queue.push([[...values, rest[0]], rest.slice(1)])
      queue.push([values, rest.slice(rest.lastIndexOf(rest[0]) + 1)])
    }
  }

  return result
}
