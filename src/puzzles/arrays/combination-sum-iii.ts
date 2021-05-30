/**
 * https://leetcode.com/problems/combination-sum-iii/
 */
export function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = []
  const maxSum = 45

  if (n > maxSum) {
    return result
  }

  function getCombination(
    numbers: number[] = [],
    sumSoFar = 0,
    start = 1,
  ): void {
    if (sumSoFar === n && numbers.length === k) {
      result.push(numbers)
      return
    }

    if (numbers.length === k || start === 10) {
      return
    }

    getCombination([...numbers, start], sumSoFar + start, start + 1)
    getCombination([...numbers], sumSoFar, start + 1)
  }

  getCombination()

  return result
}
