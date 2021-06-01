/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let lengthResult = nums.length
  const sums = nums.reduce((acc, num, index) => {
    acc.push((acc[index - 1] ?? 0) + nums[index])

    return acc
  }, [])

  if (sums[sums.length - 1] < target) {
    return 0
  }

  function searchForEnd(index: number, start: number, end: number): void {
    if (start > end) {
      return
    }

    if (start === end) {
      if (sums[start] - (sums[index - 1] ?? 0) >= target) {
        lengthResult = Math.min(lengthResult, end - index + 1)
      }
      return
    }

    const mid = Math.floor((start + end) / 2)

    if (sums[mid] - (sums[index - 1] ?? 0) >= target) {
      lengthResult = Math.min(lengthResult, end - index + 1)
      searchForEnd(index, start, mid)
    } else {
      searchForEnd(index, mid + 1, end)
    }
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] >= target) {
      return 1
    }

    searchForEnd(index, index + 1, nums.length - 1)
  }

  return lengthResult
}
