import {toTree, toLinkedList, TreeNode, toGraph, GraphNode, Heap} from 'utils'

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

  expect(toTree(nums)).toEqual(expected)
})

test('toBinaryTree non-empty list with one element', () => {
  const nums = [1]
  const expected: TreeNode = {
    val: 1,
    left: null,
    right: null,
  }

  expect(toTree(nums)).toEqual(expected)
})

test('toBinaryTree empty list', () => {
  const nums: number[] = []

  expect(toTree(nums)).toBeNull()
})

test('toGraph non-empty list', () => {
  const g = toGraph(
    [
      [0, 3],
      [0, 4],
      [0, 2],
      [1, 2],
      [2, 0],
      [3, 2],
      [4, 0],
      [4, 3],
      [4, 1],
    ],
    0,
  )
  const expectedNodes: GraphNode[] = [
    {val: 0, neighbors: []},
    {val: 1, neighbors: []},
    {val: 2, neighbors: []},
    {val: 3, neighbors: []},
    {val: 4, neighbors: []},
  ]
  expectedNodes[0].neighbors.push(
    expectedNodes[3],
    expectedNodes[4],
    expectedNodes[2],
  )
  expectedNodes[3].neighbors.push(expectedNodes[2])
  expectedNodes[4].neighbors.push(
    expectedNodes[0],
    expectedNodes[3],
    expectedNodes[1],
  )
  expectedNodes[2].neighbors.push(expectedNodes[0])
  expectedNodes[1].neighbors.push(expectedNodes[2])

  expect(g).toEqual(expectedNodes[0])
})

test('the Heap works', () => {
  const heap = new Heap()

  heap.add(2)
  expect(heap.peek()).toEqual(2)

  heap.add(5)
  expect(heap.peek()).toEqual(5)

  heap.add(3)
  expect(heap.peek()).toEqual(5)

  heap.add(4)
  expect(heap.peek()).toEqual(5)

  heap.add(6)
  expect(heap.peek()).toEqual(6)


  expect(heap.remove()).toEqual(6)
  expect(heap.peek()).toEqual(5)
  expect(heap.remove()).toEqual(5)
  expect(heap.peek()).toEqual(4)

  heap.add(1)
  expect(heap.peek()).toEqual(4)

  heap.add(9)
  expect(heap.remove()).toEqual(9)
  expect(heap.remove()).toEqual(4)
  expect(heap.remove()).toEqual(3)
  expect(heap.remove()).toEqual(2)
  expect(heap.remove()).toEqual(1)

  heap.add(11)
  expect(heap.remove()).toEqual(11)
})
