import {numOfSubarrays} from './number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold'

test('returns the subarrays with average greather than threshold 1', () => {
  const arr = [2, 2, 2, 2, 5, 5, 5, 8]
  const k = 3
  const threshold = 4

  expect(numOfSubarrays(arr, k, threshold)).toEqual(3)
})

test('returns the subarrays with average greather than threshold 2', () => {
  const arr = [1,1,1,1,1]
  const k = 1
  const threshold = 0

  expect(numOfSubarrays(arr, k, threshold)).toEqual(5)
})

test('returns the subarrays with average greather than threshold 3', () => {
  const arr = [11,13,17,23,29,31,7,5,2,3]
  const k = 3
  const threshold = 5

  expect(numOfSubarrays(arr, k, threshold)).toEqual(6)
})

test('returns the subarrays with average greather than threshold 4', () => {
  const arr = [7,7,7,7,7,7,7]
  const k = 7
  const threshold = 7

  expect(numOfSubarrays(arr, k, threshold)).toEqual(1)
})

test('returns the subarrays with average greather than threshold 5', () => {
  const arr = [4,4,4,4]
  const k = 4
  const threshold = 4

  expect(numOfSubarrays(arr, k, threshold)).toEqual(1)
})


