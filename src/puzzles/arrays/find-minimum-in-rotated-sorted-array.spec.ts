import {findMin} from './find-minimum-in-rotated-sorted-array'

test('finds the minimum 1', () => {
  const nums = [3, 4, 5, 1, 2]

  expect(findMin(nums)).toEqual(1)
})

test('finds the minimum 2', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]

  expect(findMin(nums)).toEqual(0)
})

test('finds the minimum 3', () => {
  const nums = [11, 13, 15, 17]

  expect(findMin(nums)).toEqual(11)
})

test('finds the minimum 4', () => {
  const nums = [11, 13, 15, 17, 1]

  expect(findMin(nums)).toEqual(1)
})

