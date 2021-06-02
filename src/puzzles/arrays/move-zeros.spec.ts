import {moveZeroes} from './move-zeros'

test('should move zeros to the end 1', () => {
  const nums = [0, 1, 0, 3, 12]
  moveZeroes(nums)
  expect(nums).toEqual([1, 3, 12, 0, 0])
})

test('should move zeros to the end 2', () => {
  const nums: number[] = []
  moveZeroes(nums)
  expect(nums).toEqual([])
})

test('should move zeros to the end 3', () => {
  const nums = [0]
  moveZeroes(nums)
  expect(nums).toEqual([0])
})

test('should move zeros to the end 4', () => {
  const nums = [1, 2, 3]
  moveZeroes(nums)
  expect(nums).toEqual([1, 2, 3])
})

test('should move zeros to the end 5', () => {
  const nums = [0, 1, 0, 0, 12]
  moveZeroes(nums)
  expect(nums).toEqual([1, 12, 0, 0, 0])
})

test('should move zeros to the end 6', () => {
  const nums = [0, 0, 0, 0, 12]
  moveZeroes(nums)
  expect(nums).toEqual([12, 0, 0, 0, 0])
})

test('should move zeros to the end 1', () => {
  const nums = [0, 0, 0, 3, 12]
  moveZeroes(nums)
  expect(nums).toEqual([3, 12, 0, 0, 0])
})
