import {toTree, TreeNode} from 'utils'
import {deserialize, serialize} from './serialize-and-deserialize-bst'

test('serialization and deserialization works 1', () => {
  const tree = toTree([100, 50, 200, 25, 75, null, 350])
  const serializedTree = serialize(tree)

  expect(serializedTree).toEqual('100 50 200 25 75 -1 350')
  expect(deserialize(serializedTree)).toEqual(tree)
})

test('serialization and deserialization works 2', () => {
  const tree = toTree([100])
  const serializedTree = serialize(tree)

  expect(serializedTree).toEqual('100')
  expect(deserialize(serializedTree)).toEqual(tree)
})

test('serialization and deserialization works 3', () => {
  const tree = toTree([])
  const serializedTree = serialize(tree)

  expect(serializedTree).toEqual('')
  expect(deserialize(serializedTree)).toEqual(tree)
})

test('serialization and deserialization works 4', () => {
  const tree: TreeNode = null
  const serializedTree = serialize(tree)

  expect(serializedTree).toEqual('')
  expect(deserialize(serializedTree)).toEqual(tree)
})
