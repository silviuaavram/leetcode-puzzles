import {
  toTree,
  toLinkedList,
  TreeNode,
  toGraph,
  GraphNode,
  NAryTreeNode,
  toNAryTree,
} from 'utils'

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

test('toNAry tree works 1', () => {
  const nums = [1, null, 3, 2, 4, null, 5, 6]
  const expected: NAryTreeNode = {
    val: 1,
    children: [
      {
        val: 3,
        children: [
          {val: 5, children: []},
          {val: 6, children: []},
        ],
      },
      {val: 2, children: []},
      {val: 4, children: []},
    ],
  }

  expect(toNAryTree(nums)).toEqual(expected)
})

test('toNAry tree works 2', () => {
  const nums = [
    1,
    null,
    2,
    3,
    4,
    5,
    null,
    null,
    6,
    7,
    null,
    8,
    null,
    9,
    10,
    null,
    null,
    11,
    null,
    12,
    null,
    13,
    null,
    null,
    14,
  ]
  const expected: NAryTreeNode = {
    val: 1,
    children: [
      {val: 2, children: []},
      {
        val: 3,
        children: [
          {val: 6, children: []},
          {val: 7, children: [{val: 11, children: [{val: 14, children: []}]}]},
        ],
      },
      {val: 4, children: [{val: 8, children: [{val: 12, children: []}]}]},
      {
        val: 5,
        children: [
          {val: 9, children: [{val: 13, children: []}]},
          {val: 10, children: []},
        ],
      },
    ],
  }

  expect(toNAryTree(nums)).toEqual(expected)
})

test('toNAry tree works 3', () => {
  const nums = [1]
  const expected: NAryTreeNode = {
    val: 1,
    children: [],
  }

  expect(toNAryTree(nums)).toEqual(expected)
})

test('toNAry tree works 4', () => {
  const nums = [1, null]
  const expected: NAryTreeNode = {
    val: 1,
    children: [],
  }

  expect(toNAryTree(nums)).toEqual(expected)
})
test('toNAry tree works 5', () => {
  const nums = [1, null, null]
  const expected: NAryTreeNode = {
    val: 1,
    children: [],
  }

  expect(toNAryTree(nums)).toEqual(expected)
})
