import {combinationSum2} from './combination-sum-ii'

test('returns 4 combinations', () => {
  const candidates = [10, 1, 2, 7, 6, 1, 5]
  const target = 8
  const expected = [
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ]

  expect(combinationSum2(candidates, target)).toEqual(
    expect.arrayContaining(expected),
  )
})

test('returns 2 combinations', () => {
  const candidates = [2, 5, 2, 1, 2]
  const target = 5
  const expected = [[1, 2, 2], [5]]

  expect(combinationSum2(candidates, target)).toEqual(
    expect.arrayContaining(expected),
  )
})

test('returns no combinations 1', () => {
  const candidates = [2, 5, 2, 1, 2]
  const target = 13
  const expected: number[][] = []

  expect(combinationSum2(candidates, target)).toEqual(
    expect.arrayContaining(expected),
  )
})

test('returns no combinations 2', () => {
  const candidates: number[] = []
  const target = 5
  const expected: number[][] = []

  expect(combinationSum2(candidates, target)).toEqual(
    expect.arrayContaining(expected),
  )
})
