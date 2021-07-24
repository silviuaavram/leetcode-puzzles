import {fourSum} from './4sum'

test('returns the arrays of 4 that sum up to target 1', () => {
  const nums = [1, 0, -1, 0, -2, 2]
  const target = 0
  const expected = [
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]

  expect(fourSum(nums, target)).toEqual(expect.arrayContaining(expected))
})

test('returns the arrays of 4 that sum up to target 2', () => {
  const nums = [2, 2, 2, 2, 2]
  const target = 8
  const expected = [[2, 2, 2, 2]]

  expect(fourSum(nums, target)).toEqual(expect.arrayContaining(expected))
})

test('returns the arrays of 4 that sum up to target 3', () => {
  const nums = [5, 5, 3, 5, 1, -5, 1, -2]
  const target = 4
  const expected = [[-5, 1, 3, 5]]

  expect(fourSum(nums, target)).toEqual(expect.arrayContaining(expected))
})
