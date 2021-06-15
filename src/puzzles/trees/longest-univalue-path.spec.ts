import {toTree} from 'utils'
import {longestUnivaluePath} from './longest-univalue-path'

/**
 *         5
 *      4     5
 *     1 1   5
 */
test('returns the correct longest path 1', () => {
  const root = toTree([5, 4, 5, 1, 1, 5])

  expect(longestUnivaluePath(root)).toEqual(2)
})

/**
 *         1
 *      4     5
 *     4 4   5
 */
test('returns the correct longest path 2', () => {
  const root = toTree([1, 4, 5, 4, 4, 5])

  expect(longestUnivaluePath(root)).toEqual(2)
})

test('returns the correct longest path 3', () => {
  const root = toTree([])

  expect(longestUnivaluePath(root)).toEqual(0)
})

test('returns the correct longest path 4', () => {
  const root = toTree([1, 4, 5, 4, 6, 5])

  expect(longestUnivaluePath(root)).toEqual(1)
})

/**
 *              1
 *          2       3
 *        4   5   6   7
 *       4 4
 *      4   4
 */

test('returns the correct longest path 5', () => {
  const root = toTree([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    4,
    4,
    null,
    null,
    null,
    null,
    null,
    null,
    4,
    null,
    null,
    4,
  ])

  expect(longestUnivaluePath(root)).toEqual(4)
})
/**
 *       1
 *     1    2
 *   1   1
 *  1   1
 */

test('returns the correct longest path 6', () => {
  const root = toTree([1, 1, 2, 1, 1, null, null, 1, null, 1, null])

  expect(longestUnivaluePath(root)).toEqual(4)
})
