import {toTree} from 'utils'
import {closestKValues} from './closest-binary-search-tree-value-ii'

test('gets the values closest to target 1', () => {
  const root = toTree([4, 2, 5, 1, 3])
  const target = 3.714286
  const k = 2
  const expected = [4, 3]

  expect(closestKValues(root, target, k)).toEqual(expected)
})

test('gets the values closest to target 2', () => {
  const root = toTree([1])
  const target = 0
  const k = 1
  const expected = [1]

  expect(closestKValues(root, target, k)).toEqual(expected)
})

test('gets the values closest to target 1', () => {
  const root = toTree([1, 2, 3, 4, 5, 6, 7])
  const target = 4
  const k = 3
  const expected = [4, 5, 3]

  expect(closestKValues(root, target, k)).toEqual(expected)
})
