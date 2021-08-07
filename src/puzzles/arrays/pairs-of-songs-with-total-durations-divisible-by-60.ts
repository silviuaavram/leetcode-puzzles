/**
 * https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
 */

// [30, 20, 150, 100, 40]
// [30, 20, 30, 40, 40]
// 30: 2
// 20: 1
// 40: 2

// 0: 3

export function numPairsDivisibleBy60(time: number[]): number {
  const remaindersMap = new Map<number, number>()

  for (let index = 0; index < time.length; index++) {
    const remainder = time[index] % 60

    remaindersMap.set(remainder, (remaindersMap.get(remainder) ?? 0) + 1)
  }

  const zeros = (remaindersMap.get(0) ?? 1) - 1
  const halves = (remaindersMap.get(30) ?? 1) - 1
  let result = 0

  result += (zeros * (zeros + 1)) / 2
  result += (halves * (halves + 1)) / 2

  for (let index = 1; index < 30; index++) {
    if (remaindersMap.has(index) && remaindersMap.has(60 - index)) {
      result += remaindersMap.get(60 - index) * remaindersMap.get(index)
    }
  }

  return result
}
