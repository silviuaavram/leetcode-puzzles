import {shortestPathBinaryMatrix} from './shortest-path-in-binary-matrix'

test('returns the shortest clear path 1', () => {
  const grid = [
    [0, 1],
    [1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(2)
})

test('returns the shortest clear path 2', () => {
  const grid = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(4)
})

test('returns the shortest clear path 3', () => {
  const grid = [
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(-1)
})

test('returns the shortest clear path 4', () => {
  const grid = [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ]

  expect(shortestPathBinaryMatrix(grid)).toEqual(-1)
})
