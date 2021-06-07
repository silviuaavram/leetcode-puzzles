import {countComponents} from './number-of-connected-components-in-an-undirected-graph'

test('should return 2 components 1', () => {
  const n = 5
  const edges = [
    [0, 1],
    [1, 2],
    [3, 4],
  ]

  expect(countComponents(n, edges)).toEqual(2)
})

test('should return 1 component 1', () => {
  const n = 5
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ]

  expect(countComponents(n, edges)).toEqual(1)
})

test('should return 1 component 2', () => {
  const n = 1
  const edges: number[][] = []

  expect(countComponents(n, edges)).toEqual(1)
})

test('should return 2 components 2', () => {
  const n = 2
  const edges: number[][] = []

  expect(countComponents(n, edges)).toEqual(2)
})

test('should return 1 component 3', () => {
  const n = 2
  const edges: number[][] = [[0, 1]]

  expect(countComponents(n, edges)).toEqual(1)
})

test('should return 4 component', () => {
  const n = 8
  const edges: number[][] = [
    [0, 1],
    [3, 2],
    [4, 5],
    [7, 6],
  ]

  expect(countComponents(n, edges)).toEqual(4)
})
