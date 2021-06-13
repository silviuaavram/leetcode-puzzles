import {toTree} from 'utils'
import {pathSum} from './path-sum-iii'

test('returns the correct paths 1', () => {
  const root = toTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1])
  const targetSum = 8

  expect(pathSum(root, targetSum)).toEqual(3)
})

test('returns the correct paths 2', () => {
  const root = toTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
  const targetSum = 22

  expect(pathSum(root, targetSum)).toEqual(3)
})

test('returns the correct paths 3', () => {
  const root = toTree([])
  const targetSum = 22

  expect(pathSum(root, targetSum)).toEqual(0)
})

test('returns the correct paths 4', () => {
  const root = toTree([1, 3, 3])
  const targetSum = 4

  expect(pathSum(root, targetSum)).toEqual(2)
})

test('returns the correct paths 5', () => {
  const root = toTree([1, 3, 3])
  const targetSum = 7

  expect(pathSum(root, targetSum)).toEqual(0)
})
