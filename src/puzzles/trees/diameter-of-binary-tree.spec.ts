import {toTree} from 'utils'
import {diameterOfBinaryTree} from './diameter-of-binary-tree'

test('diameter should be 3', () => {
  const root = toTree([1, 2, 3, 4, 5])

  expect(diameterOfBinaryTree(root)).toEqual(3)
})

test('diameter should be 1', () => {
  const root = toTree([1, 2])

  expect(diameterOfBinaryTree(root)).toEqual(1)
})

test('diameter should be 0 with no children', () => {
  const root = toTree([1])

  expect(diameterOfBinaryTree(root)).toEqual(0)
})

test('diameter should be 4', () => {
  const root = toTree([1, 2, null, 3, 4, 5, null, 6])

  expect(diameterOfBinaryTree(root)).toEqual(4)
})
