import {toTree} from 'utils'
import {isCompleteTree} from './check-completeness-of-a-binary-tree'

test('check if the tree is complete 1', () => {
  const root = toTree([1, 2, 3, 4, 5, 6])

  expect(isCompleteTree(root)).toEqual(true)
})

test('check if the tree is complete 2', () => {
  const root = toTree([1, 2, 3, 4, 5, null, 7])

  expect(isCompleteTree(root)).toEqual(false)
})

test('check if the tree is complete 3', () => {
  const root = toTree([1])

  expect(isCompleteTree(root)).toEqual(true)
})

test('check if the tree is complete 4', () => {
  const root = toTree([1, 2, null, 3])

  expect(isCompleteTree(root)).toEqual(false)
})
