import {rotate} from './rotate-array'

test('should rotate by 3 positions', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7]
  const k = 3

  rotate(nums, k)

  expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('should rotate by 2 positions', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7]
  const k = 2

  rotate(nums, k)

  expect(nums).toEqual([6, 7, 1, 2, 3, 4, 5])
})

test('should rotate by 10 positions', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7]
  const k = 10

  rotate(nums, k)

  expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('should rotate by 1 positions', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7]
  const k = 1

  rotate(nums, k)

  expect(nums).toEqual([7, 1, 2, 3, 4, 5, 6])
})

test('should rotate by 2 positions', () => {
  const nums = [-1, -100, 3, 99]
  const k = 2

  rotate(nums, k)

  expect(nums).toEqual([3, 99, -1, -100])
})

test('should rotate by 3 positions', () => {
  const nums = [1, 2, 3, 4]
  const k = 3

  rotate(nums, k)

  expect(nums).toEqual([2, 3, 4, 1])
})

test('should rotate by 2 positions', () => {
  const nums = [1, 2]
  const k = 2

  rotate(nums, k)

  expect(nums).toEqual([1, 2])
})
