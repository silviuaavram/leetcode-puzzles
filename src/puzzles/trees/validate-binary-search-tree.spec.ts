import {toBinaryTree} from 'utils'
import {isValidBST} from './validate-binary-search-tree'

test('should be a valid bst', () => {
  const tree = toBinaryTree([2, 1, 3])

  expect(isValidBST(tree)).toBe(true)
})

test('should be an invalid bst', () => {
  const tree = toBinaryTree([5, 1, 4, null, null, 3, 6])

  expect(isValidBST(tree)).toBe(false)
})

test('empty tree should be an invalid bst', () => {
  expect(isValidBST(null)).toBe(false)
})

test('tree with one node should be a valid bst', () => {
  const tree = toBinaryTree([5])

  expect(isValidBST(tree)).toBe(true)
})

test('tree should not be valid if equal values', () => {
  const tree = toBinaryTree([1, 1])

  expect(isValidBST(tree)).toBe(false)
})

test('tree should not be valid if child is not bst', () => {
  const tree = toBinaryTree([5, 4, 6, null, null, 3, 7])

  expect(isValidBST(tree)).toBe(false)
})

test('tree should be a valid bst', () => {
  const tree = toBinaryTree([3, 1, 5, 0, 2, 4, 6])

  expect(isValidBST(tree)).toBe(true)
})
