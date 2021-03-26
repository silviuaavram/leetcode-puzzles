import {rotateRight} from './rotate-list'
import {toLinkedList} from 'utils'

test('should rotate list with 2 positions', () => {
  const l = toLinkedList([1, 2, 3, 4, 5])
  const expected = toLinkedList([3, 4, 5, 1, 2])
  const k = 3

  expect(rotateRight(l, k)).toEqual(expected)
})

test('should rotate list with 1 positions', () => {
  const l = toLinkedList([1, 2, 3, 4, 5])
  const expected = toLinkedList([5, 1, 2, 3, 4])
  const k = 1

  expect(rotateRight(l, k)).toEqual(expected)
})

test('should rotate list with 4 positions', () => {
  const l = toLinkedList([1, 2, 3])
  const expected = toLinkedList([3, 1, 2])
  const k = 4

  expect(rotateRight(l, k)).toEqual(expected)
})

test('should rotate list with 5 positions', () => {
  const l = toLinkedList([1])
  const k = 5

  expect(rotateRight(l, k)).toEqual(l)
})

test('should not rotate empty list', () => {
  const l = toLinkedList([])
  const k = 5

  expect(rotateRight(l, k)).toEqual(l)
})
