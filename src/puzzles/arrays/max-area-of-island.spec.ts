import {maxAreaOfIsland} from './max-area-of-island'

test('area is 6', () => {
  const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]

  expect(maxAreaOfIsland(grid)).toBe(6)
})

test('area is 0', () => {
  const grid = [[0, 0, 0, 0, 0, 0, 0, 0]]

  expect(maxAreaOfIsland(grid)).toBe(0)
})

test('area is 1', () => {
  const grid = [
    [1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
  ]

  expect(maxAreaOfIsland(grid)).toBe(1)
})

test('area is 3', () => {
  const grid = [
    [1, 1],
    [1, 0],
  ]

  expect(maxAreaOfIsland(grid)).toBe(3)
})

test('area is 4', () => {
  const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ]

  expect(maxAreaOfIsland(grid)).toBe(4)
})
