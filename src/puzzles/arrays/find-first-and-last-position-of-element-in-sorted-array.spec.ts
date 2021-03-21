import {searchRange} from './find-first-and-last-position-of-element-in-sorted-array'

test('should return 3,4', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8

  expect(searchRange(nums, target)).toEqual([3, 4])
})

test('should return -1,-1', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 6

  expect(searchRange(nums, target)).toEqual([-1, -1])
})

test('should return -1,-1', () => {
  const nums: number[] = []
  const target = 0

  expect(searchRange(nums, target)).toEqual([-1, -1])
})

test('should return 1,7', () => {
  const nums = [1, 5, 5, 5, 5, 5, 5, 5, 6, 10]
  const target = 5

  expect(searchRange(nums, target)).toEqual([1, 7])
})

test('should return 2,2', () => {
  const nums = [1, 2, 3]
  const target = 3

  expect(searchRange(nums, target)).toEqual([2,2])
})

test('should return 0,0', () => {
  const nums = [1, 2, 3]
  const target = 1

  expect(searchRange(nums, target)).toEqual([0, 0])
})

test('should return 0,1', () => {
  const nums = [1,1,2]
  const target = 1

	expect(searchRange(nums, target)).toEqual([0, 1])
})

test('should return 4,6', () => {
  const nums = [1,2,2,3,4,4,4]
  const target = 4

	expect(searchRange(nums, target)).toEqual([4,6])
})
