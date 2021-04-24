/**
 * https://leetcode.com/problems/powx-n/
 */

export function myPow(x: number, n: number): number {
  const solutions = new Map<number, number>()
  solutions.set(0, 1)
  solutions.set(1, x)
  solutions.set(-1, 1 / x)

  function pow(n: number): number {
    if (!solutions.has(n)) {
      const halfN = Math.floor(n / 2)
      const otherHalfN = n - halfN
      const result = pow(halfN) * pow(otherHalfN)
      solutions.set(n, result)

      return result
    } else {
      return solutions.get(n)
    }
  }

  return Number(
    Number(String(pow(n)).match(/-*[0-9]+(.[0-9]{0,6}){0,1}/)[0]).toFixed(5),
  )
}
