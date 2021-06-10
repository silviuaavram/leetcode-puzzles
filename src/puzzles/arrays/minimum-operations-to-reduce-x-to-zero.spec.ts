import {minOperations} from './minimum-operations-to-reduce-x-to-zero'

test('performs 2 operations 1', () => {
  const nums = [1, 1, 4, 2, 3]
  const x = 5

  expect(minOperations(nums, x)).toEqual(2)
})

test('performs no operations', () => {
  const nums = [5, 6, 7, 8, 9]
  const x = 4

  expect(minOperations(nums, x)).toEqual(-1)
})

test('performs 5 operations 1', () => {
  const nums = [3, 2, 20, 1, 1, 3]
  const x = 10

  expect(minOperations(nums, x)).toEqual(5)
})

test('performs 2 operations 2', () => {
  const nums = [3, 1, 1, 1, 5, 1]
  const x = 6

  expect(minOperations(nums, x)).toEqual(2)
})

test('performs 3 operations', () => {
  const nums = [1, 1, 1, 1, 1]
  const x = 3

  expect(minOperations(nums, x)).toEqual(3)
})

test('performs 5 operations 2', () => {
  const nums = [10, 1, 1, 1, 1, 1]
  const x = 5

  expect(minOperations(nums, x)).toEqual(5)
})

test('performs 1 operations 3', () => {
  const nums = [1, 1, 1, 4, 5, 3]
  const x = 3

  expect(minOperations(nums, x)).toEqual(1)
})

test('performs 1 operations 4', () => {
  const nums = [5, 2, 3, 1, 1]
  const x = 5

  expect(minOperations(nums, x)).toEqual(1)
})
