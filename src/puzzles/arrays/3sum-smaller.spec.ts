import {threeSumSmaller} from './3sum-smaller'

test('finds the correct numbers 1', () => {
  const nums = [-2, 0, 1, 3]
  const target = 2

  expect(threeSumSmaller(nums, target)).toEqual(2)
})

test('finds the correct numbers 2', () => {
  const nums: number[] = []
  const target = 0

  expect(threeSumSmaller(nums, target)).toEqual(0)
})

test('finds the correct numbers 3', () => {
  const nums = [0]
  const target = 0

  expect(threeSumSmaller(nums, target)).toEqual(0)
})

test('finds the correct numbers 4', () => {
  const nums = [-5, 6, 2, 4, 2, 1, 0]
  const target = 5

  expect(threeSumSmaller(nums, target)).toEqual(17)
})

test('finds the correct numbers 5', () => {
  const nums = [1, 1, -2]
  const target = 1

  expect(threeSumSmaller(nums, target)).toEqual(1)
})
