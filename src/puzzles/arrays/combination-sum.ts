/**
 * https://leetcode.com/problems/combination-sum/
 */

export function combinationSum(candidates: number[], target: number): number[][] {
  const queue = [[[], candidates]]
  const result: number[][] = []

  while(queue.length) {
    const [values, rest] = queue.shift()
    const sum = values.reduce((acc, value) => acc + value, 0)

    if (sum === target) {
      result.push(values)
      continue
    }

    if (sum + rest[0] <= target) {
      queue.push([[...values, rest[0]], rest])
      queue.push([[...values], rest.slice(1)])
    }
  }
  return result.map(r => r.sort())

};
