import { toTree } from 'utils'
import {maximumAverageSubtree} from './maximum-average-subtree'

test('gets the max average subtree 1', () => {
  const root = toTree([5,6,1])

  expect(maximumAverageSubtree(root)).toEqual(6)
})

test('gets the max average subtree 2', () => {
  const root = toTree([0, null, 1])

  expect(maximumAverageSubtree(root)).toEqual(1)
})

test('gets the max average subtree 3', () => {
  const root = toTree([6, 5, 4, 3, 2, 1, 2])

  expect(maximumAverageSubtree(root)).toEqual(3.33333)
})

