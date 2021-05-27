import {toLinkedList} from 'utils'
import {reverse} from './reverse-operations'

test('should reverse correctly 1', () => {
  const input = toLinkedList([1, 2, 8, 9, 12, 16])

  expect(reverse(input)).toEqual(toLinkedList([1, 8, 2, 9, 16, 12]))
})

test('should reverse correctly 2', () => {
  const input = toLinkedList([1, 2, 8, 10, 12, 9, 12, 16, 17, 18])

  expect(reverse(input)).toEqual(toLinkedList([1, 12, 10, 8, 2, 9, 16, 12, 17, 18]))
})

test('should reverse correctly 3', () => {
  const input = toLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12])

  expect(reverse(input)).toEqual(toLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]))
})

