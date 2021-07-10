import {toTree} from 'utils'
import {longestConsecutive} from './binary-tree-longest-consecutive-sequence'

test('returns the longest sequence 1', () => {
  const root = toTree([1, null, 3, 2, 4, null, null, null, 5])

  expect(longestConsecutive(root)).toEqual(3)
})

test('returns the longest sequence 2', () => {
  const root = toTree([2, null, 3, 2, null, 1])

  expect(longestConsecutive(root)).toEqual(2)
})

test('returns the longest sequence 3', () => {
  const root = toTree([2])

  expect(longestConsecutive(root)).toEqual(1)
})

test('returns the longest sequence 4', () => {
  const root = toTree([1, 2, 3, 3, 4, 5, 6, 4, 6])

  expect(longestConsecutive(root)).toEqual(4)
})
