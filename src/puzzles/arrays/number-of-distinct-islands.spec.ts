import {numDistinctIslands} from './number-of-distinct-islands'

test('returns 1 distinct island 1', () => {
  const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ]
  expect(numDistinctIslands(grid)).toBe(1)
})

test('returns 3 distinct islands', () => {
  const grid = [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
  ]
  expect(numDistinctIslands(grid)).toBe(3)
})

test('returns 1 distinct island 2', () => {
  const grid = [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
  ]
  expect(numDistinctIslands(grid)).toBe(1)
})

test('returns 1 distinct island 3', () => {
  const grid = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ]
  expect(numDistinctIslands(grid)).toBe(1)
})

test('returns 2 distinct islands', () => {
  const grid = [
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
  ]
  expect(numDistinctIslands(grid)).toBe(2)
})
