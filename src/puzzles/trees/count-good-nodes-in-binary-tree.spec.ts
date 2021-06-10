import {toTree} from 'utils'
import {goodNodes} from './count-good-nodes-in-binary-tree'

test('counds good nodes correctly 1', () => {
  const root = toTree([3, 1, 4, 3, null, 1, 5])

  expect(goodNodes(root)).toEqual(4)
})

test('counds good nodes correctly 2', () => {
  const root = toTree([3, 3, null, 4, 2])

  expect(goodNodes(root)).toEqual(3)
})

test('counds good nodes correctly 3', () => {
  const root = toTree([1])

  expect(goodNodes(root)).toEqual(1)
})

test('counds good nodes correctly 4', () => {
  const root = toTree([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

  expect(goodNodes(root)).toEqual(1)
})

test('counds good nodes correctly 5', () => {
  expect(goodNodes(null)).toEqual(0)
})
