import {numSubarrayProductLessThanK} from './subarray-product-less-than-k'

test('returns the correct number of subarrays 1', () => {
  const nums = [10, 5, 2, 6]
  const k = 100
  const expected = 8

  expect(numSubarrayProductLessThanK(nums, k)).toEqual(expected)
})

test('returns the correct number of subarrays 2', () => {
  const nums: number[] = []
  const k = 100
  const expected = 0

  expect(numSubarrayProductLessThanK(nums, k)).toEqual(expected)
})

test('returns the correct number of subarrays 3', () => {
  const nums = [1, 2, 3]
  const k = 0
  const expected = 0

  expect(numSubarrayProductLessThanK(nums, k)).toEqual(expected)
})

test('returns the correct number of subarrays 4', () => {
  const nums = [10, 20, 5, 20]
  const k = 2000
  const expected = 8

  expect(numSubarrayProductLessThanK(nums, k)).toEqual(expected)
})

test('returns the correct number of subarrays 5', () => {
  const nums = [10, 20, 15, 4, 3]
  const k = 15
  const expected = 4

  expect(numSubarrayProductLessThanK(nums, k)).toEqual(expected)
})

