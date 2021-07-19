/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
export function findMin(nums: number[]): number {
  const first = nums[0]

  if (nums.length === 1 || first < nums[nums.length - 1]) {
    return first
  }

  let start = 1
  let end = nums.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (nums[mid] > first) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return nums[start]
}
