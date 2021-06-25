import {numTrees} from './unique-binary-search-trees'

test('generates the correct number of unique bsts 1', () => {
  const n = 3

  expect(numTrees(n)).toEqual(5)
})

test('generates the correct number of unique bsts 2', () => {
  const n = 1

  expect(numTrees(n)).toEqual(1)
})

test('generates the correct number of unique bsts 3', () => {
  const n = 2

  expect(numTrees(n)).toEqual(2)
})

test('generates the correct number of unique bsts 4', () => {
  const n = 4

  expect(numTrees(n)).toEqual(14)
})

