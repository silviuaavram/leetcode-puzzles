/**
 * https://leetcode.com/problems/merge-intervals/
 */

export function merge(intervals: number[][]): number[][] {
  if (!intervals?.length) {
    return []
  }

  intervals.sort((i1, i2) => i1[0] - i2[0])

  const result: number[][] = [intervals.shift()]

  for (const interval of intervals) {
    const startIn = interval[0]
    const endIn = interval[1]
    const startOut = result[result.length - 1][0]
    const endOut = result[result.length - 1][1]

    if (startIn > endOut) {
      result.push(interval)
    } else if (endIn > endOut) {
      result[result.length - 1] = [startOut, endIn]
    }
  }

  return result
}
