import {treeDiameter} from './tree-diameter'

test('gets the max diameter of a tree 1', () => {
  const edges = [
    [0, 1],
    [0, 2],
  ]

  expect(treeDiameter(edges)).toEqual(2)
})

test('gets the max diameter of a tree 2', () => {
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 4],
    [4, 5],
  ]

  expect(treeDiameter(edges)).toEqual(4)
})
