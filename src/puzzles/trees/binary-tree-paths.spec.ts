import {toTree} from 'utils'
import {binaryTreePaths} from './binary-tree-paths'

test('returns the paths 1', () => {
  const root = toTree([1, 2, 3, null, 5])
  const expected = ['1->2->5', '1->3']

  expect(binaryTreePaths(root)).toEqual(expected)
})

test('returns the paths 2', () => {
  const root = toTree([1])
  const expected = ['1']

  expect(binaryTreePaths(root)).toEqual(expected)
})

test('returns the paths 3', () => {
  const root = toTree([1, 2, 3])
  const expected = ['1->2', '1->3']

  expect(binaryTreePaths(root)).toEqual(expected)
})

test('returns the paths 4', () => {
  const root = toTree([1, 2, null, 3, null, 4, null])
  const expected = ['1->2->3->4']

  expect(binaryTreePaths(root)).toEqual(expected)
})
