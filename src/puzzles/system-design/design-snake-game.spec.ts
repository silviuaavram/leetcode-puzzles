import {SnakeGame} from './design-snake-game'

test('snake game works 1', () => {
  const game = new SnakeGame(3, 2, [
    [1, 2],
    [0, 1],
  ])

  expect(game.move('R')).toEqual(0)
  expect(game.move('D')).toEqual(0)
  expect(game.move('R')).toEqual(1)
  expect(game.move('U')).toEqual(1)
  expect(game.move('L')).toEqual(2)
  expect(game.move('U')).toEqual(-1)
})

test('snake game works 2', () => {
  const moves = ['D', 'D', 'R', 'U', 'U', 'L', 'D', 'R', 'R', 'U', 'L', 'D']
  const expected = [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]
  const food = [
    [2, 0],
    [0, 0],
    [0, 2],
    [2, 2],
  ]
  const height = 3
  const width = 3
  const game = new SnakeGame(width, height, food)

  for (let index = 0; index < moves.length; index++) {
    expect(game.move(moves[index])).toEqual(expected[index])
  }
})
