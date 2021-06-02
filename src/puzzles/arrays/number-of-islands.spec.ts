import {numIslands} from './number-of-islands'

test('should discover 1 island 1', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]

  expect(numIslands(grid)).toEqual(1)
})

test('should discover 3 islands', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]

  expect(numIslands(grid)).toEqual(3)
})

test('should discover 2 islands', () => {
  const grid = [
    ['1', '1', '1', '0', '0'],
    ['1', '1', '1', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['1', '1', '1', '0', '1'],
  ]

  expect(numIslands(grid)).toEqual(2)
})

test('should discover 0 islands', () => {
  const grid = [
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]

  expect(numIslands(grid)).toEqual(0)
})

test('should discover a whole island', () => {
  const grid = [
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
  ]

  expect(numIslands(grid)).toEqual(1)
})

test('should discover 1 island 2', () => {
  const grid = [
    ['1', '1', '1'],
    ['0', '1', '0'],
    ['1', '1', '1'],
  ]

  expect(numIslands(grid)).toEqual(1)
})

test('should discover 1 island 3', () => {
  const grid = [
    ['1', '1', '1', '1', '1', '1'],
    ['0', '1', '0', '0', '1', '0'],
    ['1', '1', '0', '1', '1', '0'],
  ]

  expect(numIslands(grid)).toEqual(1)
})

test('should discover 1 island 4', () => {
  const grid = [
    ['1', '0', '1', '1', '1'],
    ['1', '0', '1', '0', '1'],
    ['1', '1', '1', '0', '1'],
  ]

  expect(numIslands(grid)).toEqual(1)
})
