/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  if (!nums1.length) {
    const mid = Math.floor(nums2.length / 2)
    return nums2.length % 2 === 0 ? (nums2[mid] + nums2[mid - 1]) / 2 : nums2[mid]
  }

  if (!nums2.length) {
    const mid = Math.floor(nums1.length / 2)
    return nums1.length % 2 === 0 ? (nums1[mid] + nums1[mid - 1]) / 2 : nums1[mid]
  }

  const totalLength = nums1.length + nums2.length + 1
  let startX = 0
  let endX = nums1.length - 1
  let partitionX = Math.floor((startX + endX) / 2)
  let partitionY = Math.floor(totalLength / 2) - partitionX
  let x1 = nums1[partitionX - 1]
  let x2 = nums1[partitionX]
  let y1 = nums2[partitionY - 1]
  let y2 = nums2[partitionY]

  while (startX <= endX) {
    // console.log(partitionX, partitionY,[...nums1.slice(0, partitionX), ...nums2.slice(0, partitionY)], [...nums1.slice(partitionX), ...nums2.slice(partitionY)])
    if (
      (x1 !== undefined || y2 !== undefined) &&
      (x2 !== undefined || y1 !== undefined) &&
      (x1 ?? -Infinity) <= (y2 ?? Infinity) &&
      (y1 ?? -Infinity) <= (x2 ?? Infinity)
    ) {
      break
    }
    if ((x1 ?? -Infinity) > (y2 ?? Infinity)) {
      endX = partitionX - 1
    } else {
      startX = partitionX + 1
    }

    partitionX = Math.floor((startX + endX) / 2)
    partitionY = Math.floor(totalLength / 2) - partitionX
    x1 = nums1[partitionX - 1]
    x2 = nums1[partitionX]
    y1 = nums2[partitionY - 1]
    y2 = nums2[partitionY]
  }

  if (totalLength % 2 === 0) {
    // console.log(x1, y1)
    return Math.max(x1 ?? -Infinity, y1 ?? -Infinity)
  } else {
    // console.log(x1, y1, x2, y2, Math.max(x1 ?? -Infinity, y1 ?? -Infinity),  Math.min(x2 ?? Infinity, y2 ?? Infinity))
    return (
      (Math.max(x1 ?? -Infinity, y1 ?? -Infinity) +
        Math.min(x2 ?? Infinity, y2 ?? Infinity)) /
      2
    )
  }
}
