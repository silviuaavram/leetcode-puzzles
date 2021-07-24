import {toTree} from 'utils'
import {recoverTree} from './recover-binary-search-tree'

test('recovers a binary search tree 1', () => {
  const root = toTree([1, 3, null, null, 2])
  const expected = toTree([3, 1, null, null, 2])

  recoverTree(root)

  expect(root).toEqual(expected)
})

test('recovers a binary search tree 2', () => {
  const root = toTree([3, 1, 4, null, null, 2])
  const expected = toTree([2, 1, 4, null, null, 3])

  recoverTree(root)

  expect(root).toEqual(expected)
})
