import {orangesRotting} from './rotting-oranges'

test('takes 4 minutes to rot all oranges', () => {
  const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]
  expect(orangesRotting(grid)).toEqual(4)
})

test('takes -1 minutes to rot all oranges', () => {
  const grid = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]
  expect(orangesRotting(grid)).toEqual(-1)
})

test('takes 0 minutes to rot all oranges', () => {
  const grid = [[0, 2]]
  expect(orangesRotting(grid)).toEqual(0)
})

test('takes 2 minutes to rot all oranges', () => {
  const grid = [
    [2, 1, 1],
    [1, 1, 2],
    [0, 1, 1],
  ]
  expect(orangesRotting(grid)).toEqual(2)
})

test('takes 3 minutes to rot all oranges', () => {
  const grid = [
    [2, 1, 1],
    [0, 0, 1],
    [2, 1, 1],
  ]
  expect(orangesRotting(grid)).toEqual(3)
})
