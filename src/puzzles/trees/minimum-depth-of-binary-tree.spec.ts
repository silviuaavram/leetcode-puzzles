import {toTree} from 'utils'
import {minDepth} from './minimum-depth-of-binary-tree'

test('calculates the correct min depth 1', () => {
  const root = toTree([3, 9, 20, null, null, 15, 7])

  expect(minDepth(root)).toEqual(2)
})

test('calculates the correct min depth 2', () => {
  const root = toTree([2, null, 3, null, 4, null, 5, null, 6])

  expect(minDepth(root)).toEqual(5)
})

test('calculates the correct min depth 3', () => {
  const root = toTree([2])

  expect(minDepth(root)).toEqual(1)
})

test('calculates the correct min depth 4', () => {
  const root = toTree([])

  expect(minDepth(root)).toEqual(0)
})
