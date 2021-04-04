import {toLinkedList} from 'utils'
import {sortList} from './sort-list'

test('should sort the list 1', () => {
  const list = toLinkedList([4, 2, 1, 3])

  const sorted = sortList(list)

  expect(sorted).toEqual(toLinkedList([1, 2, 3, 4]))
})

test('should sort the list 2', () => {
  const list = toLinkedList([-1, 5, 3, 4, 0])

  const sorted = sortList(list)

  expect(sorted).toEqual(toLinkedList([-1, 0, 3, 4, 5]))
})

test('should sort the list 3', () => {
  const list = toLinkedList([])

  const sorted = sortList(list)

  expect(sorted).toEqual(toLinkedList([]))
})

test('should sort the list 4', () => {
  const list = toLinkedList([2, 1])

  const sorted = sortList(list)

  expect(sorted).toEqual(toLinkedList([1, 2]))
})

test('should sort the list 5', () => {
  const list = toLinkedList([4])

  const sorted = sortList(list)

  expect(sorted).toEqual(toLinkedList([4]))
})
