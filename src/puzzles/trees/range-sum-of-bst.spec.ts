import {toTree} from 'utils'
import {rangeSumBST} from './range-sum-of-bst'

test('returns the correct sum 1', () => {
  const root = toTree([10, 5, 15, 3, 7, null, 18])
  const low = 7
  const high = 15
  const expected = 32

  expect(rangeSumBST(root, low, high)).toEqual(expected)
})

test('returns the correct sum 2', () => {
  const root = toTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6])
  const low = 6
  const high = 10
  const expected = 23

  expect(rangeSumBST(root, low, high)).toEqual(expected)
})

test('returns the correct sum 3', () => {
  const root = toTree([10])
  const low = 6
  const high = 10
  const expected = 10

  expect(rangeSumBST(root, low, high)).toEqual(expected)
})

test('returns the correct sum 4', () => {
  const root = toTree([])
  const low = 6
  const high = 10
  const expected = 0

  expect(rangeSumBST(root, low, high)).toEqual(expected)
})

test('returns the correct sum 5', () => {
  const root = toTree([1, 2, 3])
  const low = 0
  const high = 1
  const expected = 1

  expect(rangeSumBST(root, low, high)).toEqual(expected)
})
