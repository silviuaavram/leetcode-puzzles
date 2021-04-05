import {toTree} from 'utils'
import {flatten} from './flatten-binary-tree-to-linked-list'

test('should flatten binary tree 1', () => {
  const tree = toTree([1, 2, 5, 3, 4, null, 6])

  flatten(tree)

  expect(tree).toEqual(
    toTree([1, null, 2, null, 3, null, 4, null, 5, null, 6]),
  )
})

test('should not flatten empty tree', () => {
  const tree = toTree([])

  flatten(tree)

  expect(tree).toEqual(toTree([]))
})

test('should flatten one node binary tree', () => {
  const tree = toTree([0])

  flatten(tree)

  expect(tree).toEqual(toTree([0]))
})
