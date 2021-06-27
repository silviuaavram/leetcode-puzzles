import {
  flatten,
  MultilevelDoublyListNode,
} from './flatten-a-multilevel-doubly-linked-list'
import {toDoublyLinkedList} from 'utils'

test('flattens the lists 1', () => {
  const lists = [
    toDoublyLinkedList([1, 2, 3, 4, 5, 6]),
    toDoublyLinkedList([7, 8, 9, 10]),
    toDoublyLinkedList([11, 12]),
  ] as MultilevelDoublyListNode[]
  lists[0].next.next.child = lists[1]
  lists[1].next.child = lists[2]
  const head = lists[0]

  const expected = toDoublyLinkedList([
    1,
    2,
    3,
    7,
    8,
    11,
    12,
    9,
    10,
    4,
    5,
    6,
  ]) as MultilevelDoublyListNode
  expected.next.next.child = null
  expected.next.next.next.next.child = null

  expect(flatten(head)).toEqual(expected)
})

test('flattens the lists 2', () => {
  const lists = [
    toDoublyLinkedList([1, 2]),
    toDoublyLinkedList([3]),
  ] as MultilevelDoublyListNode[]
  lists[0].child = lists[1]
  const head = lists[0]

  const expected = toDoublyLinkedList([1, 3, 2]) as MultilevelDoublyListNode
  expected.child = null

  expect(flatten(head)).toEqual(expected)
})

test('flattens the lists 3', () => {
  const lists = [toDoublyLinkedList([1])] as MultilevelDoublyListNode[]
  const head = lists[0]

  const expected = toDoublyLinkedList([1]) as MultilevelDoublyListNode

  expect(flatten(head)).toEqual(expected)
})

test('flattens the lists 4', () => {
  const lists = [
    toDoublyLinkedList([1, 2, 3, 4, 5, 6]),
    toDoublyLinkedList([7, 8, 9, 10]),
    toDoublyLinkedList([11, 12]),
  ] as MultilevelDoublyListNode[]
  lists[0].next.next.child = lists[1]
  lists[0].next.next.next.child = lists[2]
  const head = lists[0]

  const expected = toDoublyLinkedList([
    1,
    2,
    3,
    7,
    8,
    9,
    10,
    4,
    11,
    12,
    5,
    6,
  ]) as MultilevelDoublyListNode
  expected.next.next.child = null
  expected.next.next.next.next.next.next.next.child = null

  expect(flatten(head)).toEqual(expected)
})

test('flattens the lists 5', () => {
  const lists = [
    toDoublyLinkedList([1, 2]),
    toDoublyLinkedList([3]),
  ] as MultilevelDoublyListNode[]
  lists[0].next.child = lists[1]
  const head = lists[0]

  const expected = toDoublyLinkedList([1, 2, 3]) as MultilevelDoublyListNode
  expected.next.child = null

  expect(flatten(head)).toEqual(expected)
})

test('flattens the lists 6', () => {
  const lists = [
    toDoublyLinkedList([1]),
    toDoublyLinkedList([3, 4]),
  ] as MultilevelDoublyListNode[]
  lists[0].child = lists[1]
  const head = lists[0]

  const expected = toDoublyLinkedList([1, 3, 4]) as MultilevelDoublyListNode
  expected.child = null

  expect(flatten(head)).toEqual(expected)
})

test('flattens the lists 7', () => {
  const lists = [
    toDoublyLinkedList([1]),
    toDoublyLinkedList([7]),
    toDoublyLinkedList([11]),
  ] as MultilevelDoublyListNode[]
  lists[0].child = lists[1]
  lists[1].child = lists[2]
  const head = lists[0]

  const expected = toDoublyLinkedList([1, 7, 11]) as MultilevelDoublyListNode
  expected.child = null
  expected.next.child = null

  expect(flatten(head)).toEqual(expected)
})
