import {generateMatrix} from './spiral-matrix-ii'

test('generates a correct matrix 1', () => {
  expect(generateMatrix(3)).toEqual([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
})

test('generates a correct matrix 2', () => {
  expect(generateMatrix(1)).toEqual([[1]])
})

test('generates a correct matrix 3', () => {
  expect(generateMatrix(2)).toEqual([
    [1, 2],
    [4, 3],
  ])
})

test('generates a correct matrix 4', () => {
  expect(generateMatrix(4)).toEqual([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
})

test('generates a correct matrix 5', () => {
  expect(generateMatrix(5)).toEqual([
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9],
  ])
})
