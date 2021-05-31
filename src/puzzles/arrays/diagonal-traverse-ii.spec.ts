import {findDiagonalOrder} from './diagonal-traverse-ii'

test('adds elements in correct diagonal order 1', () => {
  const nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const expected = [1, 4, 2, 7, 5, 3, 8, 6, 9]

  expect(findDiagonalOrder(nums)).toEqual(expected)
})

test('adds elements in correct diagonal order 2', () => {
  const nums = [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]]
  const expected = [1, 6, 2, 8, 7, 3, 9, 4, 12, 10, 5, 13, 11, 14, 15, 16]

  expect(findDiagonalOrder(nums)).toEqual(expected)
})

test('adds elements in correct diagonal order 3', () => {
  const nums = [[1, 2, 3], [4], [5, 6, 7], [8], [9, 10, 11]]
  const expected = [1, 4, 2, 5, 3, 8, 6, 9, 7, 10, 11]

  expect(findDiagonalOrder(nums)).toEqual(expected)
})

test('adds elements in correct diagonal order 4', () => {
  const nums = [[1, 2, 3, 4, 5, 6]]
  const expected = [1, 2, 3, 4, 5, 6]

  expect(findDiagonalOrder(nums)).toEqual(expected)
})

test('adds elements in correct diagonal order 5', () => {
  const nums = [[1], [2], [3], [4], [5], [6]]
  const expected = [1, 2, 3, 4, 5, 6]

  expect(findDiagonalOrder(nums)).toEqual(expected)
})
