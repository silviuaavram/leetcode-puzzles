import {TicTacToe} from './design-tic-tac-toe'

// X   O
// O O
// X X X
test('the game works as expected 1', () => {
  const moves = [
    [0, 0, 1],
    [0, 2, 2],
    [2, 2, 1],
    [1, 1, 2],
    [2, 0, 1],
    [1, 0, 2],
    [2, 1, 1],
  ]
  const game = new TicTacToe(3)

  for (let index = 0; index < moves.length; index++) {
    const move = moves[index]

    expect(game.move(move[0], move[1], move[2])).toEqual(
      index === moves.length - 1 ? 1 : 0,
    )
  }
})

// X 0 X
// 0 0 X
// X X 0
test('the game works as expected 2', () => {
  const moves = [
    [0, 0, 1],
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 1],
    [1, 1, 2],
    [1, 2, 1],
    [2, 2, 2],
    [2, 0, 1],
  ]
  const game = new TicTacToe(3)

  for (let index = 0; index < moves.length; index++) {
    const move = moves[index]

    expect(game.move(move[0], move[1], move[2])).toEqual(0)
  }
})
