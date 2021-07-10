import {toTree} from 'utils'
import {findDuplicateSubtrees} from './find-duplicate-subtrees'

test('finds duplicate subtrees 1', () => {
  const root = toTree([1, 2, 3, 4, null, 2, 4, null, null, 4])

  expect(findDuplicateSubtrees(root)).toEqual(
    expect.arrayContaining([toTree([2, 4]), toTree([4])]),
  )
})

test('finds duplicate subtrees 2', () => {
  const root = toTree([2, 1, 1])

  expect(findDuplicateSubtrees(root)).toEqual(
    expect.arrayContaining([toTree([1])]),
  )
})

test('finds duplicate subtrees 3', () => {
  const root = toTree([2, 2, 2, 3, null, 3, null])

  expect(findDuplicateSubtrees(root)).toEqual(
    expect.arrayContaining([toTree([2, 3]), toTree([3])]),
  )
})

test('finds duplicate subtrees 4', () => {
  const root = toTree([2])

  expect(findDuplicateSubtrees(root)).toEqual(expect.arrayContaining([]))
})

test('finds duplicate subtrees 5', () => {
  const root = toTree([2, 2])

  expect(findDuplicateSubtrees(root)).toEqual(expect.arrayContaining([]))
})

test('finds duplicate subtrees 6', () => {
  const root = toTree([1, 2, 2, 3, 4, 3, 4])

  expect(findDuplicateSubtrees(root)).toEqual(
    expect.arrayContaining([toTree([2, 3, 4]), toTree([3]), toTree([4])]),
  )
})
