import {Heap} from 'utils.heap'

/**
 * https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/
 */
export function maxEvents(unsortedEvents: number[][]): number {
  let result = 0
  const eventsHeap: number[][] = []
  const events = unsortedEvents.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }

    return a[0] - b[0]
  })
  const lastDay = events.reduce((acc, [, day]) => Math.max(acc, day), 0)

  for (let day = 1; day <= lastDay; day++) {
    let index

    for (index = 0; index < events.length; index++) {
      const [eventStart, eventEnd] = events[index]

      if (day >= eventStart && day <= eventEnd) {
        let start = 0
        let end = eventsHeap.length - 1
        let mid

        while (start <= end) {
          mid = Math.floor((start + end) / 2)

          if (eventsHeap[mid][1] < events[index][1]) {
            start = mid + 1
          } else {
            end = mid - 1
          }
        }

        eventsHeap.splice(start, 0, events[index])
      } else {
        break
      }
    }
    if (index === 0 && events.length && !eventsHeap.length) {
      day = events[0][0] - 1
    } else {
      events.splice(0, index)
    }

    while (eventsHeap.length) {
      const [nextEventStart, nextEventEnd] = eventsHeap.shift()

      if (day >= nextEventStart && day <= nextEventEnd) {
        result++
        break
      }
    }
  }

  return result
}

export function maxEventsWithHeap(unsortedEvents: number[][]): number {
  let result = 0
  const eventsHeap = new Heap<number[]>({
    isHigher: (a, b) => a[1] < b[1],
  })
  const events = unsortedEvents.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }

    return a[0] - b[0]
  })
  const lastDay = events.reduce((acc, [, day]) => Math.max(acc, day), 0)

  for (let day = 1; day <= lastDay; day++) {
    let index

    for (index = 0; index < events.length; index++) {
      const [eventStart, eventEnd] = events[index]

      if (day >= eventStart && day <= eventEnd) {
        eventsHeap.add(events[index])
      } else {
        break
      }
    }

    if (index === 0 && events.length) {
      day = events[0][0] - 1
    } else {
      events.splice(0, index)
    }

    while (eventsHeap.size) {
      const [nextEventStart, nextEventEnd] = eventsHeap.remove()

      if (day >= nextEventStart && day <= nextEventEnd) {
        result++
        break
      }
    }
  }

  return result
}
