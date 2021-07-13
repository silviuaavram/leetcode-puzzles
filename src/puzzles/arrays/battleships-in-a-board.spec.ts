import {countBattleships} from './battleships-in-a-board'

test('counts the battleships 1', () => {
  const board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]

  expect(countBattleships(board)).toEqual(2)
})

test('counts the battleships 2', () => {
  const board = [["."]]

  expect(countBattleships(board)).toEqual(0)
})

test('counts the battleships 3', () => {
  const board = [["X",".",".","."],["X",".",".","X"],["X",".",".","X"], [".","X","X","."]]

  expect(countBattleships(board)).toEqual(3)
})

