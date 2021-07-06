/**
 * https://leetcode.com/problems/car-fleet/
 */
export function carFleet(
  target: number,
  position: number[],
  speed: number[],
): number {
  const carSpeeds = new Map<number, number>()
  let result = 0
  let slowestTime: number

  for (let index = 0; index < position.length; index++) {
    carSpeeds.set(position[index], speed[index])
  }

  position.sort((a, b) => b - a)

  for (let index = 0; index < position.length; index++) {
    const timeNeeded =
      (target - position[index]) / carSpeeds.get(position[index])

    if (slowestTime === undefined || slowestTime < timeNeeded) {
      slowestTime = timeNeeded
      result++
    }
  }

  return result
}
