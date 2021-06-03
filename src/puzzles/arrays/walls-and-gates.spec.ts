import {wallsAndGates} from './/walls-and-gates'

test('fills the distances correctly 1', () => {
  const rooms = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ]
  const expected = [
    [3, -1, 0, 1],
    [2, 2, 1, -1],
    [1, -1, 2, -1],
    [0, -1, 3, 4],
  ]

  wallsAndGates(rooms)

  expect(rooms).toEqual(expected)
})

test('fills the distances correctly 2', () => {
  const rooms = [[-1]]
  const expected = [[-1]]

  wallsAndGates(rooms)

  expect(rooms).toEqual(expected)
})

test('fills the distances correctly 6', () => {
  const rooms = [[0, 0]]
  const expected = [[0, 0]]

  wallsAndGates(rooms)

  expect(rooms).toEqual(expected)
})

test('fills the distances correctly 3', () => {
  const rooms = [[2147483647]]
  const expected = [[2147483647]]

  wallsAndGates(rooms)

  expect(rooms).toEqual(expected)
})

test('fills the distances correctly 4', () => {
  const rooms = [[0]]
  const expected = [[0]]

  wallsAndGates(rooms)

  expect(rooms).toEqual(expected)
})

test('fills the distances correctly 5', () => {
  const rooms = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, -1, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ]
  const expected = [
    [3, -1, 0, 1],
    [2, -1, 1, -1],
    [1, -1, 2, -1],
    [0, -1, 3, 4],
  ]

  wallsAndGates(rooms)

  expect(rooms).toEqual(expected)
})
