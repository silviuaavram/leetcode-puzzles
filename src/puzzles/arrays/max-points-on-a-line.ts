/**
 * https://leetcode.com/problems/max-points-on-a-line/
 */

export function maxPoints(points: number[][]): number {
  if (points.length === 1) {
    return 1
  }

  let result = 0

  for (let i = 0; i < points.length; i++) {
    const angles = new Map<number, number>()

    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue
      }

      const angle =
        (Math.atan2(points[i][1] - points[j][1], points[i][0] - points[j][0]) *
          180) /
        Math.PI

      angles.set(angle, (angles.get(angle) ?? 1) + 1)
    }

    result = Array.from(angles.values()).reduce((acc, points) => {
      if (acc < points) {
        return points
      }

      return acc
    }, result)
  }

  return result
}
