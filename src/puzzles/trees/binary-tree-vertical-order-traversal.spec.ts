import {toTree} from 'utils'
import {verticalOrder} from './binary-tree-vertical-order-traversal'

test('returns the nodes in vertical order 1', () => {
  const root = toTree([3, 9, 20, null, null, 15, 7])
  const expected = [[9], [3, 15], [20], [7]]

  expect(verticalOrder(root)).toEqual(expected)
})

test('returns the nodes in vertical order 2', () => {
  const root = toTree([3, 9, 8, 4, 0, 1, 7])
  const expected = [[4], [9], [3, 0, 1], [8], [7]]

  expect(verticalOrder(root)).toEqual(expected)
})

test('returns the nodes in vertical order 3', () => {
  const root = toTree([3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5])
  const expected = [[4], [9, 5], [3, 0, 1], [8, 2], [7]]

  expect(verticalOrder(root)).toEqual(expected)
})

test('returns the nodes in vertical order 4', () => {
  const root = toTree([])
  const expected: number[] = []

  expect(verticalOrder(root)).toEqual(expected)
})
