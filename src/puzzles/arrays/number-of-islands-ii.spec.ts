import {numIslands2} from './number-of-islands-ii'

test('discovers islands 1', () => {
  const m = 3
  const n = 3
  const positions = [
    [0, 0],
    [0, 1],
    [1, 2],
    [2, 1],
  ]

  expect(numIslands2(m, n, positions)).toEqual([1, 1, 2, 3])
})

test('discovers islands 2', () => {
  const m = 1
  const n = 1
  const positions = [[0, 0]]

  expect(numIslands2(m, n, positions)).toEqual([1])
})

test('discovers islands 3', () => {
  const m = 3
  const n = 3
  const positions = [
    [0, 0],
    [0, 2],
    [2, 0],
    [2, 2],
    [1, 1],
    [1, 0],
    [1, 2],
  ]

  expect(numIslands2(m, n, positions)).toEqual([1, 2, 3, 4, 5, 3, 1])
})

test('discovers islands 4', () => {
  const m = 3
  const n = 3
  const positions = [
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 1],
    [1, 2],
    [1, 0],
  ]

  expect(numIslands2(m, n, positions)).toEqual([1, 2, 3, 3, 2, 1])
})

test('discovers islands 5', () => {
  const m = 3
  const n = 3
  const positions = [
    [0, 1],
    [1, 2],
    [2, 1],
    [1, 0],
    [0, 2],
    [0, 0],
    [1, 1],
  ]

  expect(numIslands2(m, n, positions)).toEqual([1, 2, 3, 4, 3, 2, 1])
})

test('discovers islands 6', () => {
  const m = 1
  const n = 2
  const positions = [
    [0, 1],
    [0,0]
  ]

  expect(numIslands2(m, n, positions)).toEqual([1, 1])
})
