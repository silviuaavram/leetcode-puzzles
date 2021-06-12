import {toTree} from 'utils'
import {hasPathSum} from './path-sum'

test('returns true if there is a sum 1', () => {
  const root = toTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
  const targetSum = 22

  expect(hasPathSum(root, targetSum)).toEqual(true)
})

test('returns false if there is not a sum 1', () => {
  const root = toTree([1, 2, 3])
  const targetSum = 5

  expect(hasPathSum(root, targetSum)).toEqual(false)
})

test('returns false if there is not a sum 2', () => {
  const root = toTree([1, 2])
  const targetSum = 0

  expect(hasPathSum(root, targetSum)).toEqual(false)
})

test('returns false if there is not a sum 3', () => {
  const root = toTree([])
  const targetSum = 4

  expect(hasPathSum(root, targetSum)).toEqual(false)
})

test('returns true if there is not a sum 2', () => {
  const root = toTree([])
  const targetSum = 0

  expect(hasPathSum(root, targetSum)).toEqual(false)
})

test('returns false if there is not a sum 4', () => {
  const root = toTree([0, -200, 200, -250, -150, 150, 250])
  const targetSum = 50

  expect(hasPathSum(root, targetSum)).toEqual(false)
})

test.only('returns true if there is a sum 3', () => {
  const root = toTree([1, -2, -3, 1, 3, -2, null, -1])
  const targetSum = -4

  expect(hasPathSum(root, targetSum)).toEqual(true)
})
