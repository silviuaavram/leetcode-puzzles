/**
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 */
export function findSpecialInteger(arr: number[]): number {
  const length = arr.length
  let occurances = 0
  let current = arr[0]

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === current) {
      occurances++
    } else {
      occurances = 1
      current = arr[index]
    }

    if (occurances / length > 0.25) {
      return current
    }
  }

  throw new Error('should not be here')
}
