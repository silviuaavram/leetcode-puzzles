import {toTree} from 'utils'
import {findBottomLeftValue} from './find-bottom-left-tree-value'

test('finds the left most value 1', () => {
  const root = toTree([2, 1, 3])

  expect(findBottomLeftValue(root)).toEqual(1)
})

test('finds the left most value 2', () => {
  const root = toTree([1, 2, 3, 4, null, 5, 6, null, null, 7])

  expect(findBottomLeftValue(root)).toEqual(7)
})

test('finds the left most value 3', () => {
  const root = toTree([1])

  expect(findBottomLeftValue(root)).toEqual(1)
})

test('finds the left most value 4', () => {
  const root = toTree([1, null, 2, null, 3, null, 4, 5, null, null, 6])

  expect(findBottomLeftValue(root)).toEqual(6)
})

test('finds the left most value 5', () => {
  const root = toTree([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    null,
    null,
    null,
    null,
    8,
    9,
    10,
    11,
  ])

  expect(findBottomLeftValue(root)).toEqual(8)
})
