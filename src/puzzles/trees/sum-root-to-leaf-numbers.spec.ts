import {toTree} from 'utils'
import {sumNumbers} from './sum-root-to-leaf-numbers'

test('returns the sum correctly 1', () => {
  const root = toTree([1, 2, 3])
  const sum = 25

  expect(sumNumbers(root)).toEqual(sum)
})

test('returns the sum correctly 2', () => {
  const root = toTree([4, 9, 0, 5, 1])
  const sum = 1026

  expect(sumNumbers(root)).toEqual(sum)
})

test('returns the sum correctly 3', () => {
  const root = toTree([1, null, 2, 3, 4])
  const sum = 247

  expect(sumNumbers(root)).toEqual(sum)
})
