import {toBinaryTree} from 'utils'
import {lowestCommonAncestor} from './lowest-common-ancestor-of-a-binary-tree'

test('should be 3', () => {
  const tree = toBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
  const p = tree.left
  const q = tree.right

  expect(lowestCommonAncestor(tree, p, q)).toEqual(tree)
})

test('should be 5', () => {
  const tree = toBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
  const p = tree.left
  const q = tree.left.right.right

  expect(lowestCommonAncestor(tree, p, q)).toEqual(p)
})

test('should be 1', () => {
  const tree = toBinaryTree([1, 2])
  const p = tree
  const q = tree.left

  expect(lowestCommonAncestor(tree, p, q)).toEqual(p)
})

test('should be 1', () => {
  const tree = toBinaryTree([1, 2])
  const p = tree.left
  const q = tree

  expect(lowestCommonAncestor(tree, p, q)).toEqual(q)
})
