import {toTree} from 'utils'
import {rob} from './house-robber-iii'

test('robs the houses to maximize gains 1', () => {
  const root = toTree([3, 2, 3, null, 3, null, 1])

  expect(rob(root)).toEqual(7)
})

test('robs the houses to maximize gains 2', () => {
  const root = toTree([3, 4, 5, 1, 3, null, 1])

  expect(rob(root)).toEqual(9)
})

test('robs the houses to maximize gains 3', () => {
  const root = toTree([3])

  expect(rob(root)).toEqual(3)
})

test('robs the houses to maximize gains 4', () => {
  const root = toTree([3, 5, 7])

  expect(rob(root)).toEqual(12)
})

test('robs the houses to maximize gains 5', () => {
  const root = toTree([3, null, 2])

  expect(rob(root)).toEqual(3)
})

test('robs the houses to maximize gains 6', () => {
  const root = toTree([5, 1, 1, 2, 2, 3, 3])

  expect(rob(root)).toEqual(15)
})

