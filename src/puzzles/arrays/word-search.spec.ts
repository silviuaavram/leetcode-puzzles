import {exist} from './word-search'

test('checks if words exists 1', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'ABCCED'

  expect(exist(board, word)).toEqual(true)
})

test('checks if words exists 2', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'SEE'

  expect(exist(board, word)).toEqual(true)
})

test('checks if words exists 3', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'ABCB'

  expect(exist(board, word)).toEqual(false)
})

test('checks if words exists 4', () => {
  const board = [
    ['C', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D'],
  ]
  const word = 'AAB'

  expect(exist(board, word)).toEqual(true)
})
