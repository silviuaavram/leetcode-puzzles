import {subarraySum} from './subarray-sum-equals-k'

test('should return 3 subarays', () => {
  expect(subarraySum([4, 1, 3, 6, -2, 4, -2, -4], 10)).toEqual(3)
})

test('should return 2 subarays', () => {
  expect(subarraySum([1, 1, 1], 2)).toEqual(2)
})

test('should return 2 subarays', () => {
  expect(subarraySum([1, 2, 3], 3)).toEqual(2)
})

test('should return 0 subarays', () => {
  expect(subarraySum([1], 2)).toEqual(0)
})

test('should return 2 subarays', () => {
  expect(subarraySum([1, -1, 0], 0)).toEqual(3)
})
