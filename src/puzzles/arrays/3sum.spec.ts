import {threeSum} from './3sum'

test('finds triplets with the requested sum 0 1', () => {
  const nums = [-1, 0, 1, 2, -1, -4]
  const expected = [
    [-1, -1, 2],
    [-1, 0, 1],
  ]

  expect(threeSum(nums)).toEqual(expected)
})

test('finds triplets with the requested sum 0 2', () => {
  const nums: number[] = []
  const expected: number[][] = []

  expect(threeSum(nums)).toEqual(expected)
})

test('finds triplets with the requested sum 0 3', () => {
  const nums: number[] = [0]
  const expected: number[][] = []

  expect(threeSum(nums)).toEqual(expected)
})

test('finds triplets with the requested sum 0 4', () => {
  const nums: number[] = [0, 0, 0, 0]
  const expected: number[][] = [[0, 0, 0]]

  expect(threeSum(nums)).toEqual(expected)
})
