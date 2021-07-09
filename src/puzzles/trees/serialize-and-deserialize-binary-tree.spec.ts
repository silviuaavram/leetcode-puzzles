import {toTree} from 'utils'
import {serialize, deserialize} from './serialize-and-deserialize-binary-tree'

test('serializes and deserializes a tree 1', () => {
  const root = toTree([1, 2, 3, null, null, 4, 5])
  const serializedTree = serialize(root)
  const deserializedTree = deserialize(serializedTree)

  expect(serializedTree).toEqual('1 2 3 null null 4 5')
  expect(deserializedTree).toEqual(root)
})

test('serializes and deserializes a tree 2', () => {
  const root = toTree([])
  const serializedTree = serialize(root)
  const deserializedTree = deserialize(serializedTree)

  expect(serializedTree).toEqual('')
  expect(deserializedTree).toEqual(root)
})

test('serializes and deserializes a tree 3', () => {
  const root = toTree([1])
  const serializedTree = serialize(root)
  const deserializedTree = deserialize(serializedTree)

  expect(serializedTree).toEqual('1')
  expect(deserializedTree).toEqual(root)
})

test('serializes and deserializes a tree 4', () => {
  const root = toTree([1, 2])
  const serializedTree = serialize(root)
  const deserializedTree = deserialize(serializedTree)

  expect(serializedTree).toEqual('1 2')
  expect(deserializedTree).toEqual(root)
})

