import {maximalRectangle} from './maximal-rectangle'

test('returns 6 for the maximum rectangle', () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ]

  expect(maximalRectangle(matrix)).toEqual(6)
})

test('returns 0 for the maximum rectangle in an empty matrix', () => {
  const matrix: string[][] = []

  expect(maximalRectangle(matrix)).toEqual(0)
})

test('returns 0 for the maximum rectangle', () => {
  const matrix: string[][] = [['0']]

  expect(maximalRectangle(matrix)).toEqual(0)
})

test('returns 1 for the maximum rectangle', () => {
  const matrix: string[][] = [['1']]

  expect(maximalRectangle(matrix)).toEqual(1)
})

test('returns 4 for the maximum rectangle', () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '1', '1', '1', '0'],
    ['0', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '0'],
  ]

  expect(maximalRectangle(matrix)).toEqual(9)
})
