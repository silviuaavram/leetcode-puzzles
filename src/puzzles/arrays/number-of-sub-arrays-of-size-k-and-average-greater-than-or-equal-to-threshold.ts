/**
 * https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 */

export function numOfSubarrays(
  arr: number[],
  k: number,
  threshold: number,
): number {
  const firstSum = arr.slice(0, k).reduce((acc, num) => acc + num, 0)
  const sums: number[] = [firstSum]

  for (let index = k; index < arr.length; index++) {
    sums.push(sums[sums.length - 1] - arr[index - k] + arr[index])
  }

  return sums.map(sum => sum / k).filter(average => average >= threshold).length
}
