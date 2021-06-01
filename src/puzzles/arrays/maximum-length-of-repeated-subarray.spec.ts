import {findLength} from './maximum-length-of-repeated-subarray'

test('returns the length of 3', () => {
  const nums1 = [1, 2, 3, 2, 1]
  const nums2 = [3, 2, 1, 4, 7]

  expect(findLength(nums1, nums2)).toEqual(3)
})

test('returns the length of 5', () => {
  const nums1 = [0, 0, 0, 0, 0]
  const nums2 = [0, 0, 0, 0, 0]

  expect(findLength(nums1, nums2)).toEqual(5)
})

test('returns the length of 5', () => {
  const nums1 = [6, 7, 1, 2, 3, 4, 5, 1, 2]
  const nums2 = [3, 4, 5, 1, 2, 3, 4, 6, 7]

  expect(findLength(nums1, nums2)).toEqual(5)
})
