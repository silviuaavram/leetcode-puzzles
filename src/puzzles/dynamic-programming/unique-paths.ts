/**
 * https://leetcode.com/problems/unique-paths/
 */
export function uniquePaths(m: number, n: number): number {
  const pathValues = new Map<string, number>()

  pathValues.set(getKey(0, 0), 1)

  function getKey(m: number, n: number): string {
    return `${m}-${n}`
  }

  function getPathValue(m: number, n: number): number {
    const key = getKey(m, n)

    if (pathValues.has(key)) {
      return pathValues.get(key)
    }

    const value =
      (m > 0 ? getPathValue(m - 1, n) : 0) + (n > 0 ? getPathValue(m, n - 1) : 0)

    pathValues.set(key, value)

    return value
  }

  for (let index = 1; index < Math.max(m, n); index++) {
    getPathValue(Math.min(index, m - 1), Math.min(index, n - 1))
  }

  return pathValues.get(getKey(m - 1, n - 1))
}
