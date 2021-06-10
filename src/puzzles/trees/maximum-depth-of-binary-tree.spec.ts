import {toTree} from 'utils'
import {maxDepth} from './maximum-depth-of-binary-tree'

test('returns the correct max depth 1', () => {
  const root = toTree([3, 9, 20, null, null, 15, 7])

  expect(maxDepth(root)).toEqual(3)
})

test('returns the correct max depth 2', () => {
  const root = toTree([1, null, 2])

  expect(maxDepth(root)).toEqual(2)
})

test('returns the correct max depth 3', () => {
  const root = toTree([])

  expect(maxDepth(root)).toEqual(0)
})

test('returns the correct max depth 4', () => {
  const root = toTree([1, null, 2, null, 3, null, 4, 5, null, 6, null])

  expect(maxDepth(root)).toEqual(6)
})

test('returns the correct max depth 5', () => {
  const root = toTree([1, 2, 3, 4, null, null, 5, null, null, null, 6])

  expect(maxDepth(root)).toEqual(4)
})
