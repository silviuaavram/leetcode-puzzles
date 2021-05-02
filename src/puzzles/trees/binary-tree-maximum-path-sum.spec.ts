import {toTree} from 'utils'
import {maxPathSum} from './binary-tree-maximum-path-sum'

test('max path sum is 6', () => {
  const tree = toTree([1, 2, 3])

  expect(maxPathSum(tree)).toEqual(6)
})

test('max path sum is 42', () => {
  const tree = toTree([-10, 9, 20, null, null, 15, 7])

  expect(maxPathSum(tree)).toEqual(42)
})

test('max path sum is 42', () => {
  const tree = toTree([
    10,
    2,
    10,
    20,
    1,
    null,
    null,
    null,
    null,
    null,
    -25,
    3,
    4,
  ])

  expect(maxPathSum(tree)).toEqual(42)
})
