import {toBinaryTree} from 'utils'
import {flatten} from './flatten-binary-tree-to-linked-list'

test('should flatten binary tree 1', () => {
  const tree = toBinaryTree([1, 2, 5, 3, 4, null, 6])

  flatten(tree)

  expect(tree).toEqual(
    toBinaryTree([1, null, 2, null, 3, null, 4, null, 5, null, 6]),
  )
})

test('should not flatten empty tree', () => {
  const tree = toBinaryTree([])

  flatten(tree)

  expect(tree).toEqual(toBinaryTree([]))
})

test('should flatten one node binary tree', () => {
  const tree = toBinaryTree([0])

  flatten(tree)

  expect(tree).toEqual(toBinaryTree([0]))
})
