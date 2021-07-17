/**
 * https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
 */
export function maxValue(n: number, index: number, maxSum: number): number {
  function sum(start: number, end: number) {
    const bigStart1 = BigInt(start - 1)
    const bigStart2 = BigInt(start)
    const bigEnd1 = BigInt(end)
    const bigEnd2 = BigInt(end + 1)

    return Number(bigEnd1 * bigEnd2 / BigInt(2) - bigStart1 * bigStart2 / BigInt(2))
  }

  function getTotalSum(value: number): number {
    const sumLeft =
      index === 0
        ? value
        : value - index > 0
        ? sum(value - index, value)
        : sum(1, value) + Math.abs(value - index) + 1
    const sumRight =
      index === n - 1
        ? 0
        : value - n + index + 1 > 0
        ? sum(value - n + index + 1, value - 1)
        : sum(1, value - 1) + Math.abs(value - n + index + 1) + 1

    return sumLeft + sumRight
  }

  let start = 1
  let end = Math.ceil(maxSum / n) + n
  let result

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const sum = getTotalSum(mid)

    if (sum === maxSum) {
      return mid
    } else if (sum < maxSum) {
      result = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return result
}
