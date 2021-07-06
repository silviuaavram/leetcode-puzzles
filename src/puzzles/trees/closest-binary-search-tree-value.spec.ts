import {toTree} from 'utils'
import {closestValue} from './closest-binary-search-tree-value'

test('returns the closest value to target 1', () => {
  const root = toTree([4, 2, 5, 1, 3])
  const target = 3.714286

  expect(closestValue(root, target)).toEqual(4)
})

test('returns the closest value to target 2', () => {
  const root = toTree([1])
  const target = 3.714286

  expect(closestValue(root, target)).toEqual(1)
})

test('returns the closest value to target 3', () => {
  const root = toTree([7, 2, 5, 1, 3, 6, 9, 12, 0])
  const target = 3.714286

  expect(closestValue(root, target)).toEqual(3)
})

test('returns the closest value to target 4', () => {
  const root = toTree([10, 7, 13, 5, 9, 12, 14, 3, 6])
  const target = 1

  expect(closestValue(root, target)).toEqual(3)
})
