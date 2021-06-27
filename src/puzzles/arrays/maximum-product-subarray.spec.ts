import {maxProduct} from './maximum-product-subarray'

test('returns the max product 1', () => {
  const nums = [2, 3, -2, 4]

  expect(maxProduct(nums)).toEqual(6)
})

test('returns the max product 2', () => {
  const nums = [-2, 0, -1]

  expect(maxProduct(nums)).toEqual(0)
})

test('returns the max product 3', () => {
  const nums = [2, 3, -2, -4]

  expect(maxProduct(nums)).toEqual(48)
})

test('returns the max product 4', () => {
  const nums = [-2, 3, -2, -4]

  expect(maxProduct(nums)).toEqual(24)
})

test('returns the max product 5', () => {
  const nums = [1]

  expect(maxProduct(nums)).toEqual(1)
})

test('returns the max product 6', () => {
  const nums = [3, -1, 4]

  expect(maxProduct(nums)).toEqual(4)
})

test('returns the max product 7', () => {
  const nums = [2, -5, -2, -4, 3]

  expect(maxProduct(nums)).toEqual(24)
})
