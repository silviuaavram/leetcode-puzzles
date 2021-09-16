import {toLinkedList} from 'utils'
import {addTwoNumbers} from './add-two-numbers-ii'

test('adds two lists 1', () => {
  const l1 = toLinkedList([7, 2, 4, 3])
  const l2 = toLinkedList([5, 6, 4])
  const expected = toLinkedList([7, 8, 0, 7])

  expect(addTwoNumbers(l1, l2)).toEqual(expected)
})

test('adds two lists 2', () => {
  const l1 = toLinkedList([2, 4, 3])
  const l2 = toLinkedList([5, 6, 4])
  const expected = toLinkedList([8, 0, 7])

  expect(addTwoNumbers(l1, l2)).toEqual(expected)
})

test('adds two lists 3', () => {
  const l1 = toLinkedList([0])
  const l2 = toLinkedList([0])
  const expected = toLinkedList([0])

  expect(addTwoNumbers(l1, l2)).toEqual(expected)
})
