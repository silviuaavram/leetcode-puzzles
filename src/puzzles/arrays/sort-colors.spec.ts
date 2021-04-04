import {sortColors} from './sort-colors'

test('should sort colors 1', () => {
  const nums = [2, 0, 2, 1, 1, 0]

  sortColors(nums)

  expect(nums).toEqual([0, 0, 1, 1, 2, 2])
})

test('should sort colors 2', () => {
  const nums = [0]

  sortColors(nums)

  expect(nums).toEqual([0])
})

test('should sort colors 3', () => {
  const nums = [2, 0, 1]

  sortColors(nums)

  expect(nums).toEqual([0, 1, 2])
})

test('should sort colors 4', () => {
  const nums = [1]

  sortColors(nums)

  expect(nums).toEqual([1])
})
