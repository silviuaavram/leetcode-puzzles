import {toBinaryTree, toLinkedList, TreeNode} from 'utils'

test('toLinkedList non-empty list', () => {
  expect(toLinkedList([1, 2, 3])).toEqual({
    val: 1,
    next: {val: 2, next: {val: 3, next: null}},
  })
})

test('toLinkedList empty list', () => {
  expect(toLinkedList([])).toEqual(null)
})

test('toBinaryTree non-empty list', () => {
  const nums = [3, 9, 20, null, null, 15, 7]
  const expected: TreeNode = {
    val: 3,
    left: {val: 9, left: null, right: null},
    right: {
      val: 20,
      left: {val: 15, left: null, right: null},
      right: {val: 7, left: null, right: null},
    },
  }

  expect(toBinaryTree(nums)).toEqual(expected)
})

test('toBinaryTree non-empty list with one element', () => {
  const nums = [1]
  const expected: TreeNode = {
    val: 1,
    left: null,
    right: null,
  }

  expect(toBinaryTree(nums)).toEqual(expected)
})

test('toBinaryTree empty list', () => {
  const nums: number[] = []

  expect(toBinaryTree(nums)).toBeNull()
})
