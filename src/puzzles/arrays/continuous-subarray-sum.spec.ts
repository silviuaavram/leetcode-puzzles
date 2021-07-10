import {checkSubarraySum} from './continuous-subarray-sum'

test('checks if there is a subarray with the sum of multiple k 1', () => {
  const nums = [23, 2, 4, 6, 7]
  const k = 6

  expect(checkSubarraySum(nums, k)).toBe(true)
})

test('checks if there is a subarray with the sum of multiple k 2', () => {
  const nums = [23, 2, 6, 4, 7]
  const k = 6

  expect(checkSubarraySum(nums, k)).toBe(true)
})

test('checks if there is a subarray with the sum of multiple k 3', () => {
  const nums = [23, 2, 6, 4, 7]
  const k = 13

  expect(checkSubarraySum(nums, k)).toBe(false)
})

test('checks if there is a subarray with the sum of multiple k 4', () => {
  const nums = [23, 2, 0, 0, 7]
  const k = 13

  expect(checkSubarraySum(nums, k)).toBe(true)
})

test('checks if there is a subarray with the sum of multiple k 5', () => {
  const nums = [23, 2, 4, 6, 6]
  const k = 7

  expect(checkSubarraySum(nums, k)).toBe(true)
})

test('checks if there is a subarray with the sum of multiple k 6', () => {
  const nums = [0]
  const k = 1

  expect(checkSubarraySum(nums, k)).toBe(false)
})

test('checks if there is a subarray with the sum of multiple k 7', () => {
  const nums = [1, 2, 3]
  const k = 5

  expect(checkSubarraySum(nums, k)).toBe(true)
})

test('checks if there is a subarray with the sum of multiple k 7', () => {
  const nums = [1, 0]
  const k = 2

  expect(checkSubarraySum(nums, k)).toBe(false)
})
