import {findKthLargest} from './kth-largest-element-in-an-array'

test('finds the 2nd largest', () => {
  const nums = [3, 2, 1, 5, 6, 4]
  const k = 2

  expect(findKthLargest(nums, k)).toEqual(5)
})

test('finds the 4th largest', () => {
  const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
  const k = 4

  expect(findKthLargest(nums, k)).toEqual(4)
})

test('finds the 4th largest', () => {
  const nums = [1, 2, 3]
  const k = 4

  expect(findKthLargest(nums, k)).toEqual(-1)
})

test('finds the 4th largest', () => {
  const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
  const k = 9

  expect(findKthLargest(nums, k)).toEqual(1)
})

test('finds the 5th largest', () => {
  const nums = [7, 6, 5, 4, 3, 2, 1]
  const k = 5

  expect(findKthLargest(nums, k)).toEqual(3)
})

test('finds the 20th largest', () => {
  const nums = [
    3,
    2,
    3,
    1,
    2,
    4,
    5,
    5,
    6,
    7,
    7,
    8,
    2,
    3,
    1,
    1,
    1,
    10,
    11,
    5,
    6,
    2,
    4,
    7,
    8,
    5,
    6,
  ]
  const k = 20

  expect(findKthLargest(nums, k)).toEqual(2)
})
