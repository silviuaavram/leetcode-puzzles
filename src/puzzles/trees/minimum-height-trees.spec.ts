import {findMinHeightTrees} from './minimum-height-trees'

test('returns the roots for mhts 1', () => {
  const n = 4
  const edges = [
    [1, 0],
    [1, 2],
    [1, 3],
  ]
  const expected = [1]

  expect(findMinHeightTrees(n, edges)).toEqual(expected)
})

test('returns the roots for mhts 2', () => {
  const n = 6
  const edges = [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ]
  const expected = [3, 4]

  expect(findMinHeightTrees(n, edges)).toEqual(expected)
})

test('returns the roots for mhts 3', () => {
  const n = 1
  const edges: number[][] = []
  const expected = [0]

  expect(findMinHeightTrees(n, edges)).toEqual(expected)
})

test('returns the roots for mhts 4', () => {
  const n = 2
  const edges = [[0, 1]]
  const expected = [0, 1]

  expect(findMinHeightTrees(n, edges)).toEqual(expected)
})

test('returns the roots for mhts 5', () => {
  const n = 4
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
  ]
  const expected = [1, 2]

  expect(findMinHeightTrees(n, edges)).toEqual(expected)
})

test('returns the roots for mhts 6', () => {
  const n = 5
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ]
  const expected = [2]

  expect(findMinHeightTrees(n, edges)).toEqual(expected)
})

test('returns the roots for mhts 7', () => {
  const n = 6
  const edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [3, 4],
    [4, 5],
  ]
  const expected = [3]

  expect(findMinHeightTrees(n, edges)).toEqual(expected)
})

test('returns the roots for mhts 8', () => {
  const n = 8
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [4, 5],
    [4, 6],
    [6, 7],
  ]
  const expected = [0]

  expect(findMinHeightTrees(n, edges)).toEqual(expected)
})
