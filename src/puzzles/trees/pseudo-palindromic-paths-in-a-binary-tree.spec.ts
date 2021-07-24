import {toTree} from 'utils'
import {pseudoPalindromicPaths} from './pseudo-palindromic-paths-in-a-binary-tree'

test('counts the paths 1', () => {
  const root = toTree([2, 3, 1, 3, 1, null, 1])

  expect(pseudoPalindromicPaths(root)).toEqual(2)
})

test('counts the paths 2', () => {
  const root = toTree([2, 1, 1, 1, 3, null, null, null, null, null, 1])

  expect(pseudoPalindromicPaths(root)).toEqual(1)
})

test('counts the paths 3', () => {
  const root = toTree([9])

  expect(pseudoPalindromicPaths(root)).toEqual(1)
})

test('counts the paths 4', () => {
  const root = toTree([
    9,
    5,
    4,
    5,
    null,
    2,
    6,
    2,
    5,
    null,
    8,
    3,
    9,
    2,
    3,
    1,
    1,
    null,
    4,
    5,
    4,
    2,
    2,
    6,
    4,
    null,
    null,
    1,
    7,
    null,
    5,
    4,
    7,
    null,
    null,
    7,
    null,
    1,
    5,
    6,
    1,
    null,
    null,
    null,
    null,
    9,
    2,
    null,
    9,
    7,
    2,
    1,
    null,
    null,
    null,
    6,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    5,
    null,
    null,
    3,
    null,
    null,
    null,
    8,
    null,
    1,
    null,
    null,
    8,
    null,
    null,
    null,
    null,
    2,
    null,
    8,
    7,
  ])

  // console.log(root)
  expect(pseudoPalindromicPaths(root)).toEqual(1)
})
