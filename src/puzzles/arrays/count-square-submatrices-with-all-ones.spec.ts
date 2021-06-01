import {countSquares} from './count-square-submatrices-with-all-ones'

test('counts 15 matrices', () => {
  const matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ]

  expect(countSquares(matrix)).toEqual(15)
})

test('counts 7 matrices', () => {
  const matrix = [
    [1,0,1],
    [1,1,0],
    [1,1,0]
  ]

  expect(countSquares(matrix)).toEqual(7)
})

