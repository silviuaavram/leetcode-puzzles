import {findDuplicates} from './find-all-duplicates-in-an-array'

test('finds all duplicates in the array 1', () => {
  const nums = [4, 3, 2, 7, 8, 2, 3, 1]
  const expected = [2, 3]

  expect(findDuplicates(nums)).toEqual(expected)
})

test('finds all duplicates in the array 2', () => {
  const nums = [1, 1, 2]
  const expected = [1]

  expect(findDuplicates(nums)).toEqual(expected)
})

test('finds all duplicates in the array 3', () => {
  const nums = [1]
  const expected: number[] = []

  expect(findDuplicates(nums)).toEqual(expected)
})
