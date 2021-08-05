import {toTree} from 'utils'
import {isSubtree} from './subtree-of-another-tree'

test('check if it has a subtree 1', () => {
  const root = toTree([3, 4, 5, 1, 2])
  const subRoot = toTree([4, 1, 2])

  expect(isSubtree(root, subRoot)).toEqual(true)
})

test('check if it has a subtree 2', () => {
  const root = toTree([3, 4, 5, 1, 2, null, null, null, null, 0])
  const subRoot = toTree([4, 1, 2])

  expect(isSubtree(root, subRoot)).toEqual(false)
})

test('check if it has a subtree 3', () => {
  const root = toTree([3])
  const subRoot = toTree([3])

  expect(isSubtree(root, subRoot)).toEqual(true)
})

test('check if it has a subtree 4', () => {
  const root = toTree([3])
  const subRoot = toTree([3, 4])

  expect(isSubtree(root, subRoot)).toEqual(false)
})

