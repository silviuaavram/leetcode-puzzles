import {combinationSum} from './combination-sum'

test('should return 2 solutions', () => {
  const candidates = [2, 3, 6, 7]
  const target = 7
  const expected = [[2, 2, 3], [7]]

  expect(combinationSum(candidates, target)).toEqual(expected)
})

test('should return 3 solutions', () => {
  const candidates = [2, 3, 5]
  const target = 8
  const expected = [
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ]

  expect(combinationSum(candidates, target)).toEqual(expected)
})

test('should return 1 solutions', () => {
  const candidates = [1]
  const target = 2
  const expected = [[1, 1]]

  expect(combinationSum(candidates, target)).toEqual(expected)
})

test('should return no solutions 1', () => {
  const candidates = [2]
  const target = 1
  const expected: number[] = []

  expect(combinationSum(candidates, target)).toEqual(expected)
})

test('should return no solutions 2', () => {
  const candidates: number[] = []
  const target = 8
  const expected: number[] = []

  expect(combinationSum(candidates, target)).toEqual(expected)
})
