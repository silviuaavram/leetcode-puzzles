import {findDuplicate} from './find-the-duplicate-number'

test('should return 2', () => {
  expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2)
})

test('should return 3', () => {
  expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3)
})

test('should return 1', () => {
  expect(findDuplicate([1, 1])).toBe(1)
})

test('should return 1', () => {
  expect(findDuplicate([1, 1, 2])).toBe(1)
})
