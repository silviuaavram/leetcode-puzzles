import {solve} from './surrounded-regions'

test('captures regions 1', () => {
  const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ]
  const expected = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
  ]

  solve(board)

  expect(board).toEqual(expected)
})

test('captures regions 2', () => {
  const board = [['X']]
  const expected = [['X']]

  solve(board)

  expect(board).toEqual(expected)
})

test('captures regions 3', () => {
  const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ]
  const expected = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ]

  solve(board)

  expect(board).toEqual(expected)
})

test('captures regions 4', () => {
  const board = [
    ['X', 'X', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ]
  const expected = [
    ['X', 'X', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ]

  solve(board)

  expect(board).toEqual(expected)
})

test('captures regions 5', () => {
  const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
  ]
  const expected = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
  ]

  solve(board)

  expect(board).toEqual(expected)
})
