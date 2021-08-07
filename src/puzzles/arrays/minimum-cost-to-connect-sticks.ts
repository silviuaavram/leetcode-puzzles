/**
 * https://leetcode.com/problems/minimum-cost-to-connect-sticks/
 */

import {Heap} from 'utils'

export function connectSticks(unsortedSticks: number[]): number {
  const sticks = unsortedSticks.sort((a, b) => a - b)
  let cost = 0

  while (sticks.length > 1) {
    console.log(sticks)
    const mergeCost = sticks.shift() + sticks.shift()
    cost += mergeCost

    let start = 0
    let end = sticks.length - 1
    let mid

    while (start <= end) {
      mid = Math.floor((start + end) / 2)

      if (sticks[mid] < mergeCost) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }

    sticks.splice(start, 0, mergeCost)
  }


  return cost
}

function connectSticksWithHeap(sticks: number[]): number {
  const sticksHeap = new Heap({isHigher: (v1, v2) => v1 < v2})
  let cost = 0

  for (let index = 0; index < sticks.length; index++) {
    sticksHeap.add(sticks[index])
  }

  while (sticksHeap.size > 1) {
    const mergeCost = sticksHeap.remove() + sticksHeap.remove()
    sticksHeap.add(mergeCost)
    cost += mergeCost
  }

  return cost
}
