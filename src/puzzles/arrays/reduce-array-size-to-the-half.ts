/**
 * https://leetcode.com/problems/reduce-array-size-to-the-half/
 */
export function minSetSize(arr: number[]): number {
  const counts = new Map<number, number>()
  const length = arr.length
  let halfLength = Math.ceil(length / 2)

  for (let index = 0; index < length; index++) {
    counts.set(arr[index], 1 + (counts.get(arr[index]) ?? 0))
  }

  const countValues = Array.from(counts.values()).sort((a, b) => a - b)
  let result = 0

  while (halfLength > 0) {
    result++
    halfLength -= countValues.pop()
  }

  return result
}
