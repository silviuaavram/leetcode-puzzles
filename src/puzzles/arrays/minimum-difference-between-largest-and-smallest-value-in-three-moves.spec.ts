import {minDifference} from './minimum-difference-between-largest-and-smallest-value-in-three-moves'

test('moves such that difference is minimum 1', () => {
  const nums = [5, 3, 2, 4]

  expect(minDifference(nums)).toEqual(0)
})

test('moves such that difference is minimum 2', () => {
  const nums = [1, 5, 0, 10, 14]

  expect(minDifference(nums)).toEqual(1)
})

test('moves such that difference is minimum 3', () => {
  const nums = [6, 6, 0, 1, 1, 4, 6]

  expect(minDifference(nums)).toEqual(2)
})

test('moves such that difference is minimum 4', () => {
  const nums = [1, 5, 6, 14, 15]

  expect(minDifference(nums)).toEqual(1)
})

test('moves such that difference is minimum 5', () => {
  const nums = [1]

  expect(minDifference(nums)).toEqual(0)
})

test('moves such that difference is minimum 6', () => {
  const nums = [1, 50]

  expect(minDifference(nums)).toEqual(0)
})

