import {toTree} from 'utils'
import {BSTIterator} from './binary-search-tree-iterator'

test('iterator works 1', () => {
  const tree = toTree([7, 3, 15, null, null, 9, 20])
  const iterator = new BSTIterator(tree)

  expect(iterator.next()).toBe(3)
  expect(iterator.next()).toBe(7)
  expect(iterator.hasNext()).toBe(true)
  expect(iterator.next()).toBe(9)
  expect(iterator.hasNext()).toBe(true)
  expect(iterator.next()).toBe(15)
  expect(iterator.hasNext()).toBe(true)
  expect(iterator.next()).toBe(20)
  expect(iterator.hasNext()).toBe(false)
})

test('iterator works 2', () => {
  const tree = toTree([1, 2, null, 3, null, 4, null, 5, null])
  const iterator = new BSTIterator(tree)

  expect(iterator.hasNext()).toBe(true)
  expect(iterator.next()).toBe(5)
  expect(iterator.next()).toBe(4)
  expect(iterator.next()).toBe(3)
  expect(iterator.hasNext()).toBe(true)
  expect(iterator.next()).toBe(2)
  expect(iterator.hasNext()).toBe(true)
  expect(iterator.next()).toBe(1)
  expect(iterator.hasNext()).toBe(false)
})

test('iterator works 3', () => {
  const tree = toTree([1, 2, 3, 4, 5, 6, 7, null, null, 8, null, null, 9, null, null,null, 10, 11, null])
  const iterator = new BSTIterator(tree)

  expect(iterator.next()).toBe(4)
  expect(iterator.next()).toBe(2)
  expect(iterator.next()).toBe(8)
  expect(iterator.next()).toBe(10)
  expect(iterator.next()).toBe(5)
  expect(iterator.next()).toBe(1)
  expect(iterator.next()).toBe(6)
  expect(iterator.next()).toBe(11)
  expect(iterator.next()).toBe(9)
  expect(iterator.next()).toBe(3)
  expect(iterator.next()).toBe(7)
  expect(iterator.hasNext()).toBe(false)
})

test('iterator works 4', () => {
  const tree = toTree([1])
  const iterator = new BSTIterator(tree)

  expect(iterator.hasNext()).toBe(true)
  expect(iterator.next()).toBe(1)
  expect(iterator.hasNext()).toBe(false)
})

test('iterator works 5', () => {
  const iterator = new BSTIterator(null)

  expect(iterator.hasNext()).toBe(false)
})

test('iterator works 6', () => {
  const tree = toTree([1, null, 2, null, 3, null, 4])
  const iterator = new BSTIterator(tree)

  expect(iterator.next()).toBe(1)
  expect(iterator.next()).toBe(2)
  expect(iterator.next()).toBe(3)
  expect(iterator.next()).toBe(4)
  expect(iterator.hasNext()).toBe(false)
})
