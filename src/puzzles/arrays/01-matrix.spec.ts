import {updateMatrix} from './01-matrix'

test('gets the correct distances 1', () => {
  const mat = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
  const expected = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]

  expect(updateMatrix(mat)).toEqual(expected)
})

test('gets the correct distances 2', () => {
  const mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]
  const expected = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 2, 1],
  ]

  expect(updateMatrix(mat)).toEqual(expected)
})

test('gets the correct distances 3', () => {
  const mat = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]
  const expected = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
  ]

  expect(updateMatrix(mat)).toEqual(expected)
})

test('gets the correct distances 4', () => {
  const mat = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 0],
  ]
  const expected = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 2],
    [3, 2, 1],
    [2, 1, 0],
  ]

  expect(updateMatrix(mat)).toEqual(expected)
})
