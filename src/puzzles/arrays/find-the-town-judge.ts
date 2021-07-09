/**
 * https://leetcode.com/problems/find-the-town-judge/
 */
export function findJudge(n: number, trust: number[][]): number {
  const trusts = new Array(n).fill(false)
  const trustCount = new Array(n).fill(0)

  if (trust.length < n - 1) {
    return -1
  }

  for (let index = 0; index < trust.length; index++) {
    const truster = trust[index][0] - 1
    const trustee = trust[index][1] - 1

    trusts[truster] = true
    trustCount[trustee]++
  }

  for (let index = 0; index < n; index++) {
    if (trustCount[index] === n - 1 && !trusts[index]) {
      return index + 1
    }
  }

  return -1
}
