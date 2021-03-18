import {toBinaryTree, TreeNode} from 'utils'
import {levelOrder} from './binary-tree-level-order-traversal'

test('should return nodes level by level', () => {
  const tree = toBinaryTree([3,9,20,null,null,15,7])

  expect(levelOrder(tree)).toEqual([[3], [9, 20], [15, 7]])
})

test('should return the same node', () => {
  const tree = toBinaryTree([1])

  expect(levelOrder(tree)).toEqual([[1]])
})

test('should return the same node', () => {
  const tree: TreeNode = null

  expect(levelOrder(tree)).toEqual([])
})
