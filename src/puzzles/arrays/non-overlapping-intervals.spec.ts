import {eraseOverlapIntervals} from './non-overlapping-intervals'

test('erases overlapping intervals 1', () => {
  const intervals = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]

  expect(eraseOverlapIntervals(intervals)).toEqual(1)
})

test('erases overlapping intervals 2', () => {
  const intervals = [
    [1, 2],
    [1, 2],
    [1, 2],
  ]

  expect(eraseOverlapIntervals(intervals)).toEqual(2)
})

test('erases overlapping intervals 3', () => {
  const intervals = [
    [1, 2],
    [2, 3],
  ]

  expect(eraseOverlapIntervals(intervals)).toEqual(0)
})

test('erases overlapping intervals 4', () => {
  const intervals = [[1, 2]]

  expect(eraseOverlapIntervals(intervals)).toEqual(0)
})

test('erases overlapping intervals 5', () => {
  const intervals = [
    [1, 6],
    [3, 4],
    [5, 6],
    [1, 3],
  ]

  expect(eraseOverlapIntervals(intervals)).toEqual(1)
})
test('erases overlapping intervals 6', () => {
  const intervals = [
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ]

  expect(eraseOverlapIntervals(intervals)).toEqual(2)
})
