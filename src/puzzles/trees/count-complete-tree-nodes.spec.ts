import {toTree} from 'utils'
import {countNodes} from './count-complete-tree-nodes'

test('counts the nodes 1', () => {
  const root = toTree([1, 2, 3, 4, 5, 6])

  expect(countNodes(root)).toEqual(6)
})

test('counts the nodes 2', () => {
  const root = toTree([1])

  expect(countNodes(root)).toEqual(1)
})

test('counts the nodes 3', () => {
  const root = toTree([])

  expect(countNodes(root)).toEqual(0)
})

test('counts the nodes 4', () => {
  const root = toTree([1, 2, 3, 4, 5, 6, 7, 8])

  expect(countNodes(root)).toEqual(8)
})

test('counts the nodes 5', () => {
  const root = toTree([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
  ])

  expect(countNodes(root)).toEqual(26)
})

test('counts the nodes 6', () => {
  const root = toTree([1, 2, 3])

  expect(countNodes(root)).toEqual(3)
})

test('counts the nodes 7', () => {
  const root = toTree([1, 2])

  expect(countNodes(root)).toEqual(2)
})
