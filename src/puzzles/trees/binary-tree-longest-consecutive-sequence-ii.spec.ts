import {toTree} from 'utils'
import {longestConsecutive} from './binary-tree-longest-consecutive-sequence-ii'

test('returns the longest sequence 1', () => {
  const root = toTree([1, 2, 3])

  expect(longestConsecutive(root)).toEqual(2)
})

test('returns the longest sequence 2', () => {
  const root = toTree([2, 1, 3])

  expect(longestConsecutive(root)).toEqual(3)
})

test('returns the longest sequence 3', () => {
  const root = toTree([1])

  expect(longestConsecutive(root)).toEqual(1)
})

test('returns the longest sequence 4', () => {
  const root = toTree([5, 3, 6, 1, 2, 7, 8])

  expect(longestConsecutive(root)).toEqual(3)
})

test('returns the longest sequence 5', () => {
  const root = toTree([
    24,
    25,
    25,
    26,
    24,
    26,
    24,
    25,
    27,
    23,
    23,
    25,
    25,
    23,
    23,
    26,
    24,
    26,
    28,
    24,
    22,
    22,
    24,
    26,
    26,
    26,
    26,
    22,
    24,
    22,
    22,
    null,
    27,
    null,
    25,
    null,
    25,
    null,
    27,
    null,
    25,
    null,
    21,
    null,
    23,
    23,
    23,
    null,
    25,
    null,
    25,
    null,
    27,
    27,
    25,
    null,
    23,
    null,
    23,
    null,
    21,
    21,
    21,
  ])

  expect(longestConsecutive(root)).toEqual(8)
})

test('returns the longest sequence 6', () => {
  const root = toTree([
    1,
    2,
    null,
    3,
    null,
    4,
    null,
    5,
    null,
    6,
    4,
    7,
    null,
    3,
    null,
    8,
    null,
    2,
    null,
    null,
    null,
    1,
    null,
    0,
    null,
  ])

  expect(longestConsecutive(root)).toEqual(9)
})
