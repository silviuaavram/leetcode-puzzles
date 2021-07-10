import {toNAryTree} from 'utils'
import {Codec} from './serialize-and-deserialize-n-ary-tree'

test('serializes and deserializes n-ary tree 1', () => {
  const codec = new Codec()
  const root = toNAryTree([
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
  ])

  const serializedTree = codec.serialize(root)
  const deserializedTree = codec.deserialize(serializedTree)

  expect(serializedTree).toEqual('1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14')
  expect(deserializedTree).toEqual(root)
})
