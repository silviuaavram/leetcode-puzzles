import {kClosest} from './k-closest-points-to-origin'

test('should return the correct points 1', () => {
  const points = [
    [1, 3],
    [-2, 2],
  ]
  const k = 1
  const expected = [[-2, 2]]

  expect(kClosest(points, k)).toEqual(expected)
})

test('should return the correct points 2', () => {
  const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ]
  const k = 2
  const expected = [
    [3, 3],
    [-2, 4],
  ]

  expect(kClosest(points, k)).toEqual(expected)
})

test('should return the correct points 3', () => {
  const points = [
    [0, 1],
    [1, 0],
  ]
  const k = 2

  expect(kClosest(points, k)).toEqual(points)
})

test('should return the correct points 4', () => {
  const points = [
    [68, 97],
    [34, -84],
    [60, 100],
    [2, 31],
    [-27, -38],
    [-73, -74],
    [-55, -39],
    [62, 91],
    [62, 92],
    [-57, -67],
  ]
  const k = 5
  const expected = [
    [2, 31],
    [-27, -38],
    [-55, -39],
    [-57, -67],
    [34, -84],
  ]

  expect(kClosest(points, k)).toEqual(expected)
})
