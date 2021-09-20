/**
 * https://leetcode.com/problems/meeting-scheduler/
 */
export function minAvailableDuration(
  slots1: number[][],
  slots2: number[][],
  duration: number,
): number[] {
  slots1.sort(([a], [b]) => a - b)
  slots2.sort(([a], [b]) => a - b)

  for (let index = 0; index < slots1.length; index++) {
    const [start1, end1] = slots1[index]

    for (let index = 0; index < slots2.length; index++) {
      const [start2, end2] = slots2[index]

      if (end1 < start2) {
        break
      }

      if (start1 <= start2) {
        // [15 25] [20 30]
        if (end1 <= end2 && end1 - start2 >= duration) {
          return [start2, start2 + duration]
          // [15 25] [20 23]
        } else if (end2 < end1 && end2 - start2 >= duration) {
          return [start2, start2 + duration]
        }
      } else {
        // [25 30] [20 35]
        if (end1 <= end2 && end1 - start1 >= duration) {
          return [start1, start1 + duration]
          // [25 35] [20 30]
        } else if (end1 > end2 && end2 - start1 >= duration) {
          return [start1, start1 + duration]
        }
      }
    }
  }

  return []
}
