import {insert} from './insert-interval'

test('inserts the interval correctly 1', () => {
  const intervals = [
    [1, 3],
    [6, 9],
  ]
  const newInterval = [2, 5]
  const output = [
    [1, 5],
    [6, 9],
  ]

  expect(insert(intervals, newInterval)).toEqual(output)
})

test('inserts the interval correctly 2', () => {
  const intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ]
  const newInterval = [4, 8]
  const output = [
    [1, 2],
    [3, 10],
    [12, 16],
  ]

  expect(insert(intervals, newInterval)).toEqual(output)
})

test('inserts the interval correctly 3', () => {
  const intervals: number[][] = []
  const newInterval = [5, 7]
  const output = [[5, 7]]

  expect(insert(intervals, newInterval)).toEqual(output)
})

test('inserts the interval correctly 4', () => {
  const intervals: number[][] = [[1, 5]]
  const newInterval = [2, 3]
  const output = [[1, 5]]

  expect(insert(intervals, newInterval)).toEqual(output)
})

test('inserts the interval correctly 5', () => {
  const intervals: number[][] = [[1, 5]]
  const newInterval = [2, 7]
  const output = [[1, 7]]

  expect(insert(intervals, newInterval)).toEqual(output)
})

test('inserts the interval correctly 6', () => {
  const intervals: number[][] = [[3, 5]]
  const newInterval = [0, 2]
  const output = [
    [0, 2],
    [3, 5],
  ]

  expect(insert(intervals, newInterval)).toEqual(output)
})
