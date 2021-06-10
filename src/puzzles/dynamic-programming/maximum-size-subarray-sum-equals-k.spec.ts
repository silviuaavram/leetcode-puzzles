import {maxSubArrayLen} from './maximum-size-subarray-sum-equals-k'

test('returns the longest subarray that sums up k 1', () => {
  const nums = [1, -1, 5, -2, 3]
  const k = 3

  expect(maxSubArrayLen(nums, k)).toEqual(4)
})

test('returns the longest subarray that sums up k 2', () => {
  const nums = [-2, -1, 2, 1]
  const k = 1

  expect(maxSubArrayLen(nums, k)).toEqual(2)
})

test('returns the longest subarray that sums up k 3', () => {
  const nums = [3, 2, 1, 4, 1, 1, 1, 3]
  const k = 3

  expect(maxSubArrayLen(nums, k)).toEqual(3)
})
