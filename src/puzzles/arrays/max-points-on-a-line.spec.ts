import {maxPoints} from './max-points-on-a-line'

test('gets the max points on a line 1', () => {
  const points = [
    [1, 1],
    [2, 2],
    [3, 3],
  ]

  expect(maxPoints(points)).toEqual(3)
})

test('gets the max points on a line 2', () => {
  const points = [
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ]

  expect(maxPoints(points)).toEqual(4)
})

test('gets the max points on a line 3', () => {
  const points = [[1, 10]]

  expect(maxPoints(points)).toEqual(1)
})

test('gets the max points on a line 4', () => {
  const points = [
    [1, 10],
    [10, 1],
  ]

  expect(maxPoints(points)).toEqual(2)
})
