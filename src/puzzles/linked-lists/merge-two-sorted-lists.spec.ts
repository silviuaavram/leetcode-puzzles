import {mergeTwoLists} from './merge-two-sorted-lists'
import {toLinkedList} from 'utils'

test('should merge two lists', () => {
  const l1 = toLinkedList([1, 2, 4])
  const l2 = toLinkedList([1, 3, 4])
  const expected = toLinkedList([1, 1, 2, 3, 4, 4])

  expect(mergeTwoLists(l1, l2)).toEqual(expected)
})

test('should merge one lists with one empty', () => {
  const l1 = toLinkedList([])
  const l2 = toLinkedList([1])
  const expected = toLinkedList([1])

  expect(mergeTwoLists(l1, l2)).toEqual(expected)
})

test('should merge two empty lists', () => {
  const l1 = toLinkedList([])
  const l2 = toLinkedList([])
  const expected = toLinkedList([])

  expect(mergeTwoLists(l1, l2)).toEqual(expected)
})
