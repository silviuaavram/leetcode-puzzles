import {subsets} from './subsets'

test('subsets for [1,2,3]', () => {
  const nums = [1, 2, 3]
  const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

  expect(subsets(nums)).toEqual(expected)
})

test('subsets for [0]', () => {
  const nums = [0]
  const expected = [[], [0]]

  expect(subsets(nums)).toEqual(expected)
})

test('no subsets for []', () => {
  const nums: number[] = []
  const expected: number[][] = [[]]

  expect(subsets(nums)).toEqual(expected)
})
