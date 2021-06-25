import {toTree} from 'utils'
import {deepestLeavesSum} from './deepest-leaves-sum'

test('returns the sum correctly 1', () => {
  const root = toTree([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8])

  expect(deepestLeavesSum(root)).toEqual(15)
})

test('returns the sum correctly 2', () => {
  const root = toTree([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5])

  expect(deepestLeavesSum(root)).toEqual(19)
})

test('returns the sum correctly 3', () => {
  const root = toTree([1])

  expect(deepestLeavesSum(root)).toEqual(1)
})

test('returns the sum correctly 4', () => {
  const root = toTree([1, null, 2, null, 3, null, 4])

  expect(deepestLeavesSum(root)).toEqual(4)
})

