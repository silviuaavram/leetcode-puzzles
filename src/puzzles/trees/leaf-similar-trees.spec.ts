import {toTree} from 'utils'
import {leafSimilar} from './leaf-similar-trees'

test('checks the trees are leaf similar 1', () => {
  const root1 = toTree([1])
  const root2 = toTree([1])

  expect(leafSimilar(root1, root2)).toEqual(true)
})

test('checks the trees are leaf similar 2', () => {
  const root1 = toTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4])
  const root2 = toTree([
    3,
    5,
    1,
    6,
    7,
    4,
    2,
    null,
    null,
    null,
    null,
    null,
    null,
    9,
    8,
  ])
  expect(leafSimilar(root1, root2)).toEqual(true)
})

test('checks the trees are leaf similar 3', () => {
  const root1 = toTree([1])
  const root2 = toTree([2])

  expect(leafSimilar(root1, root2)).toEqual(false)
})

test('checks the trees are leaf similar 4', () => {
  const root1 = toTree([1, 2])
  const root2 = toTree([2, 2])

  expect(leafSimilar(root1, root2)).toEqual(true)
})

test('checks the trees are leaf similar 5', () => {
  const root1 = toTree([1, 2, 3])
  const root2 = toTree([1, 3, 2])

  expect(leafSimilar(root1, root2)).toEqual(false)
})

test('checks the trees are leaf similar 6', () => {
  const root1 = toTree([1, null, 2])
  const root2 = toTree([2, 2])

  expect(leafSimilar(root1, root2)).toEqual(true)
})
