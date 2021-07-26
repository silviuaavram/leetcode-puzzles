import {findMedianSortedArrays} from './median-of-two-sorted-arrays'

test('finds the median of arrays 1', () => {
  const nums1 = [1, 3]
  const nums2 = [2]

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(2)
})

test('finds the median of arrays 2', () => {
  const nums1 = [1, 2]
  const nums2 = [3, 4]

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.5)
})

test('finds the median of arrays 3', () => {
  const nums1 = [0, 0]
  const nums2 = [0, 0]

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(0)
})

test('finds the median of arrays 4', () => {
  const nums1: number[] = []
  const nums2 = [1]

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(1)
})

test('finds the median of arrays 5', () => {
  const nums1 = [2]
  const nums2: number[] = []

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(2)
})

test('finds the median of arrays 5', () => {
  const nums1 = [1, 2, 4, 5, 6, 9]
  const nums2: number[] = [3, 7, 8, 10]

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(5.5)
})

test('finds the median of arrays 6', () => {
  const nums1 = [1, 2, 3, 4, 5, 6, 9]
  const nums2: number[] = [7, 8]

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(5)
})

test('finds the median of arrays 7', () => {
  const nums1 = [3, 4]
  const nums2: number[] = []

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(3.5)
})

test('finds the median of arrays 8', () => {
  const nums1 = [4, 5, 6, 8, 9]
  const nums2: number[] = []

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(6)
})

test('finds the median of arrays 9', () => {
  const nums1 = [1, 2, 3, 4, 5, 6]
  const nums2 = [7, 8, 9]

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(5)
})

test('finds the median of arrays 10', () => {
  const nums1 = [1, 2, 3, 5, 6]
  const nums2 = [4]

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(3.5)
})

test('finds the median of arrays 11', () => {
  const nums1 = [1, 2]
  const nums2 = [3]

  expect(findMedianSortedArrays(nums1, nums2)).toEqual(2)
})

