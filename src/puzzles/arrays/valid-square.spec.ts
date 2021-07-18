import {validSquare} from './valid-square'

test('checks if square is valid 1', () => {
  const p1 = [0, 0]
  const p2 = [1, 1]
  const p3 = [1, 0]
  const p4 = [0, 1]

  expect(validSquare(p1, p2, p3, p4)).toEqual(true)
})

test('checks if square is valid 2', () => {
  const p1 = [0, 0]
  const p2 = [1, 1]
  const p3 = [1, 0]
  const p4 = [0, 12]

  expect(validSquare(p1, p2, p3, p4)).toEqual(false)
})

test('checks if square is valid 3', () => {
  const p1 = [1, 0]
  const p2 = [-1, 0]
  const p3 = [0, 1]
  const p4 = [0, -1]

  expect(validSquare(p1, p2, p3, p4)).toEqual(true)
})

test('checks if square is valid 4', () => {
  const p1 = [1, 0]
  const p2 = [-1, 0]
  const p3 = [1, 0]
  const p4 = [-1, 0]

  expect(validSquare(p1, p2, p3, p4)).toEqual(false)
})

test('checks if square is valid 5', () => {
  const p1 = [0, 0]
  const p2 = [5, 0]
  const p3 = [5, 4]
  const p4 = [0, 4]

  expect(validSquare(p1, p2, p3, p4)).toEqual(false)
})

test('checks if square is valid 6', () => {
  const p1 = [1,1]
  const p2 = [5,3]
  const p3 = [3,5]
  const p4 = [7,7]

  expect(validSquare(p1, p2, p3, p4)).toEqual(false)
})

