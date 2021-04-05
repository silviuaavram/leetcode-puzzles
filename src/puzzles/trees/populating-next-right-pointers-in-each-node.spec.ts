import {toTree} from 'utils'
import {connect, TreeWithNextNode} from './populating-next-right-pointers-in-each-node'

test('it connects binary tree', () => {
  const tree = (toTree([1, 2, 3, 4, 5, 6, 7]) as unknown) as TreeWithNextNode
  const expected = (toTree([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
  ]) as unknown) as TreeWithNextNode
  expected.next = null
  expected.left.next = expected.right
  expected.right.next = null
  expected.left.left.next = expected.left.right
  expected.left.right.next = expected.right.left
  expected.right.left.next = expected.right.right
  expected.right.right.next = null

  connect(tree)

  expect(tree).toEqual(expected)
})

test('it connects one node tree', () => {
  const tree = (toTree([1]) as unknown) as TreeWithNextNode

  connect(tree)

  expect(tree).toEqual(tree)
})

test('it connects no node tree', () => {
  const tree = (toTree([]) as unknown) as TreeWithNextNode

  connect(tree)

  expect(tree).toEqual(tree)
})
