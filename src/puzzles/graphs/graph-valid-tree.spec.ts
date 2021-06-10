import {validTree} from './graph-valid-tree'

test('graph is valid tree 1', () => {
  const n = 5
  const edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ]

  expect(validTree(n, edges)).toEqual(true)
})

test('graph is valid tree 2', () => {
  const n = 6
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 5],
    [1, 4],
  ]

  expect(validTree(n, edges)).toEqual(true)
})

test('graph is valid tree 3', () => {
  const n = 6
  const edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 5],
    [0, 4],
  ]

  expect(validTree(n, edges)).toEqual(true)
})

test('graph is valid tree 4', () => {
  const n = 6
  const edges = [
    [5, 4],
    [2, 3],
    [0, 1],
    [4, 3],
    [0, 3],
  ]

  expect(validTree(n, edges)).toEqual(true)
})

test('graph is valid tree 5', () => {
  const n = 1
  const edges: number[][] = []

  expect(validTree(n, edges)).toEqual(true)
})

test('graph is valid tree 6', () => {
  const n = 6
  const edges = [
    [5, 4],
    [2, 3],
    [0, 1],
    [4, 3],
    [0, 3],
  ]

  expect(validTree(n, edges)).toEqual(true)
})

test('graph is invalid tree 1', () => {
  const n = 5
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ]

  expect(validTree(n, edges)).toEqual(false)
})

test('graph is invalid tree 2', () => {
  const n = 5
  const edges = [
    [0, 1],
    [1, 2],
    [1, 4],
  ]

  expect(validTree(n, edges)).toEqual(false)
})

test('graph is invalid tree 3', () => {
  const n = 4
  const edges = [
    [0, 1],
    [2, 3],
  ]

  expect(validTree(n, edges)).toEqual(false)
})

test('graph is invalid tree 4', () => {
  const n = 5
  const edges = [
    [2, 1],
    [4, 3],
  ]

  expect(validTree(n, edges)).toEqual(false)
})
