import {toTree, TreeNode} from 'utils'
import {delNodes} from './delete-nodes-and-return-forest'

test('deletes the nodes and returns the forest 1', () => {
  const root = toTree([1, 2, 3, 4, 5, 6, 7])
  const to_delete = [3, 5]
  const expected = [toTree([1, 2, null, 4]), toTree([6]), toTree([7])]

  expect(delNodes(root, to_delete)).toEqual(expected)
})

test('deletes the nodes and returns the forest 2', () => {
  const root = toTree([1, 2, 4, null, 3])
  const to_delete = [3]
  const expected = [toTree([1, 2, 4])]

  expect(delNodes(root, to_delete)).toEqual(expected)
})

test('deletes the nodes and returns the forest 3', () => {
  const root = toTree([1, 2, 3, 4, 5, 6, 7])
  const to_delete = [1]
  const expected = [toTree([2, 4, 5]), toTree([3, 6, 7])]

  expect(delNodes(root, to_delete)).toEqual(expected)
})

test('deletes the nodes and returns the forest 4', () => {
  const root = toTree([1])
  const to_delete = [1]
  const expected: TreeNode[] = []

  expect(delNodes(root, to_delete)).toEqual(expected)
})

test('deletes the nodes and returns the forest 5', () => {
  const root = toTree([1, 2])
  const to_delete = [1]
  const expected: TreeNode[] = [toTree([2])]

  expect(delNodes(root, to_delete)).toEqual(expected)
})

test('deletes the nodes and returns the forest 6', () => {
  const root = toTree([1, 2, 3, 4, 5, 6, 7])
  const to_delete = [1, 3]
  const expected = [toTree([2, 4, 5]), toTree([6]), toTree([7])]

  expect(delNodes(root, to_delete)).toEqual(expected)
})
