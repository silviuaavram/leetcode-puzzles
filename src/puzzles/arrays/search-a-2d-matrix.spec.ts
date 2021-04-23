import {searchMatrix} from './search-a-2d-matrix'

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
  [66, 72, 74, 90],
]

test('should find 3', () => {
  expect(searchMatrix(matrix, 3)).toBe(true)
})

test('should find 16', () => {
  expect(searchMatrix(matrix, 16)).toBe(true)
})

test('should find 60', () => {
  expect(searchMatrix(matrix, 60)).toBe(true)
})

test('should not find 21', () => {
  expect(searchMatrix(matrix, 21)).toBe(false)
})

test('should not find 100', () => {
  expect(searchMatrix(matrix, 21)).toBe(false)
})

test('should not find -21', () => {
  expect(searchMatrix(matrix, 21)).toBe(false)
})
