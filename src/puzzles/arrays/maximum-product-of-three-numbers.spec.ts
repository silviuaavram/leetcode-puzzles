import {maximumProduct} from './maximum-product-of-three-numbers'

test('finds the max product of 3 numbers 1', () => {
  const nums = [1, 2, 3]

  expect(maximumProduct(nums)).toEqual(6)
})

test('finds the max product of 3 numbers 2', () => {
  const nums = [1, 2, 3, 4]

  expect(maximumProduct(nums)).toEqual(24)
})

test('finds the max product of 3 numbers 3', () => {
  const nums = [-1, -2, -3]

  expect(maximumProduct(nums)).toEqual(-6)
})

test('finds the max product of 3 numbers 4', () => {
  const nums = [1, 2, 3, -4, 5, -6]

  expect(maximumProduct(nums)).toEqual(120)
})

test('finds the max product of 3 numbers 5', () => {
  const nums = [1, 2, 3, 4, 5, -60]

  expect(maximumProduct(nums)).toEqual(60)
})
