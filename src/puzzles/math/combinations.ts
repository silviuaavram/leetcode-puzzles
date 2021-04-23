/**
 * https://leetcode.com/problems/combinations/
 */

export function combine(n: number, k: number): number[][] {
  const acc: number[][] = []
  function generateCombination(soFar: number[], left: number[]) {
    if (soFar.length === k) {
      acc.push(soFar)
      return
    }

    for (let index = 0; index < left.length; index++) {
      generateCombination([...soFar, left[index]], left.slice(index + 1))
    }
  }

  const initialLeft = new Array(n)
  for (let index = 0; index < n; index++) {
    initialLeft[index] = index + 1
  }
  generateCombination([], initialLeft)

  return acc
}
