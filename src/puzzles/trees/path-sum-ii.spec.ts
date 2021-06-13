import {toTree} from 'utils'
import {pathSum} from './path-sum-ii'

test('returns the correct paths 1', () => {
  const root = toTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
  const targetSum = 22

  expect(pathSum(root, targetSum)).toEqual([
    [5, 4, 11, 2],
    [5, 8, 4, 5],
  ])
})

test('returns the correct paths 2', () => {
  const root = toTree([1, 2, 3])
  const targetSum = 5

  expect(pathSum(root, targetSum)).toEqual([])
})

test('returns the correct paths 3', () => {
  const root = toTree([1, 2])
  const targetSum = 0

  expect(pathSum(root, targetSum)).toEqual([])
})

test('returns the correct paths 4', () => {
  const root = toTree([])
  const targetSum = 0

  expect(pathSum(root, targetSum)).toEqual([])
})

test('returns the correct paths 1', () => {
  const root = toTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
  const targetSum = 26

  expect(pathSum(root, targetSum)).toEqual([[5, 8, 13]])
})
