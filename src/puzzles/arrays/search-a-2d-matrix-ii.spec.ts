import {searchMatrix} from './search-a-2d-matrix-ii'

test('finds 5 in the matrix', () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ]
  const target = 5

  expect(searchMatrix(matrix, target)).toBe(true)
})

test('finds 12 in the matrix', () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
  ]
  const target = 12

  expect(searchMatrix(matrix, target)).toBe(true)
})

test('finds 3 in the matrix', () => {
  const matrix = [
    [1, 4],
    [2, 5],
    [3, 6],
  ]
  const target = 3

  expect(searchMatrix(matrix, target)).toBe(true)
})

test('does not find 20 in the matrix', () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ]
  const target = 20

  expect(searchMatrix(matrix, target)).toBe(false)
})

test('finds 3 in the matrix', () => {
  const matrix = [
    [1, 2, 7],
    [4, 3, 8],
    [6, 8, 9],
  ]
  const target = 3

  expect(searchMatrix(matrix, target)).toBe(true)
})
