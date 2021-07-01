import {findMinArrowShots} from './minimum-number-of-arrows-to-burst-balloons'

test('fires the minimum number of arrows 1', () => {
  const points = [
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ]

  expect(findMinArrowShots(points)).toEqual(2)
})

test('fires the minimum number of arrows 2', () => {
  const points = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]

  expect(findMinArrowShots(points)).toEqual(4)
})

test('fires the minimum number of arrows 3', () => {
  const points = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]

  expect(findMinArrowShots(points)).toEqual(2)
})

test('fires the minimum number of arrows 4', () => {
  const points = [
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ]

  expect(findMinArrowShots(points)).toEqual(2)
})

test('fires the minimum number of arrows 5', () => {
  const points = [
    [9, 12],
    [1, 10],
    [4, 11],
    [8, 12],
    [3, 9],
    [6, 9],
    [6, 7],
  ]

  expect(findMinArrowShots(points)).toEqual(2)
})
