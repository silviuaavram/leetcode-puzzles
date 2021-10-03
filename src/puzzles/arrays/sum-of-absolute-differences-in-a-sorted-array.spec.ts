import {getSumAbsoluteDifferences} from './sum-of-absolute-differences-in-a-sorted-array'

test('returns the correct array 1', () => {
  const nums = [2, 3, 5]
  const expected = [4, 3, 5]

  expect(getSumAbsoluteDifferences(nums)).toEqual(expected)
})

test('returns the correct array 2', () => {
  const nums = [1, 4, 6, 8, 10]
  const expected = [24, 15, 13, 15, 21]

  expect(getSumAbsoluteDifferences(nums)).toEqual(expected)
})
