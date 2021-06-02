import {merge} from './merge-intervals'

test('merges intervals 1', () => {
  const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]
  const expected = [
    [1, 6],
    [8, 10],
    [15, 18],
  ]

  expect(merge(intervals)).toEqual(expected)
})

test('merges intervals 2', () => {
  const intervals = [
    [1, 4],
    [4, 5],
  ]
  const expected = [[1, 5]]

  expect(merge(intervals)).toEqual(expected)
})

test('merges intervals 3', () => {
  const intervals = [
    [1, 3],
    [8, 10],
    [15, 18],
  ]
  const expected = [
    [1, 3],
    [8, 10],
    [15, 18],
  ]

  expect(merge(intervals)).toEqual(expected)
})

test('merges intervals 4', () => {
  const intervals = [] as number[][]
  const expected = [] as number[][]

  expect(merge(intervals)).toEqual(expected)
})

test('merges intervals 5', () => {
  const intervals = [[1, 3]]
  const expected = [[1, 3]]

  expect(merge(intervals)).toEqual(expected)
})

test('merges intervals 6', () => {
  const intervals = [
    [1, 4],
    [0, 4],
  ]
  const expected = [[0, 4]]

  expect(merge(intervals)).toEqual(expected)
})
