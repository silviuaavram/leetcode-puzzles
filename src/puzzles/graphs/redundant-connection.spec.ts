import {findRedundantConnection} from './redundant-connection'

test('removes one edge 1', () => {
  const edges = [
    [1, 2],
    [1, 3],
    [2, 3],
  ]

  expect(findRedundantConnection(edges)).toEqual([2, 3])
})

test('removes one edge 2', () => {
  const edges = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
  ]

  expect(findRedundantConnection(edges)).toEqual([1, 4])
})

test('removes one edge 3', () => {
  const edges = [
    [2, 7],
    [7, 8],
    [3, 6],
    [2, 5],
    [6, 8],
    [4, 8],
    [2, 8],
    [1, 8],
    [7, 10],
    [3, 9],
  ]

  expect(findRedundantConnection(edges)).toEqual([2, 8])
})
