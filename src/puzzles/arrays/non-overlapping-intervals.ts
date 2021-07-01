/**
 * https://leetcode.com/problems/non-overlapping-intervals/
 */

export function eraseOverlapIntervals(intervals: number[][]): number {
  let overlappingIntervals = 0
  intervals.sort((a, b) => a[0] - b[0])

  for (let index = 1; index < intervals.length; index++) {
    const currentInterval = intervals[index]
    const previousInterval = intervals[index - 1]
    const currentIntervalStart = currentInterval[0]
    const currentIntervalEnd = currentInterval[1]
    const previousIntervalStart = previousInterval[0]
    const previousIntervalEnd = previousInterval[1]

    if (currentIntervalStart < previousIntervalEnd) {
      if (currentIntervalEnd > previousIntervalEnd) {
        intervals.splice(index, 1)
      } else {
        intervals.splice(index - 1, 1)
      }

      overlappingIntervals++
      index--
    }
  }

  return overlappingIntervals
}
