/**
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/
 */
export function findLength(nums1: number[], nums2: number[]): number {
  let maxLength = 0
  const lengths = []

  for (let index = 0; index < nums1.length; index++) {
    lengths.push(new Array(nums2.length).fill(0))
  }

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        const length = 1 + (i > 0 && j > 0 ? lengths[i - 1][j - 1] : 0)

        maxLength = Math.max(length, maxLength)
        lengths[i][j] = length
      }
    }
  }

  return maxLength
};
