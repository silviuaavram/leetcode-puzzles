/**
 * https://leetcode.com/problems/unique-binary-search-trees/
 */
export function numTrees(n: number): number {
  const results = new Array(n + 1).fill(0)
  results[0] = 1
  results[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      results[i] += results[i - j] * results[j - 1]
    }
  }

  return results[n]
}
