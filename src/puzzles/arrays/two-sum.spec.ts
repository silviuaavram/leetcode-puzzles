import {twoSum} from './two-sum'

test('should throw error for non-existing sum', () => {
  const nums = [5, 7, 1, 2, 8, 4, 3]
  expect(() => twoSum(nums, 19)).toThrowErrorMatchingInlineSnapshot(
    `"should not end here."`,
  )
})

test('should return [0, 1] for existing target 10', () => {
  const nums = [2, 7, 11, 15]
  expect(twoSum(nums, 9)).toEqual([0, 1])
})

test('should return [1, 2] for existing target 6', () => {
  const nums = [3, 2, 4]
  expect(twoSum(nums, 6)).toEqual([1, 2])
})

test('should return [3, 3] for existing target 6', () => {
  const nums = [3, 3]
  expect(twoSum(nums, 6)).toEqual([0, 1])
})

test('should throw error for empty nums', () => {
  expect(() => twoSum([], 12)).toThrowErrorMatchingInlineSnapshot(
    `"should not end here."`,
  )
})
