import {combinationSum3} from './combination-sum-iii'

test('returns correct combinations 1', () => {
  const k = 3
  const n = 7
  const expected = [[1, 2, 4]]

  expect(combinationSum3(k, n)).toEqual(expected)
})

test('returns correct combinations 2', () => {
  const k = 3
  const n = 9
  const expected = [
    [1, 2, 6],
    [1, 3, 5],
    [2, 3, 4],
  ]

  expect(combinationSum3(k, n)).toEqual(expected)
})

test('returns correct combinations 3', () => {
  const k = 4
  const n = 1
  const expected: number[][] = []

  expect(combinationSum3(k, n)).toEqual(expected)
})

test('returns correct combinations 4', () => {
  const k = 3
  const n = 2
  const expected: number[][] = []

  expect(combinationSum3(k, n)).toEqual(expected)
})

test('returns correct combinations 5', () => {
  const k = 9
  const n = 45
  const expected = [[1, 2, 3, 4, 5, 6, 7, 8, 9]]

  expect(combinationSum3(k, n)).toEqual(expected)
})
