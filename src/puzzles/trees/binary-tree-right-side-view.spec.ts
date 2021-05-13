import {toTree} from 'utils'
import {rightSideView} from './binary-tree-right-side-view'

test('should return the correct nodes 1', () => {
  const root = toTree([1, 2, 3, null, 5, null, 4])

  expect(rightSideView(root)).toEqual([1, 3, 4])
})

test('should return the correct nodes 2', () => {
  const root = toTree([1, null, 3])

  expect(rightSideView(root)).toEqual([1, 3])
})

test('should return the correct nodes 3', () => {
  expect(rightSideView(null)).toEqual([])
})

test('should return the correct nodes 4', () => {
  const root = toTree([1, 2, null, 3, null, 4, null, 5, 6])

  expect(rightSideView(root)).toEqual([1, 2, 3, 4, 6])
})
