import {ListNode, toLinkedList} from 'utils'
import {addTwoNumbers} from './add-two-numbers'

test('should add two lists of same size', () => {
  const l1 = toLinkedList([2, 4, 3])
  const l2 = toLinkedList([5, 6, 4])
  const l3 = toLinkedList([7, 0, 8])

  expect(addTwoNumbers(l1, l2)).toEqual(l3)
})

test('should add two lists of different size 1', () => {
  const l1 = toLinkedList([1, 0, 2, 4])
  const l2 = toLinkedList([7, 6])
  const l3 = toLinkedList([8, 6, 2, 4])

  expect(addTwoNumbers(l1, l2)).toEqual(l3)
})

test('should add two lists of different size 2', () => {
  const l1 = toLinkedList([3, 2, 5])
  const l2 = toLinkedList([1, 4, 6, 0, 2, 5])
  const l3 = toLinkedList([4, 6,1, 1, 2, 5])

  expect(addTwoNumbers(l1, l2)).toEqual(l3)
})

test('should add two lists with last digit a carry over', () => {

  const l1 = toLinkedList([9,9,9,9,9,9,9])
  const l2 = toLinkedList([9,9,9,9])
  const l3 = toLinkedList([8,9,9,9,0,0,0,1])

  expect(addTwoNumbers(l1, l2)).toEqual(l3)
})

test('should add two lists of 0', () => {
  const l1 = toLinkedList([0])
  const l2 = toLinkedList([0])
  const l3 = toLinkedList([0])

  expect(addTwoNumbers(l1, l2)).toEqual(l3)
})

test('should add one list to null 1', () => {
  const l1 = toLinkedList([1, 2])
  const l2: ListNode = null

  expect(addTwoNumbers(l1, l2)).toEqual(l1)
})

test('should add one list to null 2', () => {
  const l1: ListNode = null
  const l2 = toLinkedList([3, 2])

  expect(addTwoNumbers(l1, l2)).toEqual(l2)
})

test('should add two lists of 0', () => {
  expect(addTwoNumbers(null, null)).toEqual(null)
})
