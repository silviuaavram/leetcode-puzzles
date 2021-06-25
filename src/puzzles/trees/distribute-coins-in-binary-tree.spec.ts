import {toTree} from 'utils'
import {distributeCoins} from './distribute-coins-in-binary-tree'

test('distributes the coins correctly 1', () => {
  const root = toTree([3, 0, 0])

  expect(distributeCoins(root)).toEqual(2)
})

test('distributes the coins correctly 2', () => {
  const root = toTree([0, 3, 0])

  expect(distributeCoins(root)).toEqual(3)
})

test('distributes the coins correctly 3', () => {
  const root = toTree([1, 0, 2])

  expect(distributeCoins(root)).toEqual(2)
})

test('distributes the coins correctly 4', () => {
  const root = toTree([1, 0, 0, null, 3])

  expect(distributeCoins(root)).toEqual(4)
})

test('distributes the coins correctly 5', () => {
  const root = toTree([0, null, 0, null, 0, null, 4])

  expect(distributeCoins(root)).toEqual(6)
})
