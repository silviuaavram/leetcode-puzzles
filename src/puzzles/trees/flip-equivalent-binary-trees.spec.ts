import {toTree, TreeNode} from 'utils'
import {flipEquiv} from './flip-equivalent-binary-trees'

test('checks for flip equivalence 1', () => {
  const root1 = toTree([1, 2, 3, 4, 5, 6, null, null, null, 7, 8])
  const root2 = toTree([1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7])

  expect(flipEquiv(root1, root2)).toEqual(true)
})

test('checks for flip equivalence 2', () => {
  const root1: TreeNode = toTree([])
  const root2: TreeNode = toTree([])

  expect(flipEquiv(root1, root2)).toEqual(true)
})

test('checks for flip equivalence 3', () => {
  const root1: TreeNode = toTree([1])
  const root2: TreeNode = toTree([])

  expect(flipEquiv(root1, root2)).toEqual(false)
})

test('checks for flip equivalence 4', () => {
  const root1: TreeNode = toTree([0, null, 1])
  const root2: TreeNode = toTree([])

  expect(flipEquiv(root1, root2)).toEqual(false)
})

test('checks for flip equivalence 5', () => {
  const root1: TreeNode = toTree([0, null, 1])
  const root2: TreeNode = toTree([0, 1])

  expect(flipEquiv(root1, root2)).toEqual(true)
})
