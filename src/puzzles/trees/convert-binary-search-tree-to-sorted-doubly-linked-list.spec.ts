import {toTree, TreeNode} from 'utils'
import {treeToDoublyList} from './convert-binary-search-tree-to-sorted-doubly-linked-list'

test('converts from tree to doubly linked list 1', () => {
  const root = toTree([4, 2, 5, 1, 3])
  const node1: TreeNode = {val: 1, left: null, right: null}
  const node2: TreeNode = {val: 2, left: null, right: null}
  const node3: TreeNode = {val: 3, left: null, right: null}
  const node4: TreeNode = {val: 4, left: null, right: null}
  const node5: TreeNode = {val: 5, left: null, right: null}

  node1.left = node5
  node1.right = node2
  node2.left = node1
  node2.right = node3
  node3.left = node2
  node3.right = node4
  node4.left = node3
  node4.right = node5
  node5.left = node4
  node5.right = node1

  expect(treeToDoublyList(root)).toEqual(node1)
})
