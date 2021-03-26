import {lengthOfLIS} from './longest-increasing-subsequence'

test('should return 4 - 1', () => {
  const nums = [10, 9, 2, 5, 3, 7, 101, 18]

  expect(lengthOfLIS(nums)).toEqual(4)
})

test('should return 4 - 1', () => {
  const nums = [0, 1, 0, 3, 2, 3]

  expect(lengthOfLIS(nums)).toEqual(4)
})

test('should return 1', () => {
  const nums = [7, 7, 7, 7, 7, 7, 7]

  expect(lengthOfLIS(nums)).toEqual(1)
})

test('should return 3', () => {
  const nums = [4, 10, 4, 3, 8, 9]

  expect(lengthOfLIS(nums)).toEqual(3)
})

test('should return 6', () => {
  const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6]

  expect(lengthOfLIS(nums)).toEqual(6)
})
