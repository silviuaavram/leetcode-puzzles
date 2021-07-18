import {toTree} from 'utils'
import {balanceBST} from './balance-a-binary-search-tree'

test('balances a binary search tree 1', () => {
  const root = toTree([1, null, 2, null, 3, null, 4, null, null])
  const expected = toTree([3, 2, 4, 1])

  expect(balanceBST(root)).toEqual(expected)
})

test('balances a binary search tree 7', () => {
  const root = toTree([
    10,
    7,
    19,
    4,
    null,
    16,
    23,
    2,
    null,
    null,
    null,
    null,
    null,
    1,
  ])
  const expected = toTree([10, 4, 19, 2, 7, 16, 23, 1])

  expect(balanceBST(root)).toEqual(expected)
})
