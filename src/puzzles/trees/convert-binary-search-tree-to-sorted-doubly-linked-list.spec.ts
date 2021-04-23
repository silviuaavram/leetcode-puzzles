import {convertTreeToList} from './convert-binary-search-tree-to-sorted-doubly-linked-list'
import {toDoublyLinkedList, toTree} from 'utils'

test('converts the tree to a doubly linked list', () => {
  const tree = toTree([100, 50, 200, 25, 75, 125, 350, null, 30, 60, null])
  const list = toDoublyLinkedList([25, 30, 50, 60, 75, 100, 125, 200, 350])

  expect(convertTreeToList(tree)).toEqual(list)
})

test('should not convert empty tree', () => {
  const tree = toTree([])

  expect(convertTreeToList(tree)).toEqual(toDoublyLinkedList([]))
})

test('should convert one node binary tree', () => {
  const tree = toTree([0])

  expect(convertTreeToList(tree)).toEqual(toDoublyLinkedList([0]))
})
