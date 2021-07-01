import {firstMissingPositive} from './first-missing-positive'

test('finds first missing positive 1', () => {
  const nums = [1, 2, 0]
  const expected = 3

  expect(firstMissingPositive(nums)).toEqual(expected)
})

test('finds first missing positive 2', () => {
  const nums = [3, 4, -1, 1]
  const expected = 2

  expect(firstMissingPositive(nums)).toEqual(expected)
})

test('finds first missing positive 3', () => {
  const nums = [7, 8, 9, 11, 12]
  const expected = 1

  expect(firstMissingPositive(nums)).toEqual(expected)
})

test('finds first missing positive 4', () => {
  const nums = [-3, 1, 7, 0, 15, 3, 4, 6, 2]
  const expected = 5

  expect(firstMissingPositive(nums)).toEqual(expected)
})

test('finds first missing positive 5', () => {
  const nums = [1, 3, 0, 4, 2]
  const expected = 5

  expect(firstMissingPositive(nums)).toEqual(expected)
})

test('finds first missing positive 6', () => {
  const nums = [1]
  const expected = 2

  expect(firstMissingPositive(nums)).toEqual(expected)
})

