/**
 * https://leetcode.com/problems/insert-interval/
 */
export function insert(
  intervals: number[][],
  newInterval: number[],
): number[][] {
  const [newStart, newEnd] = newInterval
  const resultingInterval = [...newInterval]

  for (let index = 0; index < intervals.length; index++) {
    const [currentStart, currentEnd] = intervals[index]

    if (newEnd >= currentStart && currentEnd >= newStart) {
      resultingInterval[0] = Math.min(
        currentStart,
        newStart,
        resultingInterval[0],
      )
      resultingInterval[1] = Math.max(currentEnd, newEnd, resultingInterval[1])

      intervals.splice(index--, 1)
    } else if (resultingInterval[1] < currentStart) {
      return [
        ...intervals.slice(0, index),
        resultingInterval,
        ...intervals.slice(index),
      ]
    }
  }

  return [...intervals, resultingInterval]
}
