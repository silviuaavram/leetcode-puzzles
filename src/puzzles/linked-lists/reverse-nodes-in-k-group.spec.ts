import {toLinkedList} from 'utils'
import {reverseKGroup} from './reverse-nodes-in-k-group'

test('should reverse the list 2 at a time 1', () => {
  const head = toLinkedList([1, 2, 3, 4, 5])
  const k = 2
  const expected = toLinkedList([2, 1, 4, 3, 5])

  expect(reverseKGroup(head, k)).toEqual(expected)
})

test('should reverse the list 2 at a time 2', () => {
  const head = toLinkedList([1, 2])
  const k = 2
  const expected = toLinkedList([2, 1])

  expect(reverseKGroup(head, k)).toEqual(expected)
})

test('should reverse the list 2 at a time 3', () => {
  const head = toLinkedList([1, 2, 3, 4, 5, 6])
  const k = 2
  const expected = toLinkedList([2, 1, 4, 3, 6, 5])

  expect(reverseKGroup(head, k)).toEqual(expected)
})

test('should reverse the list 3 at a time 1', () => {
  const head = toLinkedList([1, 2, 3, 4, 5])
  const k = 3
  const expected = toLinkedList([3, 2, 1, 4, 5])

  expect(reverseKGroup(head, k)).toEqual(expected)
})

test('should reverse the list 3 at a time 2', () => {
  const head = toLinkedList([1, 2, 3, 4, 5, 6, 7])
  const k = 3
  const expected = toLinkedList([3, 2, 1, 6, 5, 4, 7])

  expect(reverseKGroup(head, k)).toEqual(expected)
})

test('should reverse the list 3 at a time 3', () => {
  const head = toLinkedList([8, 9, 8, 8, 5, 7, 7, 0, 3, 5])
  const k = 3
  const expected = toLinkedList([8, 9, 8, 7, 5, 8, 3, 0, 7, 5])

  expect(reverseKGroup(head, k)).toEqual(expected)
})

test('should reverse the list 1 at a time', () => {
  const head = toLinkedList([1, 2, 3, 4, 5])
  const k = 1

  expect(reverseKGroup(head, k)).toEqual(head)
})

test('should keep a list of 1 element the same', () => {
  const head = toLinkedList([1])
  const k = 129

  expect(reverseKGroup(head, k)).toEqual(head)
})
