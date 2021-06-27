import {Heap} from 'utils'

/**
 * https://leetcode.com/problems/k-closest-points-to-origin/
 */
export function kClosest(points: number[][], k: number): number[][] {
  const pointsHeap = new Heap<number[]>({
    isHigher: (p1, p2) => {
      return (
        Math.sqrt(Math.pow(p1[0], 2) + Math.pow(p1[1], 2)) <
        Math.sqrt(Math.pow(p2[0], 2) + Math.pow(p2[1], 2))
      )
    },
  })

  for (const point of points) {
    pointsHeap.add(point)
  }

  const result = []

  for (let index = 0; index < k; index++) {
    result.push(pointsHeap.remove())
  }

  return result
}
