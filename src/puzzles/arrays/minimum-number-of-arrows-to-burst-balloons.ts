export function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => {
    const diff = a[0] - b[0]

    if (diff === 0) {
      return a[1] - b[1]
    }

    return diff
  })

  for (let index = 1; index < points.length; index++) {
    const currentPoint = points[index]
    const previousPoint = points[index - 1]

    if (currentPoint[0] <= previousPoint[1]) {
      points.splice(index - 1, 2, [
        currentPoint[0],
        Math.min(currentPoint[1], previousPoint[1]),
      ])

      index--
    }
  }

  return points.length
}
