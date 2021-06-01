import {minSubArrayLen} from './minimum-size-subarray-sum'

test('the size of the subarray is 2', () => {
  const target = 7
  const nums = [2, 3, 1, 2, 4, 3]

  expect(minSubArrayLen(target, nums)).toEqual(2)
})

test('the size of the subarray is 1', () => {
  const target = 4
  const nums = [1, 4, 4]

  expect(minSubArrayLen(target, nums)).toEqual(1)
})

test('the size of the subarray is 0', () => {
  const target = 11
  const nums = [1, 1, 1, 1, 1, 1, 1, 1]

  expect(minSubArrayLen(target, nums)).toEqual(0)
})

test('the size of the subarray is 1', () => {
  const target = 10
  const nums = [1, 2, 3, 4, 1, 8, 2, 5, 5, 10, 1, 2]

  expect(minSubArrayLen(target, nums)).toEqual(1)
})

test('the size of the subarray is 2', () => {
  const target = 15
  const nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]

  expect(minSubArrayLen(target, nums)).toEqual(2)
})
