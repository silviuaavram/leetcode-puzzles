import {
  BinaryMatrix,
  leftMostColumnWithOne,
} from './leftmost-column-with-at-least-a-one'

test('should return column 0', () => {
  const mat = [
    [0, 0],
    [1, 1],
  ]

  expect(leftMostColumnWithOne(new BinaryMatrix(mat))).toEqual(0)
})

test('should return column 1', () => {
  const mat = [
    [0, 0],
    [1, 1],
  ]

  expect(leftMostColumnWithOne(new BinaryMatrix(mat))).toEqual(0)
})

test('should return column 2', () => {
  const mat = [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ]

  expect(leftMostColumnWithOne(new BinaryMatrix(mat))).toEqual(2)
})

test('should return column 4', () => {
  const mat = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]

  expect(leftMostColumnWithOne(new BinaryMatrix(mat))).toEqual(4)
})

test('should return column -1', () => {
  const mat = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]

  expect(leftMostColumnWithOne(new BinaryMatrix(mat))).toEqual(-1)
})
