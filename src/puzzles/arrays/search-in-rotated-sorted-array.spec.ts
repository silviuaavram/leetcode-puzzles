import {search} from './search-in-rotated-sorted-array'

test('should return 4', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 0

  expect(search(nums, target)).toEqual(4)
})

test('should return 6', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 2

  expect(search(nums, target)).toEqual(6)
})

test('should return 6', () => {
  const nums = [4, 5, 6, -1, 0, 1, 2]
  const target = 2

  expect(search(nums, target)).toEqual(6)
})

test('should return 1', () => {
  const nums = [4, 5, 6, -1, 0, 1, 2]
  const target = 5

  expect(search(nums, target)).toEqual(1)
})

test('should return -1', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 3

  expect(search(nums, target)).toEqual(-1)
})

test('should return -1', () => {
  const nums = [1]
  const target = 0

  expect(search(nums, target)).toEqual(-1)
})
