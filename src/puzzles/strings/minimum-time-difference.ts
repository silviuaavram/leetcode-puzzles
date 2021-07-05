/**
 * https://leetcode.com/problems/minimum-time-difference/
 */
export function findMinDifference(timePoints: string[]): number {
  let result = 720 // 12 * 60

  timePoints.sort((time1, time2) => {
    const hour1 = Number(time1.slice(0, 2))
    const minute1 = Number(time1.slice(3, 5))
    const hour2 = Number(time2.slice(0, 2))
    const minute2 = Number(time2.slice(3, 5))

    if (hour1 < hour2) {
      return -1
    }

    if (hour1 > hour2) {
      return 1
    }

    if (minute2 > minute1) {
      return -1
    }

    if (minute2 < minute1) {
      return 1
    }

    return 0
  })

  function getMinuteDifference(time1: string, time2: string): number {
    const hour1 = Number(time1.slice(0, 2))
    const minute1 = Number(time1.slice(3, 5))
    const hour2 = Number(time2.slice(0, 2))
    const minute2 = Number(time2.slice(3, 5))
    const hourDifference = Math.abs(hour1 - hour2)
    const minuteDifference = minute1 - minute2
    const totalDifference = hourDifference * 60 + minuteDifference

    // normalization
    return totalDifference > 720 ? 1440 - totalDifference : totalDifference
  }

  for (let index = 1; index < timePoints.length; index++) {
    result = Math.min(
      result,
      getMinuteDifference(timePoints[index], timePoints[index - 1]),
    )
  }

  return Math.min(
    result,
    getMinuteDifference(timePoints[timePoints.length - 1], timePoints[0]),
  )
}
