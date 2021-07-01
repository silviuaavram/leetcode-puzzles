import {findDisappearedNumbers} from './find-all-numbers-disappeared-in-an-array'

test('finds the numbers 1', () => {
  const nums = [4, 3, 2, 7, 8, 2, 3, 1]
  const expected = [5, 6]

  expect(findDisappearedNumbers(nums)).toEqual(expected)
})

test('finds the numbers 2', () => {
  const nums = [1, 1]
  const expected = [2]

  expect(findDisappearedNumbers(nums)).toEqual(expected)
})

test('finds the numbers 3', () => {
  const nums = [1]
  const expected: number[] = []

  expect(findDisappearedNumbers(nums)).toEqual(expected)
})
