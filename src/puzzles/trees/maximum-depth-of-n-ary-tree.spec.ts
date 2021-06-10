import {toNAryTree} from 'utils'
import {maxDepth} from './maximum-depth-of-n-ary-tree'

test('returns the max depth of nary tree 1', () => {
  const root = toNAryTree([
    1,
    null,
    2,
    3,
    4,
    5,
    null,
    null,
    6,
    7,
    null,
    8,
    null,
    9,
    10,
    null,
    null,
    11,
    null,
    12,
    null,
    13,
    null,
    null,
    14,
  ])

  expect(maxDepth(root)).toEqual(5)
})

test('returns the max depth of nary tree 2', () => {
  const root = toNAryTree([1, null, 3, 2, 4, null, 5, 6])

  expect(maxDepth(root)).toEqual(3)
})

test('returns the max depth of nary tree 3', () => {
  const root = toNAryTree([1, null])

  expect(maxDepth(root)).toEqual(1)
})

test('returns the max depth of nary tree 4', () => {
  const root = toNAryTree([1, null, 2, 3, 4, 5])

  expect(maxDepth(root)).toEqual(2)
})

test('returns the max depth of nary tree 5', () => {
  expect(maxDepth(null)).toEqual(0)
})
