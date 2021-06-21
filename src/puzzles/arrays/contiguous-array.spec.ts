import {findMaxLength} from './contiguous-array'

test('returns the max length correctly 1', () => {
  const nums = [0, 1]

  expect(findMaxLength(nums)).toEqual(2)
})

test('returns the max length correctly 2', () => {
  const nums = [0, 1, 0]

  expect(findMaxLength(nums)).toEqual(2)
})

test('returns the max length correctly 3', () => {
  const nums = [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]

  expect(findMaxLength(nums)).toEqual(10)
})

test('returns the max length correctly 4', () => {
  const nums = [0]

  expect(findMaxLength(nums)).toEqual(0)
})

test('returns the max length correctly 5', () => {
  const nums = [0, 1, 1, 0, 1, 1, 1, 0]

  expect(findMaxLength(nums)).toEqual(4)
})

test('returns the max length correctly 6', () => {
  const nums = [0, 0, 1, 0, 0, 0, 1, 1]

  expect(findMaxLength(nums)).toEqual(6)
})
