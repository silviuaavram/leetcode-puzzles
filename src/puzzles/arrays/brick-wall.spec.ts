import {leastBricks} from './brick-wall'

test('crosses the fewest bricks 1', () => {
  const wall = [
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1],
  ]

  expect(leastBricks(wall)).toEqual(2)
})

test('crosses the fewest bricks 2', () => {
  const wall = [[1], [1], [1]]

  expect(leastBricks(wall)).toEqual(3)
})
