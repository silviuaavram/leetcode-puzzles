/**
 * https://leetcode.com/problems/meeting-rooms-ii/
 */
export function minMeetingRooms(intervals: number[][]): number {
  if (!intervals.length) {
    return 0
  }

  intervals.sort((a, b) => a[0] - b[0])
  const rooms: number[] = [intervals[0][1]]

  for (
    let intervalIndex = 1;
    intervalIndex < intervals.length;
    intervalIndex++
  ) {
    const startHour = intervals[intervalIndex][0]
    const endHour = intervals[intervalIndex][1]
    let needsNewRoom = true

    for (let roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
      if (rooms[roomIndex] <= startHour) {
        rooms[roomIndex] = endHour
        needsNewRoom = false
        break
      }
    }

    if (needsNewRoom) {
      rooms.push(endHour)
    }
  }

  return rooms.length
}
