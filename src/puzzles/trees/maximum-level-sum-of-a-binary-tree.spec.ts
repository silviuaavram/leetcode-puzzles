import {toTree} from 'utils'
import {maxLevelSum} from './maximum-level-sum-of-a-binary-tree'

test('calculates the max level sum of tree 1', () => {
  const root = toTree([1, 7, 0, 7, -8, null, null])

  expect(maxLevelSum(root)).toEqual(2)
})

test('calculates the max level sum of tree 2', () => {
  const root = toTree([
    989,
    null,
    10250,
    98693,
    -89388,
    null,
    null,
    null,
    -32127,
  ])

  expect(maxLevelSum(root)).toEqual(2)
})

test('calculates the max level sum of tree 3', () => {
  const root = toTree([1, 3, 5, null, null, 9, null, 6, 6])

  expect(maxLevelSum(root)).toEqual(4)
})

test('calculates the max level sum of tree 4', () => {
  const root = toTree([-100, -200, -300, -20, -5, -10, null])

  expect(maxLevelSum(root)).toEqual(3)
})
