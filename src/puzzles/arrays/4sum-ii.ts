/**
 * https://leetcode.com/problems/4sum-ii/
 */
export function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  const n = nums1.length
  const map = new Map<number, number>()
  let result = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sum = nums1[i] + nums2[j]
      map.set(sum, (map.get(sum) ?? 0) + 1)
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sum = nums3[i] + nums4[j]
      
      if (map.has(-sum)) {
        result += map.get(-sum)
      }
    }
  }

  return result
}
