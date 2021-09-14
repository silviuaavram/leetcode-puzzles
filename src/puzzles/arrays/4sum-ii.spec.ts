import {fourSumCount} from './4sum-ii'

test('finds the correct number of 4sums 1', () => {
  const nums1 = [1, 2]
  const nums2 = [-2, -1]
  const nums3 = [-1, 2]
  const nums4 = [0, 2]

  expect(fourSumCount(nums1, nums2, nums3, nums4)).toEqual(2)
})

test('finds the correct number of 4sums 2', () => {
  const nums1 = [0]
  const nums2 = [0]
  const nums3 = [0]
  const nums4 = [0]

  expect(fourSumCount(nums1, nums2, nums3, nums4)).toEqual(1)
})

test('finds the correct number of 4sums 3', () => {
  const nums1 = [1, 3, 5]
  const nums2 = [-1, 4, 3]
  const nums3 = [-5, -2, 0]
  const nums4 = [3, 1, -1]

  expect(fourSumCount(nums1, nums2, nums3, nums4)).toEqual(4)
})

test('finds the correct number of 4sums 4', () => {
  const nums1 = [0, 1, -1]
  const nums2 = [-1, 1, 0]
  const nums3 = [0, 0, 1]
  const nums4 = [-1, 1, 1]

  expect(fourSumCount(nums1, nums2, nums3, nums4)).toEqual(17)
})
