/**
 * https://leetcode.com/problems/koko-eating-bananas/
 */

export function minEatingSpeed(piles: number[], h: number): number {
  piles.sort((a, b) => a - b)
  let minSpeed = 0
  let maxSpeed = piles[piles.length - 1]
  let finished = piles.length

  while (minSpeed <= maxSpeed) {

    const speed = Math.ceil((minSpeed + maxSpeed) / 2)
    let start = 0
    let end = piles.length - 1

    while (start <= end) {
      const mid = Math.floor((start + end) / 2)

      if (piles[mid] <= speed) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }

    finished = piles.reduce((acc, p) => acc + Math.ceil(p / speed), 0)

    if (finished <= h) {
      maxSpeed = speed - 1
    } else {
      minSpeed = speed + 1
    }
  }

  return minSpeed
}
